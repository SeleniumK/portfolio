function Project(features){
  this.title = features.title;
  this.picture = features.picture;
  this.link = features.link;
};

Project.all = [];

Project.prototype.toHtml = function(a){
  var source = $('#template').html();
  var template = Handlebars.compile(source);
  var html = template(a);
  return html;
};

Project.loadAll = function(rawData){
  rawData.forEach(function(data) {
    Project.all.push(new Project(data));
  });
};

Project.checkUpdates = function(){
  $.getJSON('projects.json', function(rawData){
    Project.loadAll(rawData);
    localStorage.rawData = JSON.stringify(rawData);
    projectView.initProjects();
  });
};

Project.checkEtags = function(data, message, xhr){
  var eTag = xhr.getResponseHeader('ETag');
  if(typeof localStorage.projEtag == 'undefined' || localStorage.projEtag != eTag){
    localStorage.projEtag = eTag;
    Project.checkUpdates();
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
    Project.checkUpdates();
  }
};
