import React, { Component } from 'react';
import { Button } from 'antd'
import { CSSTransition } from 'react-transition-group'
import './animation.css'

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        }
        this.toToggle = this.toToggle.bind(this)
    }
    toToggle(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() { 
        return ( 
            <div className='viewComponent'>
                <h3 className='f20'>普通写法</h3>
                <Button type='primary' onClick={this.toToggle}>显示隐藏</Button>
                <div className={this.state.isShow? 'showV': 'hideV'} style={{width: '200px',height: '200px',background: 'red'}}>

                </div>
                <br/>
                <h3 className='f20'>react-transition-group插件</h3>
                <p className='f18'>Transition</p>
                <p className='f18'>CSSTransition</p>
                <p className='f18'>TransitionGroup</p>
                <Button type='primary' onClick={this.toToggle}>显示隐藏</Button>
                <CSSTransition
                    in={this.state.isShow}
                    classNames='box'
                    timeout={2000}>
                    <div style={{width: '200px',height: '200px',background: 'red'}}></div>
                </CSSTransition>
                
                <p className='f16'>多个css样式执行</p>

            </div>
        );
    }
}
 
export default Animation;