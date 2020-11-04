import  React,{ Component } from 'react';
// import {connect} from 'react-redux'
import { Input,Button } from 'antd';
// import { addName } from '/src/store/action'
import Son from './reduxSon'

class Redux1 extends Component {
    constructor(){
        super()
        this.state = {
            name:''
        }
    }
   
    changeName = _event => {
        this.setState({
            name: _event.target.value
        })
    }

    submitG = () =>{
        console.log(this.state.name)
       // store.dispatch(addName(this.state.name))
    }
    
    render (){
        return (
            <div className="viewComponent">
                <p className='f18'>redux</p>
                <Input ref='inputName' value={this.state.name} onChange={this.changeName} placeholder="请录入"  />
                <Button type="primary" onClick={this.submitG}>提交</Button>
                <hr/>
                <Son></Son>
            </div>
            
        )
    }
}

// const addnum = (dispatch) => {
//     return {
//       saveUserInfo: (userInfo) => dispatch(saveUserInfo(userInfo))
//     }
// }

// export default connect(addnum,mapDispatchToProps)(Redux1)
export default Redux1