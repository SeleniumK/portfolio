var allProjects = [];

function Project(features){
  this.title = features.title;
  this.picture = features.picture;
  this.link = features.link;
  this.display = function(){
    var $newproject = $('article.template').clone();
    $newproject.removeClass('template');

    $newproject.data('title', this.title);
    $newproject.data('picture', this.picture);
    $newproject.data('link', this.link);

    $newproject.find('a').attr('href', this.link);
    $newproject.find('img').attr('src', this.picture);
    return $newproject;
  };
};

rawData.forEach(function(projInd) {
  allProjects.push(new Project(projInd));
});

allProjects.forEach(function(a){
  $('#projects').append(a.display());
});
