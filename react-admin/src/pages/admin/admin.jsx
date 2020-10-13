import React,{ Component } from 'react';
import styles from './admin.module.css'
// 引入路由
import {Route, Switch , Link} from 'react-router-dom'

import { Layout } from 'antd';

// 引入左边菜单
import LeftMenu from './leftMenu'
import { withRouter } from 'react-router-dom'
// 获取组件
import Params from './params/params';
import Smzq from './smzq/smzq';
import Super from './super/super'
import Spread from './spread/spread'

// 布局组件
const { Header, Sider, Content } = Layout


class Admin extends Component {
    constructor(props) {
        super(props);
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
                        <span className="fr">{this.state.date.toLocaleTimeString()}</span>
                        </h3>
                        
                    </Header>
                    <Layout>
                        <Sider>
                            <LeftMenu></LeftMenu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route path="/admin/super" component={ Super }></Route>
                                <Route path="/admin/smzq"  component={ Smzq }></Route>
                                <Route path="/admin/params" component={ Params }></Route>
                                <Route path="/admin/spread" component={ Spread }></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
            
        )
    }
}

export default  withRouter(Admin)