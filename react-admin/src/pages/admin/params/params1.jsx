import  React,{ Component } from 'react';

 

export default class Params1 extends Component {

    componentDidMount(){
        console.log(this.props.match.params)
       
    }

    render (){
        return (
            <div className="viewComponent">
                <p className='f20'>页面1</p>
                <p className='f18'>传过来的参数--{this.props.match.params.name}</p>
            </div>
            
        )
    }
}