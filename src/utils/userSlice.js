import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : {
        items : []
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearItem:(state)=>{
            state.items.length=0;
        }

    }
})

export default userSlice.reducer;
export const{addItem,removeItem,clearItem} = userSlice.actions;