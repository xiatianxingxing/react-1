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
                子组件
                <div style={{width: '200px',height: '400px',background: 'skyblue',color: '#ffffff'}}>
                    <span>父级传来的值---{this.props.name}</span>
                    <Input ref="text" onChange={this.sonHandleInput} placeholder="请输入内容" value={this.state.text} />
                    <p style={{color: '#fff'}}>{this.state.text}</p>
                    <Button type="primary" onClick={this.mes}>点我更新</Button>
                </div>
            </div>
            
        )
    }
}