module.exports = function check(str, bracketsConfig) {
  var open = [],
    close = [],
    buf = [],
    check = 0;

  bracketsConfig.forEach(function(item, i, bracketsConfig) {
    open[i] = bracketsConfig[i][0];
    close[i] = bracketsConfig[i][1];
  });

  bracketsConfig.forEach(function(item, j, str) {
    bracketsConfig.forEach(function(item, z, open) {

      if(str[j] == open[z]) { buf.push(z); check++; }
      if(str[j] == close[z]) { if(z == buf.pop()) { check--; } else { return false; } }

    });

    if(check < 0) return false;
  });

  if(check == 0) return true;
  return false;
};
