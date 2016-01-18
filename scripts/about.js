(function(module){
  var aboutPage = {};

  aboutPage.index = function(){
    $('#articles').hide();
    $('#about').show();
  }

  module.aboutPage = aboutPage;

}(window));
