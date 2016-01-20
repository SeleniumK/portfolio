(function(module) {
  function Project(features) {
    Object.keys(features).forEach(function(e, index, keys){
      this[e] = features[e];
    }, this);
  }

  Project.all = [];

  Project.loadAll = function(rawData){
    Project.all = rawData.map(function(proj) {
      return new Project(proj);
    });
  };

  Project.getUpdates = function(){
    $.getJSON('data/projects.json', function(rawData){
      Project.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      pageView.initProjects();
    });
  };

  Project.checkEtags = function(data, message, xhr){
    var eTag = xhr.getResponseHeader('ETag');
    if(!localStorage.projEtag || localStorage.projEtag != eTag){
      localStorage.projEtag = eTag;
      Project.getUpdates();
    }else {
      Project.loadAll(JSON.parse(localStorage.rawData));
      pageView.initProjects();
    }
  };

  Project.fetchAll = function(){
    if(localStorage.rawData){
      var head = $.ajax({
        type: 'HEAD',
        url: 'data/projects.json',
        success: Project.checkEtags
      });
    } else{
      Project.getUpdates();
    }
  };

  module.Project = Project;
})(window);
