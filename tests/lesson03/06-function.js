function tinhTich(so1, so2 ) {
const Tich0 = so1 * so2;
console.log(`Tich la (${so1}*${so2}) = ${Tich0}`);  
}
tinhTich(7, 17);

///////////

function findMin(a,b,c){
    if (a < b && a < c){
        console.log(`So nho nhat là ${a}`);
    }
    if (c < a && c < b){
        console.log(`So nho nhat là ${c}`);
    }
    if (b < a && b < c){
         console.log(`So nho nhat là ${b}`);
    }
}
findMin(106,17,110);

//////////////


function getTopStudents(students,threshold){ // tạo hàm 

const topStudents = [];                     // tạo mảng rỗng, về sau khi kiểm tra điều kiện, nếu có giá trị hợp lệ sẽ đẩy vào trong mảng này

for(let i = 0; i < students.length; i++){   // giả định students sẽ truyền vào là mảng, students đã được khai báo trên hàm
   const student = students[i];             // gán biến student là vị trí hàng thứ i của mảng students
   if(student.score >= threshold){          // gán biến student là vị trí hàng thứ i của mảng students, nếu hàng này có score thỏa mãn điều kiện thì lấy
    topStudents.push(student.name);         // nếu if thỏa mãn thì đẩy giá trị đó vào mảng rỗng topStudents đã tạo
   }
}
return topStudents;                         // trả về kết quả của mảng topStudents sau khi kết thúc 1 vòng lặp
}

const studentList = [                       // khai báo list data mẫu dùng để chạy
    {'name': 'Ha', 'score': 10},
    {'name': 'Nhat', 'score': 9},
    {'name': 'Hoang', 'score': 7.5},
    {'name': 'Nguyen', 'score': 9.75},
    {'name': 'Lam', 'score': 8},
    {'name': 'Dieu', 'score': 8.9},
];
console.log(getTopStudents(studentList, 8.8));


////////////////

function caculateInterest (principal,rate,year){
const tongPRIandINT = (principal + principal*rate*year/100);
return tongPRIandINT
}

console.log(caculateInterest(100,5,3));