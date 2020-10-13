import  React,{ Component } from 'react';
import { Button } from 'antd';
import Son1 from './son';

 
export default class Smzq extends Component {

    // 初始化
    constructor (props){
        console.log("%c%s","color:blue","初始化--constructor")
        super(props)
      
        this.state = {
            name: '小明'
        }
    }
    // 挂载前
    componentWillMount(){
        console.log("%c%s","color:blue","挂载前--componentWillMount")
        console.log(this.state.name)
        
    }
    // 组件第一次渲染完成后
    componentDidMount(){
        console.log("%c%s","color:blue","挂载后--componentDidMount--组件第一次渲染完成后")
        console.log(this.state.name)
    }
    // 销毁组件调用
    componentWillUnmount(){
        console.log("%c%s","color:blue","销毁后--componentWillUnmount")
    }

    updataNum = () =>{
        this.setState({
            name: '略略略'
        },()=>{
            console.log(this.state.name)
        })
    }
   
   
    render (){
        return (
            <div className="viewComponent">
                <h3 className="f20">1 挂载卸载过程</h3>
                <p className="f18">constructor</p>
                <p className="f16">constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。</p>
                <p className="f18">componentWillMount</p>
                <p className="f16">componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时</p>
                <p className="f18">componentDidMount</p>
                <p className="f16">组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染</p>
                <p className="f18">componentWillUnmount </p>
                <p className="f16">在此处完成组件的卸载和数据的销毁。</p>
                <p className="f16">clear你在组建中所有的setTimeout,setInterval</p>
                <p className="f16">移除所有组建中的监听 removeEventListener</p>
                <p className="f16">解决warning:</p>

                <h3 className="f20">2 更新过程</h3>
                <Button type="primary" onClick={this.updataNum}>点我更新</Button>
                <span>{this.state.name}</span>
                <Son1 name="父值"></Son1>
                <p className="f18">componentWillReceiveProps(nextProps) nextProps 父值</p>
                <p className="f16">在接受父组件改变后的props需要重新渲染组件时用到的比较多</p>
                <p className="f16">接受一个参数nextProps</p>
                <p className="f16">通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件</p>
                
                <p className="f18">shouldComponentUpdate(nextProps,nextState) nextProps-父值 nextState-当前值</p>
                <p className="f16">主要用于性能优化(部分更新)</p>
                <p className="f16">唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新</p>
                <p className="f16">因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断</p>
               
                <p className="f18">componentWillUpdate (nextProps,nextState)</p>
                <p className="f16">shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState</p>
                <p className="f18">componentDidUpdate(prevProps,prevState)</p>
                <p className="f16">组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state</p>
                
                <p className="f18">render()</p>
                <p className="f16">render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染</p>
               
            </div>
        )
    }

   
}