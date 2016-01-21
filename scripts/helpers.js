var loadAll = function(obj, data){
  obj.all = data.map(function(a) {
    return new obj(a);
  });
};

var fetch = function(obj, callback){
  $.get(obj.url, function(data, message, xhr){
    loadAll(obj, data);
  }).done(function(){
      callback(obj)
  });
};
