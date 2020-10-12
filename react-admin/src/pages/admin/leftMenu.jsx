import React,{ Component } from 'react';
// 引入路由
import { Link} from 'react-router-dom'

import { Menu } from 'antd';
import { CloudOutlined } from '@ant-design/icons';


// menu组件
const { SubMenu } = Menu;

export default class Admin extends Component {
    constructor(){
        super();
       // console.log(this.props)
        this.state = {
            menu: [
                {id:1,icon:'CloudOutlined',name:'super（）理解', key:'/admin/super'},
                {id:2,icon:'CloudOutlined',name:'通过路由传参', key: '/admin/params'},
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
                defaultSelectedKeys={['/admin/super']}
                mode="inline"
            >
                { this.getMenuList() }
            </Menu>
                        
            
        )
    }
}