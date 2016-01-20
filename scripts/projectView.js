(function(module){
  var $p = $('#projects');
  var $a = $('#about');
  var $g = $('#githubProjects');

  var $pTemp = $('#project-template');
  var $aTemp = $('#about-template');

  var render = function(data, dom){
    var source = dom.html();
    var template = Handlebars.compile(source);
    return template(data);
  };

  var appendProjects = function(){
    $p.empty();
    Project.all.forEach(function(a){
      $p.append(render(a, $pTemp));
    });
  };

  var appendRepos = function(){
    $g.empty();
    repos.all.forEach(function(r){
      $g.append(render(r, $aTemp));
    });
  };

  var pageView = {};

  pageView.initProjects = function(){
    $a.hide();
    $p.show();
    appendProjects();
  };

  pageView.initAbout = function(){
    $p.hide();
    $a.show();
    appendRepos();
  };

  module.pageView = pageView;
}(window));
