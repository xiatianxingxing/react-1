import React,{ Component } from 'react';
import styles from './admin.module.css'
// 引入路由
import {Route, Switch } from 'react-router-dom'

import { Layout } from 'antd';

// 引入左边菜单
import LeftMenu from './leftMenu'
import { withRouter } from 'react-router-dom'
// 获取组件
import routers from './route'

// 布局组件
const { Header, Sider, Content } = Layout


class Admin extends Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }
    // 方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        
        console.log('ddd',this.props.location.pathname)
    }

    componentWillUnmount() {
       
    }

    tick() {
       
    }
    componentWillReceiveProps(nextProps) {
        
    }
    shouldComponentUpdate (nextProps,nextState){
       
        return false
    }
    render (){
        return (
            <div className={styles.viewBox}>
                <Layout className={styles.antLayout}>
                    <Header>
                        <h3 className={styles.title}>
                            react学习与总结
                     
                        </h3>
                        
                    </Header>
                    <Layout>
                        <Sider>
                            <LeftMenu></LeftMenu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path="/admin/super" component={ routers.Super }></Route>
                                <Route path="/admin/smzq"  component={ routers.Smzq }></Route>
                                <Route path="/admin/params" component={ routers.Params }></Route>
                                <Route path="/admin/spread" component={ routers.Spread }></Route>
                                <Route path="/admin/nav" component={ routers.Nav }></Route>
                                <Route path="/admin/form" component={ routers.Form }></Route>
                                <Route path="/admin/demo1" component={ routers.Demo1 }></Route>
                                <Route path="/admin/demo2" component={ routers.Demo2 }></Route>
                                <Route path="/admin/redux1" component={ routers.Redux1 }></Route>
                                <Route path="/admin/demo3" component={ routers.Demo3 }></Route>
                                <Route path="/admin/reactRedux" component={ routers.ReactRedux }></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
            
        )
    }
}

export default  withRouter(Admin)