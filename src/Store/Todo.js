import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initData={
    todos:[],
    loading:true,
    error:''
}

export const AsynThunkRTK=createAsyncThunk('Todofetch',async()=>{
         const response = await fetch('http://jsonplaceholder.typicode.com/todos')
         const data = await response.json();
         return data
})

const TodoSlice=createSlice({
    name:'Todo',
    initialState:initData,
    reducers:{

    },
    extraReducers:(builder)=>{
         builder
         .addCase(AsynThunkRTK.pending,(state,action)=>{
                      state.loading=true;
         })
         .addCase(AsynThunkRTK.fulfilled,(state,action)=>{
            state.todos=action.payload;
            state.loading=false;
            state.error=''
         })
         .addCase(AsynThunkRTK.rejected,(state,action)=>{
            state.loading=false
            state.todos=[]
            state.error=action.error.message;
         })
    }
}) 

export const TodoReducer=TodoSlice.reducer;