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
            </div>
        );
    }
}

export default App;
