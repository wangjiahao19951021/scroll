// ctrl + shift + b
function add (a:boolean, b:string) {
    console.log(a + b)
}
add (true, "2"); //true2
let na:string = "实时";
let name1:number = 12;
let cent:string = `123${1 + 1}`; // 1232
let ar1:number[] = [1, 2, 4]; // 1, 2, 4
let ar2:string[] = ["1", "2", "3"]; // ["1", "2", "3"]
let ar3:any[] = [1, "3", 5]; //[1, "3", 5]
let str:[number, string, number, any];
str = [3, "5", 2, 1];
str = [3, "5", 1, 1];
// 当访问一个越界的元素，会使用之前定义的联合类型替代：
str.push(true);
console.log(str);
let anys:any = "1";
let anys1:any = 1;
let anys2:any = true;
let anys3:any = undefined || null;
// console.log(anys3); null
let ansy4 : any[] = [];
ansy4 = ["1", 3, true];
// console.log(ansy4); //["1", 3, true]
let ansy5:any[] = ["5"];
ansy5[1] = "sstr";
console.log(ansy5); // ["5", "sstr"]
let str1:Number = 12324;
console.log(str1);
// void
const obj = {
    'one': 2,
    'two': 4,
    'three': 9
}

function res1 (mo:boolean) {
    var a 
    if (mo) {
        a = 10;
    }
    console.log(a);
}
res1 (false);

function res2() {
    let x;
    // 不能两个相同定义的x
}






