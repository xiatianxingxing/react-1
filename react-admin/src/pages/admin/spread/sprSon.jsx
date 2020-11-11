import  React,{ Component } from 'react';

import { Input,Button } from 'antd';
export default class Spread extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            text:''
        }
    }
    // 在接受父组件改变后的props需要重新渲染组件
    componentWillReceiveProps (nextProps) {
        nextProps.name !== this.props.name&&this.setState({
            name:nextProps.openNotice
        },() => {
            console.log(this.state.name)
      })
    }
    
    sonHandleInput = (event) =>{
       
        let elem = event.target
        let value = elem.value
    
        this.setState({
            text: value
        })
    }

    mes = () =>{
        console.log(this.props)
        this.props.msg(this.state.text)
    }
   
    render (){
        return (
            <div className="viewComponent">
               
                <div >
                    <p >父级传来的值---<span style={{color: 'blue'}}>{this.props.name}</span></p>
                    <Input style={{width: '200px'}} ref="text" onChange={this.sonHandleInput} placeholder="请输入内容" value={this.state.text} />
                    <p style={{color: '#fff'}}>{this.state.text}</p>
                    <Button type="primary" onClick={this.mes}>传递父级</Button>
                </div>
            </div>
            
        )
    }
}