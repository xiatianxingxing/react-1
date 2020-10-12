import React,{ Component } from 'react';
import styles from './admin.module.css'
// 引入路由
import {Route, Switch , Link} from 'react-router-dom'

import { Layout } from 'antd';

// 引入左边菜单
import Menu from './leftMenu'
// 获取组件
import Params from './params/params';
import Super from './super/super'

// 布局组件
const { Header, Sider, Content } = Layout


export default class Admin extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        console.log(this.props)
        this.state = {date: new Date()};
    }
    // 方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render (){
        return (
            <div className={styles.viewBox}>
                <Layout className={styles.antLayout}>
                    <Header>
                        <h3 className={styles.title}>
                            react学习与总结
                        <span className="fr">{this.state.date.toLocaleTimeString()}</span>
                        </h3>
                        
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu name="111" value='456'></Menu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path="/admin/super" component={Super}></Route>
                                <Route path="/admin/params" component={Params}></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
            
        )
    }
}