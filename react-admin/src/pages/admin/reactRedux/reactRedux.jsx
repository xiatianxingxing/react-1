import  React,{ Component } from 'react';

import { Input,Button,List,Divider,Row,Col } from 'antd';

import { ActionChangeInput,activeAddList,activeDeleteList } from  '../../../reactReduxStore/action'
import { connect } from 'react-redux'


class ReactRedux extends Component {
    constructor(prope){
        super(prope)
       
    }
    render (){
        return (
            <div className="viewComponent">
                <Row>
                    <Col span={12}>
                        <Input type='text' 
                            placeholder={this.props.value}
                            value={this.props.value}
                            onChange={this.props.changeInput}
                            style={{width:'400px',margin:'0 10px'}}
                            ></Input>
                        <Button type='primary' onClick={this.props.addList}>添加</Button>
                        <Divider orientation="left">O(∩_∩)O</Divider>
                        <div style={{width: '500px'}}>
                            <List
                            bordered
                            dataSource={this.props.list}
                            renderItem={(item,index) => (
                            <List.Item onClick={this.props.deleteList.bind(this,index)}>
                                {item}
                            </List.Item>
                            )}></List>
                        </div>
                        
                    </Col>
                    <Col span={12}>
                        <p className="f20">react-redux</p>
                        <p className='f16'>在学过的redux的基础上继续学习react-redux</p>
                        <p className='f18'>provder 提供器</p>
                        <p className='f16'>首先我们新加入一个组件 Provder 它可以包含多个组件</p>

                        <p className='f18'>然后 connect 连接器 </p>
                        <p className='f16'>通过 connect（stateToProps 读取，dispatchProps修改）（component）链接</p>
                        <p className='f18'> stateToProps映射</p>
                        <p className='f16'>stateToProps = （stors里的state）=》retrun 修改的值</p>
                        <div>
                            
                        </div>
                    </Col>  
                </Row>
                
                 
            </div>
            
        )
    }
}

const stateToProps = (state)=>{
    return {
        value: state.value,
        list: state.list
    }
}

const dispatchProps = (dispatch)=>{
    return {
        changeInput(e){
            
            dispatch(ActionChangeInput(e.target.value))
        },
        addList(){
           
            dispatch(activeAddList())
        },
        deleteList(index){
           
            dispatch(activeDeleteList(index))
        }
        
    }
}

export default connect(stateToProps,dispatchProps)(ReactRedux)