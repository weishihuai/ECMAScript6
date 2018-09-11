import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';

class App extends Component {

    onClickListener01 = () => {
        console.log(...[1, 2, 3]);  //1 2 3

        console.log(1, ...[2, 3, 4], 5);  //1 2 3 4 5

        //如果扩展运算符后面是一个空数组，则不产生任何效果
        console.log([...[], 1]);  //[1]

        console.log(Math.max(...[14, 3, 77]));  //77
        //等同于
        console.log(Math.max(14, 3, 77));  //77

        //将一个数组添加到另一个数组的尾部
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6, 7];
        arr1.push(...arr2);
        console.log(arr1);   //[1, 2, 3, 4, 5, 6, 7]

        //复制、克隆数组
        //es5
        const a1 = [1, 2];
        const a2 = a1.concat();
        console.log(a2);   //[1, 2]

        //es6
        const aa1 = [1, 2];
        console.log([...aa1]);  //[1, 2]


        //合并数组
        const aaa1 = [1, 2, 3];
        const aaa2 = [4, 5, 6];

        //es5
        console.log(aaa1.concat(aaa2));  //[1, 2, 3, 4, 5, 6]
        //es6
        console.log([...aaa1, ...aaa2]);  //[1, 2, 3, 4, 5, 6]


        //与解构赋值结合
        //如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则报错。
        const [first1, ...rest1] = [1, 2, 3, 4, 5];
        console.log(first1); // 1
        console.log(rest1);  // [2, 3, 4, 5]

        const [first2, ...rest2] = [];
        console.log(first2); // undefined
        console.log(rest2);  // []

        const [first, ...rest] = ["foo"];
        console.log(first);  // "foo"
        console.log(rest);   // []

        console.log([...'hello world']); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

        // Array.of方法用于将一组值，转换为数组。
        console.log(Array.of(1, 2, 3));       //[1, 2, 3]
        console.log(Array.of());        //[]
        console.log(Array.of(undefined));   //[undefined]
        console.log(Array.of(null));    //[null]
        console.log(Array.of([]));  //[Array(0)]

        //find()  findIndex()
        //返回第一个小于0的数
        let re = [1, 4, -5, 10, -10].find((n) => n < 0);
        console.log(re);   //-5

        //返回第一个大于9的数值的下标
        let re2 = [1, 5, 10, 15].findIndex((value, index, arr) => {
            return value > 9;
        });
        console.log(re2);   //2

        //fill() 使用给定值，填充一个数组
        console.log(['a', 'b', 'c'].fill(7));   // [7, 7, 7]

        //同一内存地址
        let arr = new Array(3).fill({name: "Mike"});
        arr[0].name = "Ben";
        console.log(arr);   //[{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

        //遍历数组  entries()，keys()，values()
        for (let index of ['1', '2'].keys()) {
            console.log(index);   // 0 1
        }

        for (let value of ['1', '2', '3'].values()) {
            console.log(value);  //1 2 3
        }

        for (let [index, value] of ['a', 'b', 'c'].entries()) {
            console.log(index + '--' + value);  //0--a  1--b 3--c
        }

        //includes()  表示某个数组是否包含给定的值
        console.log([1, 2, 3].includes(4));  //false
        console.log([1, 2, 3].includes(2)); //true
        console.log([NaN].includes(NaN));  //true

        //indexOf()对NaN的误判
        console.log([NaN].indexOf(NaN));  //-1

