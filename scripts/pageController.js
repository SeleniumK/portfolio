(function(module) {
  var pageController = {};

  pageController.projectIndex = function(){
      Project.fetchAll();
    };

  pageController.aboutIndex = function() {
    repos.requestRepos(pageView.initAbout);
  };

  module.pageController = pageController;
})(window);
