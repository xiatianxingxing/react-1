// action 定义一些操作类型，告诉store自己是干什么的

import * as actionType from './action-type';

export const addName = (name) => ({
    type: actionType.ADDNAME,
    data: name
})