module.exports = function check(str, bracketsConfig) {
  var open = [], close = [], buf = [], check = 0;

  bracketsConfig.forEach(function(item, i, bracketsConfig) {
    open[i] = bracketsConfig[i][0];
    close[i] = bracketsConfig[i][1];
  });

  for (var i = 0; i < str.length; i++) {
    for(var j = 0; j < open.length; j++) {
      if(str[i] == open[j]) { buf.push(j); check++; }
      if(str[i] == close[j]) { if(j == buf.pop()) { check--; } }
    }
  }

  if(check == 0) return true;

  return false;
};
