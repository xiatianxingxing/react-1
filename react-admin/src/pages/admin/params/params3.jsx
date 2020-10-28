import  React,{ Component } from 'react';

 

export default class Params3 extends Component {
    constructor(){
        super()
        
    }


    componentDidMount(){
       
        console.log(this.props.location.state.name)
       
    }

    render (){
        return (
            <div className="viewComponent">
                <p className='f20'>页面3</p>
                <p className='f18'>传过来的参数--{this.props.location.state.name}</p>
            </div>
            
        )
    }
}