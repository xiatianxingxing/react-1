import  React,{ Component } from 'react';
import { Input } from 'antd';


export default class Params1 extends Component {
    constructor(){
        super()
        this.state = {
            num: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        console.log(this.props.mess);
       
    }

    render (){
        return (
            <div className="viewComponent">
                <h2 className='f20'>分数查询</h2>
                <Input placeholder="分数" value={this.props.mess} />
            </div>
        )
    }
}