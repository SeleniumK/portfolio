(function(module){
  var $p = $('#projects');
  var $pTemp = $('#project-template');
  var projectView = {};

  projectView.initProjects = function(){
    $p.empty();
    Project.all.forEach(function(a){
      // $p.append(a.toHtml(a));
      $p.append(toHtml(a, $pTemp));
    });
  };


  module.projectView = projectView;
}(window));
