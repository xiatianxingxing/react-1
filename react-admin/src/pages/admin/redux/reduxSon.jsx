import  React,{ Component } from 'react';
import { Input,Button } from 'antd';
export default class Redux1 extends Component {
    constructor(){
        super()
        
    }
   
    
    
    render (){
        return (
            <div className="viewComponent">
                <p className='f18'>我是子元素</p>
                <p>获取redux的值 --- </p>
            </div>
            
        )
    }
}