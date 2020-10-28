import  React,{ Component } from 'react';
import { Row, Col,Button } from 'antd';

import {Route, Switch , Link} from 'react-router-dom'


import Param1 from './params1.jsx';
import Param2 from './params2.jsx';
import Param3 from './params3.jsx';
let viewH = {
    height: '100%',
    overflow: 'auto'
}
export default class Params extends Component {
    constructor(){
        super()
    }

    openParams = () =>{
        this.props.history.push('/admin/params/params1/lululu')
    }

    openQuery = () =>{
        this.props.history.push({pathname:'/admin/params/params2',query:{name:'dahudfd ang'}})
    }

    openState = () =>{
        this.props.history.push({pathname:'/admin/params/params3',state:{name:'state参数'}})
    }

    render (){
        return (
            <div className="viewComponent">
                <Row style={viewH}>
                    <Col style={viewH} span={16}>
                        <p className='f20'>方法1：params </p>
                        <Link className='f18' to='/admin/params/params1/hhh'>用Link跳转</Link>
                        <br/>
                        <Button type="primary" onClick={this.openParams}> history传参</Button>
                        <p className='f18'>指定名称在Route的 push =/admin/params/params1/:name   </p>
                        <p className='f18'>params方法可以传递一个或多个值，但是每个值的类型都是字符串，没法传递一个对象,如果传递的话可以将json对象转换为字符串，然后传递过去，传递过去之后再将json字符串转换为对象将数据取出来</p>
                        <br/>
                        <p className='f20'>方法2：query 传参 类似于表单中的get方法</p>
                        <Link className='f18' to={{pathname:'/admin/params/params2',query:{name:'我是参数'}}}>Link</Link>
                        <Button type="primary" onClick={this.openQuery}> history传参</Button>
                        <p className='f18'>query方式可以传递任意类型的值，但是页面的URL也是由query的值拼接的，URL很长，那么有没有办法类似于表单post方式传递数据</p>
                        <br/>
                        <p className='f20'>state 传参 state方式类似于post方式</p>
                        <Link className='f18' to={{pathname:'/admin/params/params3',state:{name:'state'}}}>Link</Link>
                        <Button type="primary" onClick={this.openState}> history传参</Button>
                        <p className='f18'>state方式依然可以传递任意类型的数据，而且可以不以明文方式传输。可以在实现后对比地址栏的URL来观察三种传值方式URL的区</p>
                    </Col>
                    <Col style={viewH} span={8}>
                        <Switch>
                            <Route path={'/admin/params/params1/:name'} component={Param1}></Route>
                            <Route path={'/admin/params/params2'} component={Param2}></Route>
                            <Route path={'/admin/params/params3'} component={Param3}></Route>
                        </Switch>
                    </Col>
                </Row>
                
            </div>
            
        )
    }
}