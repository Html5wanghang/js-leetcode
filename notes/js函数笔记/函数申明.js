//函数声明写法
//函数名本身也是一个变量

//函数声明会进行函数声明提升
a(); //这里会打印出函数a
function a (){
  console.log(a);
}
//函数表达式

//匿名函数表达式
//匿名函数表达式不能进行函数提升
console.log(b); //打印出undefined
b(); //会报错, b is not a function
var b = function (){
  console.log(b);
};

//命名函数表达式,因为是函数表达式所以不会进行变量提升
//命名的好处是在调用栈中会显示被调用函数的函数名
c(); //会报错, c is not a function
var c = function d (){
  //对命名函数处理的机制，函数的名称永远在函数内部的作用域中有效。
  console.log(d); //c 函数执行的话会打印函数d，d在函数体内可以用
};
c();
console.lod(d); //会报错，d is not defined