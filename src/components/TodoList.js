import React from 'react'
import Todo from './Todo'
import TodoInput from './TodoInput'
import  './TodoList.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import {completeTodo,addTodo,removeTodo,updateTodo} from "../redux/action"
import FilterTask from './FilterTask';

const TodoList = () => {
    const dispatch = useDispatch()
   const state = useSelector ((state)=>({...state.todos}));
   const create =(newTodo) => {
       dispatch(addTodo(newTodo))
   }

   const update =(id, updatedTask) => {
       dispatch(updateTodo({id,updatedTask})) ;
   }
    return (
        <div className="TodoList">
        <h1>Todo App</h1>
            <FilterTask/>
           <TodoInput createTodo={create}/>
           <ul>
           <TransitionGroup className="todo=list" > 
           {state.status==="all" ? 
           state.todos && state.todos.map((todo)=>{
return(
   <CSSTransition key={todo.id} classNames="todo">
   <Todo
   key={todo.id}
   id={todo.id}
   task={todo.task}
   completed={todo.completed}
   toggleTodo={()=>dispatch(completeTodo(todo))}
   removeTodo={()=>dispatch(removeTodo(todo))}
   updateTodo={update}
   />
   
   </CSSTransition>
)

           } ): state.status==="done"? state.todos.filter((el)=> el.completed===true).map((todo)=>{
return(
   <CSSTransition key={todo.id} classNames="todo">
   <Todo
   key={todo.id}
   id={todo.id}
   task={todo.task}
   completed={todo.completed}
   toggleTodo={()=>dispatch(completeTodo(todo))}
   removeTodo={()=>dispatch(removeTodo(todo))}
   updateTodo={update}
   />
   
   </CSSTransition>
)

           } ): state.todos.filter((el)=> el.completed===false).map((todo)=>{
return(
   <CSSTransition key={todo.id} classNames="todo">
   <Todo
   key={todo.id}
   id={todo.id}
   task={todo.task}
   completed={todo.completed}
   toggleTodo={()=>dispatch(completeTodo(todo))}
   removeTodo={()=>dispatch(removeTodo(todo))}
   updateTodo={update}
   />
   
   </CSSTransition>
)

           } )}
           
           </TransitionGroup>
           </ul>     
        </div>
    )
}

export default TodoList
