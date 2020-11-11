import React, { Component } from 'react';
import { connect } from 'react-redux'


class Son2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="viewComponent">
                
                <p className='f18'>组件2</p>
                <p className='f16'>组件1 传递过来的值---{this.props.text}</p>
            </div>
         );
    }
}


/* 映射 */
const stateToProps = (state) =>{
    return {
        text: state.text
    }
}

export default connect(stateToProps,null)(Son2)