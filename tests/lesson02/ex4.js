// Bài 4
const myHeight = 153;
let perfectWeight = (myHeight%100)*9/10;
let maxWeight = myHeight%100;
let minWeight = (myHeight%100)*8/10;
const myWeight = 47;

console.log(perfectWeight, maxWeight, minWeight);

if(myWeight === (myHeight%100)*9/10){
    console.log('Perfect weight');
}
else if (myWeight < (myHeight%100)*9/10){
    console.log('Under Perfection');
}
else{
    console.log('Over Perfection');
}
