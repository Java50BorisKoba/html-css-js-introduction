const array = [20, -10, 333, 1000, 552, 7, -7];
function evenOddSort(array) {
   return array.sort(function(e1,e2){
        return  e1 % 2 == 0 ?  1 : -1;
      
});
}
console.log(`array: [${array}] evenOddSort => [${evenOddSort(array)}]`);
function getMin(array) {
  return array.reduce(function(min, cur) {
    return cur < min ? cur : min;
  });
}
console.log(`array: [${array}] getMin => ${getMin(array)}`);