(function(module) {
  function Repo(ins){
    Object.keys(ins).forEach(function(e, index, keys){
      this[e] = ins[e];
    }, this);
  };

  Repo.$tabPage = $('#about');
  Repo.$section = $('#repos');
  Repo.$template = $('#repo-template');

  Repo.url = '/github/users/SeleniumK/repos?per_page=5&sort=updated';
  Repo.all = [];

  module.Repo = Repo;
})(window);
