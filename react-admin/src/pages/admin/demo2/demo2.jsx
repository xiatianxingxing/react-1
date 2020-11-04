import  React,{ Component } from 'react';
import { Row, Col,Table } from 'antd';

import Demo1 from './demoSon1'
import Demo2 from './demoSon2'
const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
   
    },
    {
      title: '总分',
      dataIndex: 'grade',
      key: 'grade',
    }
];
const data = [
    {
        key: '1',
        id: '1',
        name: '小红',
        grade: 562,
        
    },
    {
        key: '2',
        id:'2',
        name: '小黄',
        grade: 123,
       
    },
    {
        key: '3',
        id: '3',
        name: '小明',
        grade: 32,
    },
    {
        key: '4',
        id: '4',
        name: '小亮',
        grade: 325,
    },
    {
        key: '5',
        id: '5',
        name: '小史',
        grade: 582,
    },
    {
        key: '6',
        id: '6',
        name: '艾丽莎',
        grade: 313213,
    },
    {
        key: '7',
        id: '7',
        name: '格雷',
        grade: 244313,
    },
];
export default class Params1 extends Component {
    constructor(){
        super()
        this.state = {
            selectObj: ''
        }
    }
    componentDidMount(){
       
    }

    getGrade = (name) =>{
        console.log(name)
        data.map(val=>{
            if(val.name === name || val.id == name){
                this.setState({
                    selectObj: val.grade
                })
            }
        })
    }

    render (){
        return (
            <div className="viewComponent">
                <h2 className='f20' style={{alignItems:'center'}}>期末考试</h2>
                <p className='f16'>查询</p>
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <Demo1 getG={this.getGrade}></Demo1>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Demo2 mess={this.state.selectObj}></Demo2>
                    </Col>
                </Row>
                <p className='f16'>成绩表</p>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}