import  React,{ Component } from 'react';

import { Input,Row,Col } from 'antd';
import Son from './sprSon'
import Son1 from './son1'
import Son2 from './son2'
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
                <Row>
                    <Col span={12}>
                        我是父组件
                        <br/>
                        <Input style={{width: '300px'}} ref="text" onChange={this.handleInput} placeholder="请输入内容" value={this.state.text} />
                        <span className="f18">{this.state.text}</span>
                        <p className="f16"> 子组件传来的值--{this.state.mess}</p>
                    </Col>
                    <Col span={12}>
                        <Son name={this.state.text} msg={this.submitText}></Son> 
                    </Col>
                </Row>
               
               <br/>
               <h3 className="f20">通过在redux传值</h3>
                    <Row>
                        <Col span={12}>
                            <Son1></Son1>
                        </Col>
                        <Col span={12}>
                            <Son2></Son2>
                        </Col>
                    </Row>

            </div>
            
        )
    }
}