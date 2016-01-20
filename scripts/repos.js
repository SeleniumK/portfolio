(function(module) {
  var repos = {};
  
  repos.all = [];

  repos.requestRepos = function(callback) {
    var qs = '?per_page=5&sort=updated';

    $.ajax({
        url: 'https://api.github.com/users/SeleniumK/repos' + qs,
        type: 'GET',
        headers: {'Authorization': 'token ' + githubToken},
        success: function(data, message, xhr){
          repos.all = data;
        }
      })
    .done(callback);
  };

  module.repos = repos;
})(window);
