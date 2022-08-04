import {ADD, ADD_TYPE, LESSEN, LESSEN_TYPE} from './const'

export interface ADDAction {
    type: ADD_TYPE
}
export interface LESSENAction {
    type: LESSEN_TYPE
}

export type ModifyAction = ADDAction | LESSENAction

// 增加state次数的方法
export const add = ():ADDAction => ({
    type: ADD
})
export const lessen = ():LESSENAction => ({
    type: LESSEN
})