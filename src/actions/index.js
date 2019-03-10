import { CHANGENUM, SELECTTYPE } from './ActionType'

// 触发运算操作
export const operation = (actionType) => ({type: actionType})
// 选择数字
export const changeNum = (name, value) => ({ type: CHANGENUM, name, value })
// 选择运算符号
export const selectType = (typeName) => ({ type: SELECTTYPE, typeName })
