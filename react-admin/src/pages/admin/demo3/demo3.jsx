import  React,{ Component } from 'react';

import { Input,Button,List,Divider,Row,Col } from 'antd';
import { demo3ChangeInput, demo3AddList,demo3DeleteList } from '../../../store/action'

import store from '../../../store/index'



class Demo3 extends Component {
    constructor(prope){
        super(prope)
        this.state =  store.getState().demo3
        
        
        // 订阅（其实这个订阅在高版本已经可以省略了）
        store.subscribe(this.storeChange)
    }
    // 输入框改变
    changeInput = (_e) =>{
       
        store.dispatch(demo3ChangeInput(_e.target.value))
    }

    // store订阅回调
    storeChange = () =>{
        console.log(store.getState())
        this.setState(store.getState().demo3)
     
    }
    // 新增
    clickBtn = () =>{
    
        store.dispatch(demo3AddList(this.state.demo3Value))
    }

    // 删除
    deleteItem (index){
    
        store.dispatch(demo3DeleteList(index))
    }


    render (){
        return (
            <div className="viewComponent">
                <Row>
                    <Col span={12}>
                        <Input type='text' 
                            placeholder={this.state.demo3Value}
                            value={this.state.demo3Value}
                            onChange={this.changeInput}
                            style={{width:'400px',margin:'0 10px'}}
                            ></Input>
                        <Button type='primary' onClick={this.clickBtn}>添加</Button>
                        <Divider orientation="left">O(∩_∩)O</Divider>
                        <div style={{width: '500px'}}>
                            <List
                            bordered
                            dataSource={this.state.demo3List}
                            renderItem={(item,index) => (
                            <List.Item  onClick={this.deleteItem.bind(this,index)}>
                                {item}
                                
                            </List.Item>
                            )}></List>
                        </div>
                        
                    </Col>
                    <Col span={12}>
                        <p className="f18">组件中获取store方法</p>
                        <p className='f16'>首先要引入store， 获取store.getState()</p>

                        <p className="f18">修改store方法</p>
                        <p className='f16'>修改store.dispatch(value)</p>
                        <p className="f18">redicer获取修改的方法，同时返回一个新的 newState</p>
                        <p className='f16'>redicer声明一个方法 接受俩个参数： state , action</p>
                        <p className='f16'>state 默认值</p>
                        <p className='f16'>action 组件传来的修改的值，同时会跟随一个type，根据type确定要修改的值</p>
                        
                        <p className="f18">订阅store</p>
                        <p className='f16'>修改store后，使用组件需要更新就需要通过订阅方法来是先更新
                        store.subscribe(callback)</p>  
                    </Col>
                </Row>
                
                 
            </div>
            
        )
    }
}


export default Demo3