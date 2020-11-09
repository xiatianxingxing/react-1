/*
    reducer 会接收到action的信息，将会进行状态（数据）的处理，
    相当于react中的setState（）的功能。如果有多个reducer。可以使用combineReducers方法
    将其合并，并暴露出去
 */

import * as actionType from './action-type';
import { combineReducers } from 'redux';

const defineObj = {
    
    demo3List:[
        '我是一只牛，我是一只牛',
        '今天学习redux的第2天',
        '哎！ 难搞哦~'
    ],
    demo3Value:'我是一只牛'
}
function demo3(state=defineObj, action){
    // reducer只能接受state  不能改变
    switch(action.type) {
        case  actionType.CHANGE_INPUT:
           return {
               ...state,
               demo3Value: action.value
           }
        case  actionType.ADD_LIST:
            return {
                ...state,
                demo3List: [...state.demo3List,action.value],
                demo3Value:''
            }
        case  actionType.DELETE_LIST:
            const newState = JSON.parse(JSON.stringify(state))
            newState.demo3List.splice(action.index,1)
            return newState
        case  actionType.GET_LIST:
            return {
                ...state,
                demo3List: action.data
            }
           
        
        default:
            return state
   } 

}

export const finalReducer = combineReducers({
    demo3
})
