var allProjects = [];
var projectView = {};

function Project(features){
  this.title = features.title;
  this.picture = features.picture;
  this.link = features.link;
};

Project.prototype.toHtml = function(a){
  // var $newproject = $('article.template').clone();
  // $newproject.removeClass('template').attr('id', this.title);
  // $newproject.find('a').attr('href', this.link);
  // $newproject.find('img').attr('src', this.picture);
  // return $newproject;
  var source = $('#template').html();
  var template = Handlebars.compile(source);
  var html = template(a);
  return html;
};

rawData.forEach(function(data) {
  allProjects.push(new Project(data));
});

allProjects.forEach(function(a){
  $('#projects').append(a.toHtml(a));
});

projectView.handleMainNav = function(){
  $('#mainNav').on('click', '.tab', function(e) {
    $('section').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('#mainNav .tab:first').click();
};

$(document).ready(function(){
  projectView.handleMainNav();
});
