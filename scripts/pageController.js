(function(module) {
  var pageController = {};

  pageController.index = function(obj){
    fetch(obj, pageView.initPage);
  };

  module.pageController = pageController;
})(window);
