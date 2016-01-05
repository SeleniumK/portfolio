var allProjects = [];

function Project(features){
  this.title = features.title;
  this.picture = features.picture;
  this.link = features.link;
};

Project.prototype.toHtml = function(){
  var $newproject = $('article.template').clone();
  $newproject.removeClass('template').attr('id', this.title);
  $newproject.find('a').attr('href', this.link);
  $newproject.find('img').attr('src', this.picture);
  return $newproject;
};

rawData.forEach(function(data) {
  allProjects.push(new Project(data));
});

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});