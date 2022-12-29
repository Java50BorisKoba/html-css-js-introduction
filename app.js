// const ar =[];
// const ar1 = [1,2,3,4];
// ar.push(...ar1);
// ar.push('abc');
function getRandomNumber(min,max){
        min = Math.trunc(min);
        max = Math.trunc(max);
        return min + Math.trunc(Math.random() * (max-min + 1));
}
function getRandomMatrix(rows,columns,min,max){
        const matrix = [];
        for(let i = 0; i < rows;i++){
                matrix.push([]);
                for(let j =0 ;j < columns; j++){
                        matrix[i].push(getRandomNumber(min,max));
                }
        }
        return matrix;
}
const matrix = getRandomMatrix(3,4,0,1);
