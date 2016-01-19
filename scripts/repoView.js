(function(module) {
  var repoView = {};
  var $githubList = $('#githubProjects');

  var ui = function() {
    $githubList.empty();
  };

  var render = function(repos) {
    var aboutTemplate = Handlebars.compile($('#about-template').text());
    return aboutTemplate(repos);
  };

  repoView.index = function(){
    ui();
    $githubList.append(
      repos.with('stargazers_count').map(render)
  )};

  module.repoView = repoView;
})(window);