        //数组的空位跳过问题
    };

    onClickListener02 = () => {
        let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
        console.log(x); //1
        console.log(y); //2
        console.log(z); //{a: 3, b: 4}

        //解构赋值要求等号右边是一个对象
        //let { x, y, ...z } = null; // 运行时错误
        // let { x, y, ...z } = undefined; // 运行时错误


        //解构赋值必须是最后一个参数，否则报错
        // let { ...x, y, z } = obj; // 句法错误
        // let { x, ...y, ...z } = obj; // 句法错误


        let z1 = {a: 3, b: 4};
        let n = {...z1};
        console.log(n);   //{a: 3, b: 4}

        //Object.assign(target, source1, source2);
        let a = {a: 1, b: 2};
        let b = {c: 3, d: 4};
        console.log({...a, ...b});            //{a: 1, b: 2, c: 3, d: 4}
        console.log(Object.assign({}, a, b));  //{a: 1, b: 2, c: 3, d: 4}

        //Object.is()  比较两个值是否严格相等
        console.log(Object.is('foo', 'foo'));  //true
        console.log(Object.is({}, {}));       //false

        console.log(Object.is(+0, -0));  //false
        console.log(Object.is(NaN, NaN)); //true

        console.log(+0 === -0);  //true
        console.log(NaN === NaN); //false

        //Object.assign(target,source...source) //合并对象
        const target = {a: 1, b: 1};
        const source1 = {b: 2, c: 2};
        const source2 = {c: 3};
        //后面的同名属性会覆盖前面的
        Object.assign(target, source1, source2);
        console.log(target);  //{a: 1, b: 2, c: 3}

        // Object.assign(undefined); // 报错  TypeError: Cannot convert undefined or null to object
        // Object.assign(null); // 报错 TypeError: Cannot convert undefined or null to object

        //对象属性的遍历
        let obj = {a: '1', b: '2', c: '3'};
        // (1) for...in
        // (2) Object.keys(obj)
        // (3) Object.getOwnPropertyNames(obj)

        console.log(Object.keys(obj)); //["a", "b", "c"]
        console.log(Object.values(obj)); //["1", "2", "3"]
        console.log(Object.entries(obj)); //["a", "1"] ["b", "2"] ["c", "3"]
        console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c"]


    };

    onClickListener03 = () => {
        //字符串的遍历
        let str = 'hello world';
        for (let s of str) {
            console.log(s);  //h e l l o  w o r l d
        }

        //includes(), startsWith(), endsWith()
        let s = 'Hello world!';
        console.log(s.includes('l'));   //true
        console.log(s.startsWith('H')); //true
        console.log(s.endsWith('!'));   //true

        console.log(s.includes('l', 2)); //true
        console.log(s.includes('l', 10)); //false

        //模板字符串
        let name = "Bob", time = "today";
        console.log(`${name},how old are you , ${time}`); //Bob,how old are you , today
    };

    //函数可以指定参数的默认值
    log = (x, y = 'World') => {
        console.log(x + "------" + y);
    };

    //与解构赋值默认值结合使用
    foo = ({x, y = 5}) => {
        console.log(x, y);
    };

    foo2 = ({x, y = 5} = {}) => {
        console.log(x + "---" + y);
    };

    foo3 = (x = 5, y = 6) => {
        console.log(x, y);
    };

    add = (...values) => {
        let sum = 0;
        for (let val of values) {
            sum += val;
        }
        return sum;
    };

    onClickListener04 = () => {
        //指定函数参数的默认值
        this.log('Hello');      // Hello------World
        this.log('Hello', 'China');     // Hello------China
        this.log('Hello', '');  // Hello------

        //与解构赋值默认值结合使用
        this.foo({}); // undefined 5
        this.foo({x: 1}); // 1 5
        this.foo({x: 1, y: 2}); // 1 2
        // this.foo(); // TypeError: Uncaught TypeError: Cannot read property 'x' of undefined

        this.foo2(); //undefined---5

        //参数默认值的位置
        //通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的

        //undefined会触发函数默认值，null不会触发函数默认值
        this.foo3(undefined, null);   //5 null

        //rest参数(注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。)
        console.log(this.add(1, 2, 3, 4));   //10

        //箭头函数
        const f = values => values;

        function es5_f(values) {
            return values;
        }

        const sum = (num1, num2) => num1 + num2;
        const es5_sum = function (num1, num2) {
            return num1 + num2;
        };

        // 正常函数写法
        [1, 2, 3].map(function (x) {
            return x * x;
        });

        // 箭头函数写法
        [1, 2, 3].map(x => x * x);

        //箭头函数注意点
        /*
         * （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
         * （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
         * （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
         * （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
         */

        //箭头函数转换为ES5的写法
        // ES6
        function foo() {
            setTimeout(() => {
                console.log('id:', this.id);
            }, 100);
        }

        // ES5
        function foo() {
            let _this = this;
            setTimeout(function () {
                console.log('id:', _this.id);
            }, 100);
        }

    };

    onClickListener05 = () => {
        //Set 类似于数组，但是成员的值是不重复的
        const set = new Set();
        [2, 3, 5, 4, 5, 2, 2].forEach((x) => {
            set.add(x);
        });
        console.log([...set]);   //[2, 3, 5, 4]

        //Set可接受一个数组作为参数
        console.log(new Set([111, 333, 444, 444, 555]));   //{111, 333, 444, 555}

        //size has()  delete() clear()
        const set2 = new Set([1, 2, 3, 4, 4, 5, 6]);
        set2.add(7);
        console.log(set2.size);  //7
        console.log(set2.has(7));  //true
        console.log(set2.delete(7)); //tre
        console.log(set2.has(7));  //false

        //Set的遍历  Set没有键名，只有键值
        let set3 = new Set(['red', 'green', 'blue']);

        for (let item of set3.keys()) {
            console.log(item);
        }
        // red
        // green
        // blue

        for (let item of set3.values()) {
            console.log(item);
        }
        // red
        // green
        // blue

        for (let item of set3.entries()) {
            console.log(item);
        }
        // ["red", "red"]
        // ["green", "green"]
        // ["blue", "blue"]


        //forEach 遍历
        const set4 = new Set([1, 2, 3, 4, 5, 5, 5, 6, 7]);
        set4.forEach((x, index) => {
            console.log(x + "--" + index);
        });

        //map 遍历
        [...set4].map((item, index) => {
            console.log(item + "--" + index);
        });

        //filter遍历
        [...set4].filter((item) => {
            console.log(item % 2 === 0);
        });

        //使用Set实现交集、并集、差集
        let a = new Set([1, 2, 3]);
        let b = new Set([4, 3, 2]);

        //并集
        let union = new Set([...a, ...b]);
        console.log(union);   // {1, 2, 3, 4}

        //交集
        let intersect = new Set([...a].filter((item) => b.has(item)));
        console.log(intersect);  //{2, 3}

        //差集
        let difference = new Set([...a].filter((item) => !b.has(item)));
        console.log(difference);  //{1}


        //数组去重复元素的方法
        //(1). [...new Set(array)]
        console.log([...new Set([1, 2, 2, 3, 4, 5, 6, 6, 6])]);  // [1, 2, 3, 4, 5, 6]

        //(2). Array.from(new Set(array))
        console.log(Array.from(new Set([1, 1, 2, 3, 3, 4, 5, 4])));   // [1, 2, 3, 4, 5]

    };

    onClickListener06 = () => {
        //可接受数组作为参数
        const map = new Map([
            ['name', '张三'],
            ['title', 'Author']
        ]);

        console.log(map.size); //2
        console.log(map.has('name'));  //true
        console.log(map.get('title'));  //Author
        map.delete('name');
        console.log(map.has('name'));  //false

        //对同一个键多次赋值，后面的值将覆盖前面的值
        const map2 = new Map();
        map2.set('a', 1).set('a', 2);
        console.log(map2.get('a'));  //2

        //遍历方法
        const map3 = new Map([
            ['F', 'no'],
            ['T', 'yes'],
        ]);

        for (let key of map3.keys()) {
            console.log(key);
        }
        // "F"
        // "T"

        for (let value of map3.values()) {
            console.log(value);
        }
        // "no"
        // "yes"

        for (let item of map3.entries()) {
            console.log(item[0], item[1]);
        }
        // "F" "no"
        // "T" "yes"

        // 或者
        for (let [key, value] of map3.entries()) {
            console.log(key, value);
        }
        // "F" "no"
        // "T" "yes"

        // 等同于使用map.entries()
        for (let [key, value] of map) {
            console.log(key, value);
        }
        // "F" "no"
        // "T" "yes"

        //Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）
        const map4 = new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]);
        console.log([...map4.keys()]);    // [1, 2, 3]
        console.log([...map4.values()]);  // ["one", "two", "three"]
        console.log([...map4.entries()]);  // [[1,'one'], [2, 'two'], [3, 'three']]
        console.log([...map4]);  // [[1,'one'], [2, 'two'], [3, 'three']]

        //map() filter() forEach()
        const map0 = new Map()
            .set(1, 'a')
            .set(2, 'b')
            .set(3, 'c');
        console.log(new Map([...map0].filter(([k, v]) => k < 3)));   //{1 => "a", 2 => "b"}
        console.log(new Map([...map0].map(([k, v]) => [k * 2, '_' + v]))); //{2 => "_a", 4 => "_b", 6 => "_c"}

    };

    onClickListener07 = () => {
        // console.log(a);  //undefined
        // var a = "weixiaohuai";
        //
        // console.log(b);  //ReferenceError引用错误
        // let b = "weixiaohuai";
        // console.log(b); //weixiaohuai
        //
        //
        // // let a = 'weixiaohuai';
        // // let a = 'hello world';
        //
        // let temp = 'hello';
        // if (true) {
        //     let temp = 'world';
        //     console.log(temp); //world
        // }
        // console.log(temp);  //hello
        //
        // // const temp1;  //报错：必须初始化 const variable without initializer is not allowed
        // // const temp2 = 'hello world';
        // // console.log(temp2); //hello world
        // // temp2 = 'weixiaohuai'; //报错 const不能再改变值
        //
        // const a1 = 'hello weixiaohuai';
        // // const a1 = 'hello';  //报错，不能重复声明 Block scoped variables cannot be redeclared
        //
        // if (true) {
        //     const a1 = 'hello'; //不同块级作用域，可以重复声明
        //     console.log(a1); //hello
        // }
        // console.log(a1); //hello weixiaohuai
        //
        // const obj = {};
        // obj.age = 18;
        // obj.name = 'weixiaohuai';
        // for (let item in obj) {  //循环遍历obj的属性
        //     console.log(obj[item]);  //18  weixiaohuai
        // }

        // obj = {}; // 将obj指向另一个对象，就会报错 ReadOnly (等同于改变了它的指针指向，实际上指针不可变)


        // let [first, [[second], third]] = [1, [[2], 3]];
        // console.log(first);  // 1
        // console.log(second);  // 2
        // console.log(third);  // 3
        //
        // let [ , , c] = ["a", "b", "c"];
        // console.log(c);   // c
        //
        // let [d, , f] = [1, 2, 3];
        // console.log(d); // 1
        // console.log(f); // 3
        //
        // let [head, ...tail] = [1, 2, 3, 4];
        // console.log(head); // 1
        // console.log(tail); //...为扩展运算符  [2, 3, 4]
        //
        // //  如果解构不成功，变量的值就等于undefined。
        // let [test1] = [];
        // let [g,i] = [1];
        // console.log(test1);  //undefined
        // console.log(g); //1
        // console.log(i); //undefined

        // //完全解构
        // let [x, [y, y2], z] = ['a', ['b', 'c'], 'd'];
        // console.log(x);  //'a'
        // console.log(y);  //'b'
        // console.log(y2); //'c'
        // console.log(z);  //'d'
        // //不完全解构
        // let [x1, [y1], z1] = ['a', ['b', 'c'], 'd'];
        // console.log(x1);  //'a'
        // console.log(y1);  //'b'
        // console.log(z1);  //'d'


        // let [flag = true] = [];
        // console.log(flag);   //true
        //
        // let [age, name = 'weixiaohuai'] = [18, undefined];
        // console.log(age); //18
        // console.log(name); //weixiaohuai
        //
        // let [a = 'weixiaohuai'] = [null];
        // console.log(a); //null  因为null === undefined 为false,也就是不满足严格相等

        //基本用法
        // let {name, age} = {age: 18, name: "weixiaohuai"};
        // console.log(age);  //18
        // console.log(name); //weixiaohuai
        //
        // let {sex} = {age: 18, name: "weixiaohuai"};
        // console.log(sex);   //没有匹配到有相同key的值，返回undefined

        // //默认值
        // let {name1 = 'weixiaohuai'} = {name1: undefined};
        // console.log(name1); //weixiaohuai
        //
        // let {name2 = 'weixiaohuai'} = {name2: null};
        // console.log(name2); //null 因为null === undefined 为false,也就是不满足严格相等
        //
        // let [a,b,c] = "abc";
        // //当变量的个数与字符串的长度相等时,一一匹配
        // console.log(a);  //a
        // console.log(b);  //b
        // console.log(c);  //c
        //
        // //当变量的个数与字符串的长度不相等时,按声明的变量的顺序顺序匹配
        // let [d, e, f, g] = 'defghi';
        // console.log(d); //d
        // console.log(e); //e
        // console.log(f); //f
        // console.log(g); //g
        //
        // let str = 'weishihuai';
        // let {length: len} = str;
        // console.log(len); //10 返回str的长度

        // //场景一：提取json对象的数据
        // let obj = {
        //     age: 18,
        //     name: "weixiaohuai",
        //     hobby: ['music', 'run', 'basketball']
        // };
        // let {age, name, hobby} = obj;
        // console.log(age);   //18
        // console.log(name);  //weixiaohuai
        // console.log(hobby); //['music', 'run','basketball']

        //场景二：交换变量的值
        // let a = 'hello';
        // let b = 'world';
        // [a, b] = [b ,a];
        // console.log(a); //world
        // console.log(b); //hello

        //场景三：遍历Map
        // let userInfoMap = new Map();
        // userInfoMap.set("name", 'weixiaohuai');
        // userInfoMap.set("age", 18);
        // userInfoMap.set("sex", "male");
        // for (let [key, value] of userInfoMap) {
        //     // name==weixiaohuai
        //     // age==18
        //     // sex==male
        //     console.log(key + "==" + value);
        // }

    };

    add = (a, b) => {
        return a + b;
    };

    onClickListener08 = () => {
        // let str = 'wsh';
        // //依次输出 w s h
        // for (let item of str) {
        //     console.log(item);   // w s h
        // }
        //
        // let name = 'wei shi huai';
        // console.log(name.includes('wei'));   //字符串中含有'wei',所以为true
        // console.log(name.startsWith('wei')); //字符串以'wei'开头，所以为true
        // console.log(name.endsWith('！'));    //字符串以'huai'结尾，所以为false
        //
        // console.log(name.includes('shi', 4));  //从第四个位置开始字符串包含'shi',所以为true
        // console.log(name.startsWith('wei',1)); //从第一个位置开始字符串以e开头,所以为false
        // console.log(name.endsWith('shi',7));   //针对name前七个字符是以'shi'结尾,所以为true

        // let name = 'weishihuai', age = 18;
        // console.log(`hello, your name is ${name}, age is ${age}`);  //hello, your name is weishihuai, age is 18

        // console.log(`a + b = ${this.add(1, 2)}`); //a + b = 3

    };

    onClickListener09 = () => {
        // console.log(Number.isNaN(NaN));    // true
        // console.log(Number.isNaN(15));     // false
        // console.log(Number.isNaN('15'));   // false
        // console.log(Number.isNaN(true));   // false
        // console.log(Number.isNaN(9 / NaN));  // true
        // console.log(Number.isNaN('true' / 0));   // true
        // console.log(Number.isNaN('true' / 'true')); // true

        // console.log(Number.isInteger(1));    //因为1是整数,所以为true
        // console.log(Number.isInteger(1.0));  //因为在js中整数和小数采用统一的存储方式，所以需要注意一点,所以为true
        // console.log(Number.isInteger(1.1));  //1.1是浮点数，所以为false
        //
        // //注意： isInteger中传入的参数如果不是整数，统一返回false
        // console.log(Number.isInteger());  //false
        // console.log(Number.isInteger('weishihuai')); //false
        // console.log(Number.isInteger(null));  //false
        // console.log(Number.isInteger(NaN));  //false
        // console.log(Number.isInteger(false));  //false


        //Math.trunc()方法只返回整数部分，不会进行四舍五入处理,会保留符号位
        // console.log(Math.trunc(1.0));  //1
        // console.log(Math.trunc(1.9));  //1
        // console.log(Math.trunc(-1));   //-1
        //
        // //Math.trunc()对于一些可以截取出整数的类型会先转换为Number再进行截取
        // console.log(Math.trunc(true)) ; //1
        // console.log(Math.trunc(false)); //0
        // console.log(Math.trunc('123.456')); //123
        // console.log(Math.trunc(null)); //0
        //
        // //Math.trunc()对于空值等不能截取整数部分的直接返回NaN
        // console.log(Math.trunc('weishihuai')); //NaN
        // console.log(Math.trunc()); //NaN
        // console.log(Math.trunc(undefined)); //NaN
        // console.log(Math.trunc(NaN)); //NaN

    };

    functionDefaultParam = (a, b = 2) => {
        return a + b;
    };

    //rest参数，相当于传入一个数组
    restParam = (...values) => {
        for (let item of values) {
            console.log(item);
        }
    };

    onClickListener10 = () => {
        // console.log(this.functionDefaultParam(1));  //因为b指定了默认值2,所以没传参数b会取默认值2,相加后结果为3
        // console.log(this.functionDefaultParam(1,3)); //4

        //rest参数
        this.restParam('a', 'b', 'c', 'd');  //依次输出'a' 'b' 'c' 'd'

        //箭头函数的简便写法
        ['a', 'b', 'c'].map((item, index) => {
            console.log(item, index);  //'a' 0 、 'b' 1 、'c' 2
        });

        ['a', 'b', 'c'].map(function (item, index) {
            console.log(item, index);  //'a' 0 、 'b' 1 、'c' 2
        });

    };

    add = (a, b) => {
        return a + b;
    };

    onClickListener11 = () => {
        // console.log(...['wei','shi','huai']); //wei shi huai
        // console.log(this.add(...[1,2])); //相当于1+2=3

        // let arr1 = ['wei', 'shi', 'huai'];
        // let arr2 = arr1.concat();
        // for (let item of arr2) {
        //     console.log(item);  //wei shi huai
        // }
        //
        // //改变新数组并不会改变原数组的值
        // arr2[0] = 'weiweiwei';
        // for (let item of arr1) {
        //     console.log(item);  //wei shi huai
        // }
        // for (let item of arr2) {
        //     console.log(item);  //weiweiwei shi huai
        // }
        //
        // //扩展运算符复制数组
        // let arr3 = [...arr1];
        // for (let item of arr3) {
        //     console.log(item);  //wei shi huai
        // }

        //数组合并
        //需要注意的是：浅拷贝。如果修改了原数组的成员，会同步反映到新数组。
        // const arr1 = ['a', 'b'];
        // const arr2 = ['c'];
        // const arr3 = ['d', 'e'];
        //
        // // ES5
        // console.log(arr1.concat(arr2, arr3));  // [ 'a', 'b', 'c', 'd', 'e' ]
        // // ES6
        // console.log([...arr1, ...arr2, ...arr3]);  // [ 'a', 'b', 'c', 'd', 'e' ]

        // let str = 'weishihuai';
        // console.log([...str]); //["w", "e", "i", "s", "h", "i", "h", "u", "a", "i"]

        // console.log(Array.from('weishihuai'));  //字符串组成数组： ["w", "e", "i", "s", "h", "i", "h", "u", "a", "i"]
        // console.log(Array.of(1,2,3,4,5));  //值组成数组：[1, 2, 3, 4, 5]

        //数组实例的 entries()，keys() 和 values()
        // let arr = ['wei', 'shi', 'huai'];
        // //第一种方法
        // for (let item of arr) {
        //     console.log(item);  //'wei' 'shi' 'huai'
        // }
        //
        // //第二种方法
        // for (let index of arr.keys()) {
        //     //输出键值
        //     console.log(index); // 0 1 2
        // }
        //
        // for (let item of arr.values()) {
        //     //输出值
        //     console.log(item); //'wei' 'shi' 'huai'
        // }
        //
        // for (let [index, item] of arr.entries()) {
        //     //输出键值对
        //     console.log(index, item);  // 0 'wei'、1 'shi'、2 'huai'
        // }

        //includes()
        let arr = ['wei', 'shi', 'huai', NaN];
        console.log(arr.includes('wei')); //true
        console.log(arr.includes('wei', 1));  //从下标为1的位置开始查找，false
        console.log(arr.includes(NaN)); //true
        console.log(arr.includes('huai', -2)); //倒数第二个开始查找，true

    };

    onClickListener12 = () => {
        //Object.is()
        // console.log(Object.is('weishihuai', 'weishihuai'));   //'weishihuai'==='weishihuai'为true,所以结果为true
        // console.log(Object.is({}, {}));  //{} === {}为false，所以结果为false
        //
        // //注意NaN以及+0 -0问题
        // console.log(Object.is(NaN, NaN)); //true
        // console.log(NaN === NaN); //false
        //
        // console.log(Object.is(+0, -0)); //false
        // console.log(+0 === -0); //true

        //Object.assign()
        // let obj1 = {name: 'weishihuai'};
        // let obj2 = {age: 18};
        // let obj3 = {sex: 'male'};
        // //合并obj1 obj2 obj3
        // console.log(Object.assign(obj1, obj2, obj3));   //{name: "weishihuai", age: 18, sex: "male"}
        //
        // //同名属性后面覆盖前面
        // let obj4 = {age: 20};
        // console.log(Object.assign(obj1, obj2, obj3, obj4)); //{name: "weishihuai", age: 20, sex: "male"}
        //
        // //为obj5对象添加一个属性age
        // let obj5 = {name: 'weishihuai'};
        // console.log(Object.assign(obj5, {age: 18})); //{name: "weishihuai", age: 18}
        //
        // //克隆对象
        // let obj6 = {name: 'weishihuai', age: 18};
        // let obj7 = Object.assign({}, obj6);
        // console.log(obj7); //{name: 'weishihuai', age: 18}

        // //对象属性的遍历
        // let obj = {name: 'weishihuai', age: 18, sex: 'male'};
        // //第一种方法
        // for (let prop in obj) {
        //     console.log(prop); //name age sex
        // }
        // //第二种方法
        // let propArr = Object.keys(obj);
        // for (let prop of propArr) {
        //     console.log(prop); //name age sex
        // }
        // //第三种方法
        // let propArr2 = Object.getOwnPropertyNames(obj);
        // for (let prop of propArr2) {
        //     console.log(prop); //name age sex
        // }

        // let obj = {name: 'weishihuai', age: 18};
        // for (let key of Object.keys(obj)) {
        //     console.log(key); //name age
        // }
        //
        // for (let value of Object.values(obj)) {
        //     console.log(value); //weishihuai 18
        // }
        //
        // for (let [key, value] of Object.entries(obj)) {
        //     console.log([key, value]); // ["name", "weishihuai"]  ["age", 18]
        // }

        //扩展运算符
        let obj1 = {name: 'weishihuai', age: 18};
        let obj2 = {...obj1};
        console.log(obj2); //{name: "weishihuai", age: 18}

        //等同于：
        console.log(Object.assign({}, obj1));  //{name: "weishihuai", age: 18}

        //合并对象
        let obj3 = {name: 'weishihuai', age: 18};
        let obj4 = {sex: 'male'};
        console.log({...obj3, ...obj4});  //{name: "weishihuai", age: 18, sex: "male"}
        //等同于
        console.log(Object.assign(obj3, obj4)); //{name: "weishihuai", age: 18, sex: "male"}
    };

    onClickListener13 = () => {
        // //Set基本用法
        // let set1 = new Set();
        // let arr1 = ['a', 'b', 'c', 'd', 'e', 'd', 'a', 'c'];
        // arr1.forEach(item => {
        //     set1.add(item);
        // });
        // //不会添加重复的值
        // for (let item of set1) {
        //     console.log(item);  //'a' 'b' 'c' 'd' 'e'
        // }
        //
        // //利用Set可以去除数组重复元素
        // let set2 = new Set(['a', 'b', 'c', 'd', 'e', 'd', 'a', 'c']);
        // console.log([...set2]);  //["a", "b", "c", "d", "e"]
        //
        // let set3 = new Set();
        // //添加元素
        // set3.add('a');
        // set3.add('b');
        // set3.add('a');
        // set3.add('c');
        // console.log(set3.size); //set长度 3
        // console.log(set3.has('a')); //has用于判断set中是否包含某个元素 true
        // console.log(set3.delete('c')); //delete删除某个元素 true
        // console.log(set3.size); //2

        //遍历方法
        // //for .. of
        // let set = new Set(['a', 'b', 'c']);
        // //输出键
        // for (let item of set.keys()) {
        //     console.log(item);  //a b c
        // }
        // //输出值
        // for (let item of set.values()) {
        //     console.log(item);  //a b c
        // }
        // //输出键值对
        // for (let item of set.entries()) {
        //     console.log(item); //a a b b c c
        // }
        //
        // //forEach
        // set.forEach(item => {
        //     console.log(item); //a b c
        // })

        let a = new Set(['a', 'b', 'c']);
        let b = new Set(['a', 'd', 'e']);

        //a b的并集
        let union = new Set([...a, ...b]);
        console.log(union);  //Set(5) {"a", "b", "c", "d", "e"}

        // a b的交集
        let intersect = new Set([...a].filter(x => b.has(x)));
        console.log(intersect);  //Set(1) {"a"}

        // a b的差集
        let difference = new Set([...a].filter(x => !b.has(x)));
        console.log(difference);  //Set(2) {"b", "c"}

    };

    onClickListener14 = () => {
        // let map1 = new Map();
        // map1.set("name", "weishihuai");
        // map1.set("age", 18);
        // map1.set("sex", "male");
        // map1.set("age", 20);
        //
        // console.log(map1.size);    //map的长度 3
        // console.log(map1.has("name")); //判断map是否包含指定key的值 true
        // console.log(map1.get("name")); //根据key值取出对应的值 weishihuai
        // console.log(map1.delete("sex")); //删除指定key元素 true
        // console.log(map1.size); //2

        //遍历方法
        const map = new Map([
            ['name', 'weishihuai'],
            ['age', 18],
        ]);

        for (let key of map.keys()) {
            console.log(key);  //name age
        }

        for (let value of map.values()) {
            console.log(value);  //weishihuai 18
        }

        for (let item of map.entries()) {
            console.log(item[0], item[1]); //name weishihuai age 18
        }

        //使用扩展运算符进行遍历
        console.log([...map.keys()]);  // ["name", "age"]
        console.log([...map.values()]); // ["weishihuai", 18]
        console.log([...map.entries()]); // ["name", "weishihuai"] ["age", 18]
        console.log([...map]); // ["name", "weishihuai"] ["age", 18]
    };

    render() {
        return (
            < div
                className="App">
                < header
                    className="App-header">
                    < img
                        src={logo}
                        className="App-logo"
                        alt="logo"/>
                    < h1 className="App-title"> Welcome
                        to
                        React </h1>
                </header>
                < p className="App-intro">
                    To
                    get
                    started, edit < code> src / App.js </code> and save to reload.</p>
                <Button onClick={this.onClickListener01}>es6 数组的扩展-扩展运算符</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener02}>es6 对象的扩展-扩展运算符</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener03}>es6 字符串的扩展</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener04}>es6 函数的扩展</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener05}>es6 Set数据结构</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener06}>es6 Map数据结构</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener07}>es6 解构赋值（扩展）</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener08}>es6 字符串的扩展（扩展）</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener09}>es6 数值的扩展（扩展）</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener10}>es6 函数的扩展（扩展）</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener11}>es6 数组的扩展（扩展）</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener12}>es6 对象的扩展（扩展）</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener13}>es6 Set数据结构（扩展）</Button>
                <br/>
                <br/>
                <Button onClick={this.onClickListener14}>es6 Map数据结构（扩展）</Button>
            </div>
        );
    }
}

export default App;
