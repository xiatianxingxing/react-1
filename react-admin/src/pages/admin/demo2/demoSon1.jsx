import  React,{ Component } from 'react';
import { Button,Input } from 'antd';
export default class Params1 extends Component {
    constructor(){
        super()
        this.state = {
            num: 0
        }
    }


    componentDidMount(){
       console.log(this.props)
    }


    queryGrade = (_event) =>{
      
        let value = _event.target.value
        this.setState({
            num: value
        })
        
    }
    submitG = () =>{
        this.props.getG(this.state.num)
    }

    render (){
        return (
            <div className="viewComponent">
                <h2 className='f20'>录入学号或姓名</h2>
              
                <Input placeholder="请录入" onChange={this.queryGrade}  value={this.state.num}/>
                <Button type="primary" onClick={this.submitG}>查询</Button>
            </div>
        )
    }
}