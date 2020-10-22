import  React,{ Component } from 'react';

 

export default class Super extends Component {
    render (){
        return (
            <div className="viewComponent">
                <div>
                    <h2 className="f24">super理解</h2>
                    <h3 className="f20">1.constructor( )-----super( )的基本含义</h3>
                    <p className='f18'>constructor( )——构造方法</p>
                    <p className='f16'>这是ES6对类的默认方法，通过 new 命令生成对象实例时自动调用该方法。并且，该方法是类中必须有的，如果没有显示定义，则会默认添加空的constructor( )方法</p>

                    <p className='f18'>super( ) ——继承</p>
                    <p className='f16'>在class方法中，继承是使用 extends 关键字来实现的。子类 必须 在 constructor( )调用 super( )方法，否则新建实例时会报错</p>
                    <p className='f16'> 报错的原因是：子类是没有自己的 this 对象的，它只能继承自父类的 this 对象，然后对其进行加工，而super( )就是将父类中的this对象继承给子类的。没有 super，子类就得不到 this 对象</p>
                    <p className='f16'></p>
                    <h3 className="f20">2.Es5-----Es6关于继承的实现不同之处</h3>
                    <p className='f16'>出现上面情况的原因是，ES5的继承机制与ES6完全不同。</p>

                    <p className='f16'>复习一个重要知识点——ES5中new到底做了些啥？</p>
                    <p className='f16'>当一个构造函数前加上new的时候，背地里来做了四件事：</p>
                    <p className='f16'>1.生成一个空的对象并将其作为 this；</p>
                    <p className='f16'>2.将空对象的 __proto__ 指向构造函数的 prototype；</p>
                    <p className='f16'>3.运行该构造函数；</p>
                    <p className='f16'>4.如果构造函数没有 return 或者 return 一个返回 this 值是基本类型，则返回this；如果 return 一个引用类型，则返回这个引用类型。</p>

                    <p className='f16'>简单解释，就是在ES5的继承中，先创建子类的实例对象this，然后再将父类的方法添加到this上（ Parent.apply(this) ）。而ES6采用的是先创建父类的实例this（故要先调用 super( )方法），完后再用子类的构造函数修改this。</p>

                    <h3 className="f20">3.super(props)------super()-----以及不写super的区别</h3>

                    <p className='f16'>如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;</p>
                    <p className='f16'>如果你在constructor中要使用this.props,就必须给super加参数：super(props)；</p>
                    <p className='f16'>（无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；）</p>
                    <p className='f16'>如果没用到constructor,是可以不写的；React会默认添加一个空的constructor。</p>
                </div>
                <div>
                    <h2 className="f24">setState相关</h2>
                    <h3 className="f20">1.state</h3>
                    <p className='f18'>React中constructor是唯一可以初始化state的地方，也可以把它理解成一个钩子函数，该函数最先执行且只执行一次。即直接通过this.state = {}来对state进行初始化，在其他位置需要通过this.setState函数来更新状态。直接修改this.state虽然状态可以改变，但不会触发组件的更新。</p>
                    <h3 className="f20">2 setState()</h3>
                    <p className='f18'>this.setState() 接受两种参数  对象和函数</p>
                    <p className='f18'>对象： 接受一个想要修改的state</p>
                    <p className='f18'>函数： 可以传俩个函数  第一个函数接收俩个参数 第一个参数是当前的state，第二个参数是当前的props，然后返回一个对象，和单独修改对象是一样的</p>
                    <p className='f18'>   第二个参数是改变state的回调函数</p>
                 
                </div>
               
            </div>

        )
    }
}