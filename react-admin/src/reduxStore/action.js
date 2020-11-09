// action 定义一些操作类型，告诉store自己是干什么的

import * as actionType from './action-type';

// demo3输入框改变
export const demo3ChangeInput = (value) => ({
    type: actionType.CHANGE_INPUT,
    value
})
// demo3新增list
export const demo3AddList = (value) => ({
    type: actionType.ADD_LIST,
    value
})
// demo3删除list
export const demo3DeleteList = (index) => ({
    type: actionType.DELETE_LIST,
    index
})

// 获取数据
export const getList = (data) => ({
    type: actionType.GET_LIST,
    data
})

// 使用thunk 异步请求放到了action 便于管理
export const getListThunk = () =>{
    return (dispatch)=>{
        const pr = new Promise((resolve,rejact)=>{
            const data = [
                '有是美好的一天，真好！',
                '冬天到了，冷~~~',
                '他喵的！我买额围巾咋还不到'
            ]
            resolve(data)
        })
        
        pr.then(res=>{
            console.log(res)
            dispatch(getList(res))
        },(err)=>{
            console.log(err)
        })
    }
}