import React, { Component } from 'react';

import { Button,Row, Col } from 'antd'
import Son from './propTypesSon'

class PropTypes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'小明',
            count: 18,
         }
    }
    eatApple = () =>{
        this.setState({
            count: this.state.count -1 
        })
    }
    render() { 
        return ( 
        <div className="viewComponent">
            <Row>
                <Col span={12}>
                    <h3 className='f20'>我是父级</h3>
                    
                    <p className='f16'>{this.state.name}有{this.state.count}苹果</p>
                    <Button type='primary' onClick={this.eatApple}>吃一个</Button>
                    <br/>
                    <Son name={this.state.name} count={this.state.count} eat={this.eatApple}/>
                </Col>
                <Col span={12}>
                    <h3 className='f20'>PropTypes语法结构</h3>
                    <p className='f16'>class.propTypes 校验传来的参数</p>
                    <p className='f16'>PropTypes.string  字符串</p>
                    <p className='f16'>PropTypes.number  数值</p>
                    <p className='f16'>PropTypes.func  函数</p>
                    <p className='f16'>PropTypes.string.isRequired 必填</p>
                    <a className='f16' href="https://react.docschina.org/docs/typechecking-with-proptypes.html" target='_black'>更多》</a>
                </Col>
            </Row> 
        </div>
        );
    }
}

 
export default PropTypes;