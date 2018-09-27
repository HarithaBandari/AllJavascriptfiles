var x = { foo: 1, bar: 2 };

var replacer = function(key, value) {
  console.log('replacer called with key="' + key + '", value=' + value);
  if (key === 'foo') return value * 10;
  return value;
}
console.log(JSON.stringify(x, replacer, ' '));
