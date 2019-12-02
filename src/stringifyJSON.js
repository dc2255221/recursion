// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    let result = [];
    _.each(obj, function(item) {
      result.push(stringifyJSON(item))
    })
    return '[' + result.join(',') + ']';
  }

  if (typeof(obj) === 'object') {
    let keyValuePairs = [];
    for (let key in obj){
      if (typeof(obj[key]) === 'function' || typeof(obj[key]) === 'undefined'){
        continue;
      } keyValuePair = '"' + key + '":' + stringifyJSON(obj[key]);
      keyValuePairs.push(keyValuePair);
    }
    return '{' + keyValuePairs.join(',') + '}';
  }
};
