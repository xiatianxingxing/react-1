// 数据集

import { createStore, applyMiddleware } from 'redux';
import { finalReducer } from './reducer'
import thunk from 'redux-thunk';

//内部会第一次调用reducer函数，得到初始state
const store = createStore(finalReducer,applyMiddleware(thunk));

export default store