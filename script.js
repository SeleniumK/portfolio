(function(module) {
  function Project(features) {
    Object.key(features).forEach(function(e, index, keys){
      this[e] = features[e];
    }, this);
  }

  Project.all = [];

  Project.prototype.toHtml = function(a){
    var source = $('#template').html();
    var template = Handlebars.compile(source);
    return template(a);
  };

  Project.loadAll = function(rawData){
    Project.all = rawData.map(function(proj) {
      return new Project(proj);
    });
  };

  Project.getUpdates = function(){
    $.getJSON('projects.json', function(rawData){
      Project.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      projectView.initProjects();
    });
  };

  Project.checkEtags = function(data, message, xhr){
    var eTag = xhr.getResponseHeader('ETag');
    if(!localStorage.projEtag || localStorage.projEtag != eTag){
      localStorage.projEtag = eTag;
      Project.getUpdates();
    }else {
      Project.loadAll(JSON.parse(localStorage.rawData));
      projectView.initProjects();
    }
  };

  Project.fetchAll = function(){
    if(localStorage.rawData){
      var head = $.ajax({
        type: 'HEAD',
        url: 'projects.json',
        success: Project.checkEtags
      });
    } else{
      Project.getUpdates();
    }
  };

  module.Project = Project;
})(window);
