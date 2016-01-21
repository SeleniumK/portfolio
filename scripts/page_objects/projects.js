(function(module) {
  function Project(ins) {
    Object.keys(ins).forEach(function(e, index, keys){
      this[e] = ins[e];
    }, this);
  };

  Project.$tabPage = $('#projects');
  Project.$section = $('#projects');
  Project.$template = $('#project-template');

  Project.url = 'data/projects.json';
  Project.all = [];

  module.Project = Project;
})(window);
