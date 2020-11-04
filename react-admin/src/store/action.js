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