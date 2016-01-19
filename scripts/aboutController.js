(function(module) {
  console.log("iffe!");
  var aboutController = {};


  aboutController.index = function() {
    console.log('ran about controller');
    $('#projects').hide();
    $('#about').show();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
