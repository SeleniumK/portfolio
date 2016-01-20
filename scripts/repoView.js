(function(module) {
  var $g = $('#githubProjects');
  var $aTemp = $('#about-template');
  var repoView = {};

  // var ui = function() {
  //   $g.empty();
  // };

  // var render = function(repos) {
  //   var aboutTemplate = Handlebars.compile($('#about-template').text());
  //   return aboutTemplate(repos);
  // };

  repoView.index = function(){
    $g.empty();
    repos.all.forEach(function(r){
      $g.append(toHtml(r, $aTemp));
    });
    // $g.append(

        // repos.with('stargazers_count').map(function(repo){
      //   console.log(repo);
      //   toHtml(repo, $aTemp);
      // })
  };

  module.repoView = repoView;
})(window);
