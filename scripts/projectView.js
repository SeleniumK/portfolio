(function(module){
  var projectView = {};

  projectView.initProjects = function(){
    $('#projects').empty();
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml(a));
    });
  };

  projectView.index = function(){
    $('#about').hide();
    $('#projects').show();
    Project.fetchAll();
  }

  module.projectView = projectView;
}(window));
