import React,{ Component } from 'react';
// 引入路由
import { Link, withRouter } from 'react-router-dom'


import { Menu } from 'antd';
import { CloudOutlined } from '@ant-design/icons';


// menu组件
const { SubMenu } = Menu;

class LeftMeun extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            menu: [
                {id:1,icon:'CloudOutlined',name:'super和state', key:'/admin/super'},
                {id:2,icon:'CloudOutlined',name:'通过路由传参', key: '/admin/params'},
                {id:3,icon:'CloudOutlined',name:'生命周期', key: '/admin/smzq'},
                {id:4,icon:'CloudOutlined',name:'父子组件传值', key: '/admin/spread'},
                {id:5,icon:'CloudOutlined',name:'导航切换', key: '/admin/nav'},
                {id:5,icon:'CloudOutlined',name:'表单验证', key: '/admin/form'},
                {id:5,icon:'CloudOutlined',name:'小demo', key: '/admin/demo1'},
                
            ]
        }
    }
    

    handleClick = e => {
       // console.log('click ', e);
    };


    getMenuList = ()=>{
        return this.state.menu.map((item)=>{
            return (
                <Menu.Item key={item.key} icon={<CloudOutlined /> }>
                    <Link to={item.key}>
                       {item.name}
                    </Link>
                </Menu.Item>
            )
        })
    }


    render (){
        return (
          
            <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={this.props.location.pathname}
                mode="inline"
            >
                { this.getMenuList() }
            </Menu>
                        
            
        )
    }
}

export default  withRouter(LeftMeun)