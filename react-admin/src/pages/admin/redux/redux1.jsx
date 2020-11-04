import  React,{ Component } from 'react';



import images from '../../../assets/images/redux.jpg'
class Redux1 extends Component {
  
    render (){
        return (
            <div className="viewComponent">
                <p className='f18'>认识redux</p>
                <p className='f16'>
                    Redux是一个用来管理管理数据状态和UI状态的JavaScript应用工具。随着JavaScript单页应用（SPA）开发日趋复杂，JavaScript需要管理比任何时候都要多的state（状态），Redux就是降低管理难度的。（Redux支持React，Angular、jQuery甚至纯JavaScript）
                </p>
                <p className='f16'>
                    同时， redux也是flux的进化版，现在已经完全取代Flux
                </p>
                <img
                    style={{width:'600px',margin:'0 auto'}}
                    src={images}
                    />
               
                <p className='f16'>
                    如图所示：reactComponents(我们的组件层) 引入store仓库的状态使用，同时想改变store需要调用action的方法
                    despatch（），但是action只是告诉store我准备改变那个值，但是store告诉action改变这个值的方法在reducer里，
                    然后我们就去reducer里，reducer0 会接收到action的信息，将会进行状态（数据）的处理，返回一个新的
                    newState，这时候store才会改变

                </p>
                
            </div>
            
        )
    }
}

export default Redux1