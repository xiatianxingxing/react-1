import React, { Component } from 'react';

import { Input,Button } from 'antd';

import { changeSonValue } from '../../../reactReduxStore/action'
import { connect } from 'react-redux'


class Son1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="viewComponent">
                
                <p className='f18'>组件1</p>
                <Input id='text' style={{width: '300px'}} ref="text"placeholder="请输入内容" />
                <Button type='primary' onClick={this.props.clickBtn}>传递到组件2</Button>
            </div>
         );
    }
}

const dispatchProps = (dispatch) => {
    return {
        clickBtn(){
            let textDom = document.getElementById('text')
            dispatch(changeSonValue(textDom.value))
           
        }
    }
}
 
export default connect(null,dispatchProps)(Son1)