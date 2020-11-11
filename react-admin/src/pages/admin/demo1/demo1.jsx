import  React,{ Component } from 'react';

import styles from './demo1.module.css'

export default class Demo1 extends Component {
    constructor(){
        super()
        this.state = {
            nav:[
                {title:'红',id:'111',color:'redBox'},
                {title:'黄',id:'112',color:'yellowBox'},
                {title:'蓝',id:'113',color:'blueBox'},
                {title:'粉',id:'114',color:'pinkBox'},
                {title:'绿',id:'115',color:'greenBox'}
            ],
            activeId : '111'
        }
    }
    // 头部导航
    navBox = (e) => {
        
        let navlist = this.state.nav.map(item=>{
            if(item.id === this.state.activeId){
                return <li className="navLi active"  data-id={item.id} onClick={ this.getNavClick } key={item.id}>{item.title}</li>
            }else{
                return <li className="navLi" data-id={item.id} onClick={ this.getNavClick } key={item.id}>{item.title}</li>
            }
            
        })
        return <ul className="navBox">{navlist}</ul>
    }
    // 点击导航
    getNavClick = (e) =>{
        e.stopPropagation();
        this.setState({
            activeId: e.target.getAttribute('data-id')
        })
        // this.navBox()
        // this.colorBox()
    }

    // 输出色块
    colorBox = (e) =>{
        console.log(1)
        return this.state.nav.map( item => {
            if(item.id === this.state.activeId){
               
                var  str = styles.liBox + ' ' + item.color
                return <div className={str}></div>
            }
        })
        
    }
    
    render (){
        return (
            <div className="viewComponent">
                <div>
                    { this.navBox() } 
                </div>
            
                <div>
                    { this.colorBox() }
                </div>
            </div>
            
        )
    }
}
