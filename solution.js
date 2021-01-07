const map = ar.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

// map is an associative array mapping the elements to their frequency:
let obj = JSON.stringify(map);
// prints {"10":4,"20":3,"30":1,"50":1}

let allSocks = Object.values(map);
for (let i = 0; i < allSocks.length; i++){
allSocks[i] = Math.floor(allSocks[i] / 2);
}
return allSocks.reduce((a, b) => a + b);
}
