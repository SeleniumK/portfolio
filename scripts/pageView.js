(function(module){

  var render = function(data, domTemp){
    var source = domTemp.html();
    var template = Handlebars.compile(source);
    return template(data);
  };

  var appendData = function(obj){
    obj.$section.empty();
    obj.all.forEach(function(a){
      var domEl = obj.$section;
      domEl.append(render(a, obj.$template));
    });
  };

  var pageView = {};

  pageView.initPage = function(obj){
    var $page = obj.$tabPage;
    $page.siblings("section").hide()
    $page.show();
    appendData(obj);
  }

  module.pageView = pageView;
}(window));
