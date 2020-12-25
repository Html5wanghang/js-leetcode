#### javascript的原始数据类型有6种

- boolean型(布尔型)
- number
- string
- symbol
- null
- undefined
## typeof

#### 先来看看typeof使用输出原始类型的值
```javascript []

typeof 1 // "number"
typeof ‘1’ // "string"
typeof true // "boolean"
typeof Symbol() //"symbol"
typeof undefined //"undefined"
typeof null // "object"
```

可以看出typeof在判断原始类型的时，只有null 会返回object，这其实是javascript历史的坑，
之前使用二进制32位，000开头即为对象，而null是全0，所以也是对象

#### 再来看看javascript typeof判断其他类型
```javascript []

typeof [] // "object"
typeof {} // "object"
typeof console.log // function
typeof Number // function,函数则返回函数
typeof String // function
```
可以明显地看出typeof在区分对象类型上分为function和object两种

#### instanceof

instanceof是判断一个对象的类型，不能用于判断原始数据的类型
```javascript []

const Person = function() {}
const p1 = new Person()
p1 instanceof Person // true

var str = 'hello world'
str instanceof String //false

var str1 = new String('hello world')
str1 instanceof String // true
```
