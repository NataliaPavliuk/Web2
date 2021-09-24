function uniqual(str) {
    var c = {};
    var r = '';
  
    for (var i = 0; i < str.length; i++) {
      if (!c[str[i]]) {
        r = r + str[i];
        c[str[i]] = 1;
      }
    }
  
    return r;
  }
  
  console.log(uniqual("aaabbcba"));