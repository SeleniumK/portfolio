(function(module) {
  var $a = $('#about');
  var $p = $('#projects');
  var pageController = {};

  pageController.projectIndex = function(){
      $a.hide();
      $p.show();
      Project.fetchAll();
    };

  pageController.aboutIndex = function() {
    $p.hide();
    $a.show();
    repos.requestRepos(repoView.index);
  };

  module.pageController = pageController;
})(window);
