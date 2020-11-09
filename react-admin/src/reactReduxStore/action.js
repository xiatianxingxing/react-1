// action 定义一些操作类型，告诉store自己是干什么的

import * as actionType from './action-type';

// 输入框改变
export const ActionChangeInput = (value) => ({
    type: actionType.CHANGE_INPUT,
    value
})
// active新增list
export const activeAddList = () => ({
    type: actionType.ADD_LIST,
})
// active删除list
export const activeDeleteList = (index) => ({
    type: actionType.DELETE_LIST,
    index
})


