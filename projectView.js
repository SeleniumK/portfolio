(function(module){
  var projectView = {};
  projectView.handleMainNav = function(){
    $('#mainNav').on('click', '.tab', function(e) {
      $('section').hide();
      $('#' + $(this).data('content')).fadeIn();
    });

    $('#mainNav .tab:first').click();
  };

  projectView.initProjects = function(){
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml(a));
    });

    projectView.handleMainNav();
  };

  module.projectView = projectView;
}(window));
