"use strict";
// ctrl + shift + b
function add(a, b) {
    console.log(a + b);
}
add(true, "2"); //true2
var na = "实时";
var name1 = 12;
var cent = "123" + (1 + 1); // 1232
var ar1 = [1, 2, 4]; // 1, 2, 4
var ar2 = ["1", "2", "3"]; // ["1", "2", "3"]
var ar3 = [1, "3", 5]; //[1, "3", 5]
var str;
str = [3, "5", 2, 1];
str = [3, "5", 1, 1];
// 当访问一个越界的元素，会使用之前定义的联合类型替代：
str.push(true);
console.log(str);
var anys = "1";
var anys1 = 1;
var anys2 = true;
var anys3 = undefined || null;
// console.log(anys3); null
var ansy4 = [];
ansy4 = ["1", 3, true];
// console.log(ansy4); //["1", 3, true]
var ansy5 = ["5"];
ansy5[1] = "sstr";
console.log(ansy5); // ["5", "sstr"]
var str1 = 12324;
console.log(str1);
// void
var obj = {
    'one': 2,
    'two': 4,
    'three': 9
};
function res1(mo) {
    var a;
    if (mo) {
        a = 10;
    }
    console.log(a);
}
res1(false);
function res2() {
    var x;
    // 不能两个相同定义的x
}
