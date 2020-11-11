import React, { Component } from 'react';
import { Button } from 'antd'
import PropTypes from 'prop-types'
class PropTypeSon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="viewComponent">
            <p className='f18'>我是子级</p>
            <p className='f16'>父级传的参数</p>
            <p className='f16'>名称：{this.props.name}</p>
            <p className='f16'>数量：{this.props.count}</p>
        
            <Button type='primary' onClick={this.props.eat}>我也吃一个</Button>
        </div>
        );
    }
}
PropTypeSon.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
    eat: PropTypes.func
}
export default PropTypeSon;