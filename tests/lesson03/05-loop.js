let sum = 0;
for(i = 1; i < 101; i++){
    sum += i;
};

console.log(sum);


////////////////
let arr = [];
for(i = 1; i < 100; i++){
   if (i%2 === 1){
    arr.push(i);
   }
};
console.log(arr);


////////////////
for (let i = 1; i < 11; i++){
    console.log('user'+ i +'@example.com');
}



///////
const revenue = [
    {"month": 1, "total": 100},
    {"month": 2, "total": 200},
    {"month": 3, "total": 300},
    {"month": 4, "total": 400},
    {"month": 5, "total": 500},
    {"month": 6, "total": 600},
];

let tongProfit = 0;
for (let i = 0; i < revenue.length; i++){
    thangHienTai = revenue[i];            //gán biến thangHienTai = vị trí hàng thứ i của mảng revenue
    tongProfit += thangHienTai.total;
}
console.log(tongProfit);



