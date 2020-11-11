import  React,{ Component } from 'react';

 

let backAndTextColor = {
    backgroundColor:'blue',
    width: '200px',
    height: '200px',
    color: '#fff',
    display: 'inline-block'
}
let num = 0;
export default class Son1 extends Component {

    constructor(props){
        super(props)
        this.state={
            num: 0
        }
    }
    // 我们的组件第一次存在于dom中，函数是不会被执行的
    // 如果已经存在于dom中，函数才会被执行
    componentWillReceiveProps (nextProps){
        console.log("%c%s","color:blue","componentWillReceiveProps",nextProps)
    }
    
    // 组件更新时更新 必须返回一个boolean值
    shouldComponentUpdate(nextProps,nextState){
        console.log("%c%s","color:blue","shouldComponentUpdate---组件更新之前，必须返回一个boolean值",nextProps)
        console.log("%c%s","color:blue","shouldComponentUpdate---组件更新之前，必须返回一个boolean值",nextState)

        num++
        return true 
    }
    // 当 shouldComponentUpdate 返回true 时才会执行
    componentWillUpdate (nextProps,nextState){
        console.log("%c%s","color:blue","componentWillUpdate---当 shouldComponentUpdate 返回true 时才会执行",nextProps)
        console.log("%c%s","color:blue","componentWillUpdate---当 shouldComponentUpdate 返回true 时才会执行",nextState)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("%c%s","color:blue","componentDidUpdate--- 更新结束",prevProps)
        console.log("%c%s","color:blue","componentDidUpdate--- 更新结束",prevState)
    }
    render (){
        console.log("%c%s","color:blue","render--组件挂载中")
        return (
            <div className="viewComponent">

                <div style={backAndTextColor}>
                    我是子元素1---
                   {num}
                </div>
            </div>
            
        )
    }
}