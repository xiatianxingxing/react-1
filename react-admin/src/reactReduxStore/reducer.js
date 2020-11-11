import { ActionChangeInput } from './action';
import * as actionType from './action-type';
const defineObj = {
    
    list:[
        '我是一只牛，我是一只牛',
        '今天学习redux的第2天',
        '哎！ 难搞哦~'
    ],
    value:'我是react-redux',
    text: '我是默认值'
}

export default  (state=defineObj,action ) =>{

    switch(action.type){
        case  actionType.CHANGE_INPUT:
           return {
               ...state,
               value: action.value
           }
        case  actionType.ADD_LIST:
            return {
                ...state,
                list: [...state.list,state.value],
                value:''
            }
        case  actionType.DELETE_LIST:
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index,1)
            return newState
        case actionType.SON_VALUE:
          
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
   
}
