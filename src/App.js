import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    }

    onClickListener = () => {
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
        const aa1 = [1,2];
        console.log([...aa1]);  //[1, 2]


        //合并数组
        const aaa1 = [1,2,3];
        const aaa2 = [4,5,6];

        //es5
        console.log(aaa1.concat(aaa2));  //[1, 2, 3, 4, 5, 6]
        //es6
        console.log([...aaa1,...aaa2]);  //[1, 2, 3, 4, 5, 6]


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
                <Button onClick={this.onClickListener}>点击</Button>
            </div>
        );
    }
}

export default App;
