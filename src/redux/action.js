import * as types from "./actionTypes";


export const completeTodo = (todo) => {
    return {
        type: types.COMPLETE_TODO,
        payload: todo,
    }

};
export const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        payload: todo,
    }

};
export const removeTodo = (todo) => {
    return {
        type: types.REMOVO_TODO,
        payload: todo,
    }

};
export const filterTodo=(status) => {
    return{
        type:types.FILTER_TODO,
        payload:status,
    }
    
};
export const updateTodo = (todo) => {
    return {
        type: types.UPDATE_TODO,
        payload: todo,
    }

};