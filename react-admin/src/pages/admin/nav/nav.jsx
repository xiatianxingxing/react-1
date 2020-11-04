import  React,{ Component } from 'react';
import './nav.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;




export default class Nav extends Component {

    constructor(){
        super()
        this.state = {
            nav:[
                {navName: '衣服',id: '1'},
                {navName: '裙子',id: '1321'},
                {navName: '裤子',id: '46465'},
                {navName: '球鞋',id: '654654'},
                {navName: '帽子',id: '65465'},
                {navName: '衬衫',id: '8989'},
                {navName: '外套',id: '84'},
            ],
            navActive: 0,
            
        }
    }


    componentDidMount(){
       
        this.setState({
            navActive: this.state.nav[0].id
        })
    }

    getNavClick = (event) =>{
        let elem = event.target
        
        let NavArr = document.querySelectorAll('.navLi')
    
        for(let i=0;i<NavArr.length; i++){
            NavArr[i].classList.remove("active")
        }
        elem.classList.add("active")

        this.setState({
            navActive: elem.getAttribute('data-id')
        })
    }

    callbacka = (key) => {
        console.log(key);
    }

    getNavClick2(id,event){
        console.log(event)
        console.log(id)

        this.setState({
            navActive: id
        })
    }
    render (){
        return (
            <div className="viewComponent">
                <ul className="navBox">
                   {
                        this.state.nav.map((item,index)=>{
                           
                            if(index === 0){
                                
                                return <li className="navLi active" data-id={item.id} onClick={ this.getNavClick } key={item.id}>{item.navName}</li>
                            }else{
                                return <li className="navLi" data-id={item.id} onClick={ this.getNavClick } key={item.id}>{item.navName}</li>
                            }
                            
                        })
                    }
                </ul>
                <div style={{fontSize:'30px',color:'red'}}>
                    页面的id {this.state.navActive}
                </div>
                <hr/>
                <ul className="navBox">
                   {
                        this.state.nav.map((item,index)=>{
                            
                                let classN = this.state.navActive === item.id? 'navLi active' : 'navLi'
                                return <li className={classN} data-id={item.id} onClick={ this.getNavClick2.bind(this,item.id) } key={item.id}>{item.navName}</li>
                           
                            
                        })
                    }
                </ul>
                <div style={{fontSize:'30px',color:'red'}}>
                    页面的id {this.state.navActive}
                </div>
                <hr/>
                <Tabs defaultActiveKey="1" onChange={this.callbacka}>
                    <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
            
        )
    }
}