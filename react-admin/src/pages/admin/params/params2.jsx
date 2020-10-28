import  React,{ Component } from 'react';

 

export default class Params2 extends Component {
    constructor(){
        super()
        this.state = {
            mess:'1'
        }
    }


    componentDidMount(){
        // this.setState({
        //     mess: this.props.location.query.name
        // })
        console.log(this.props.location.query.name)
       
    }

    render (){
        return (
            <div className="viewComponent">
                <p className='f20'>页面2</p>
                <p className='f18'>传过来的参数--{this.props.location.query.name}</p>
            </div>
            
        )
    }
}