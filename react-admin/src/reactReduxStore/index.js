// 数据集  这个是redux 不是 react-redux
// 使用thunk 必须使用中间件 applyMiddleware
// compose 增强函数
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk';

//内部会第一次调用reducer函数，得到初始state
const store = createStore(reducer,applyMiddleware(thunk));

export default store