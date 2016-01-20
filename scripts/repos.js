(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    var qs = '?per_page=5&sort=updated';
    $.get({
      url:'/github/users/SeleniumK/repos' + qs
    })
    .done(function(data, message, xhr){
      repos.all = data;
    })
    .done(callback);
  };

  module.repos = repos;
})(window);
