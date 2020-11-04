import  React,{ Component } from 'react';

import { Input } from 'antd';
import Son from './sprSon'

export default class Spread extends Component {

    constructor(){
        super()
        this.state = {
            text: '',
            mess: '我是父级'
        }
    }

    submitText = (val)=>{
        this.setState({
            mess: val
        })
    }

    handleInput = _event => {
        let event = _event
        let elem = event.target
        let value = elem.value
    
        this.setState({
            text: value
        })
    }

    render (){
        return (
            <div className="viewComponent">
                <h3 className="f20">通过在props传值</h3>
                我是父组件
                <br/>
                <Input ref="text" onChange={this.handleInput} placeholder="请输入内容" value={this.state.text} />
                <span className="f18">{this.state.text}</span>
               
                <br/>
                <p className="f16"> 子组件传来的值--{this.state.mess}</p>
                <Son name={this.state.text} msg={this.submitText}></Son> 

            </div>
            
        )
    }
}