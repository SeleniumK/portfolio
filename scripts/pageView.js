(function(module){
  var $p = $('#projects');
  var $a = $('#about');
  var $r = $('#repos');

  var $pTemp = $('#project-template');
  var $rTemp = $('#repo-template');

  var render = function(data, dom){
    var source = dom.html();
    var template = Handlebars.compile(source);
    return template(data);
  };

  var appendData = function(section, appendTo, template){
    section.all.forEach(function(a){
      appendTo.append(render(a, template));
    });
  };

  var pageView = {};

  pageView.initProjects = function(){
    $a.hide();
    $p.empty();
    $p.show();
    appendData(Project, $p, $pTemp);
  };

  pageView.initAbout = function(){
    $p.hide();
    $r.empty();
    $a.show();
    appendData(repos, $r, $rTemp);
  };

  module.pageView = pageView;
}(window));
