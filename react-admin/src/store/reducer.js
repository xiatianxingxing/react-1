/*
    reducer 会接收到action的信息，将会进行状态（数据）的处理，
    相当于react中的setState（）的功能。如果有多个reducer。可以使用combineReducers方法
    将其合并，并暴露出去
 */

import * as actionType from './action-type';

import { combineReducers } from 'redux';

const defineObj = {

}
function addName(state=defineObj, action){
    switch(action.type){
        case actionType.ADDNAME:
            return action.data
        default:
            return state
    }
}

export const finalReducer = combineReducers({
    addName
})
