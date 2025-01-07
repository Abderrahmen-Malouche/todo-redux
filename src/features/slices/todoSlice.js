import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState={
    todos : []
}
const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            
            state.todos.push({id:nanoid(),title:action.payload})
        },
        removeTodo:(state,action)=>{
           state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
            
        }
    }
})
export const {addTodo,removeTodo}=todoSlice.actions;
export default todoSlice.reducer;