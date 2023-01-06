const array = [10, 20, 30, -10, 11, 100];
const index = array.indexOf(30);
// removing
// const res = array.splice(index, 1);
//array.splice(index, undefined, -1000);
//insert
//array.splice(index,0,-10,-20);
//replace
// array.splice(index,2, 20);
// const ar1 = [40,200];
// array.splice(index, 1, ...ar1);
// const numbersPerPage = 2;
// const page = 1;
// const firstIndex = (page - 1) * numbersPerPage;
// const pageNumbers = array.slice(firstIndex, firstIndex + numbersPerPage);
// const ar1 = array.map(multiply2);
// function multiply2(number){
//         return number * 2;
// }  
// const ar2 = array.map(function(number,index){
//         return index + 1 +'. ' + number;
// });
const ar3 = array.map(function(number){
        return `<li>${number}</li>`
});
const ulElement = `<ul>${ar3.join('')}</ul>`;

