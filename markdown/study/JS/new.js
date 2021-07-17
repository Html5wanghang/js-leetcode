function MyNew (context, ...argument) {
    if (typeof context !== 'function') {
        throw new Error('不是一个函数')
    }
    let obj = {};
    obj.__proto__ = context.prototype;
    context.call(obj, ...argument)
    return obj;
}

function Person(props) {
    this.age = props.age;
    this.sex = props.sex;
    this.name = props.name;
    this.say = function () {
        console.log(this, this.age, this.name, this.sex)
    }
}

const person1 = MyNew(Person, {age: 16, name: 'w', sex: 'man'});
person1.say();

const person2 = MyNew(Person, {age: 17, name: 'h', sex: 'women'});
person2.say();