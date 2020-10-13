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

    componentWillReceiveProps (nextProps){
        console.log("componentWillReceiveProps",nextProps)
    }
    
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",nextProps)
        console.log("shouldComponentUpdate",nextState)

        num++
        return false 
    }
    // 当 shouldComponentUpdate 返回true 时才会执行
    componentWillUpdate (nextProps,nextState){
        console.log("componentWillUpdate",nextProps)
        console.log("componentWillUpdate",nextState)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate",prevProps)
        console.log("componentDidUpdate",prevState)
    }
    render (){
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