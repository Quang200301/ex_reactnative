import { createSlice } from '@reduxjs/toolkit'

const initialState = []


export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
        state.push(action.payload);
    },
    removeItem:(state,action)=>{
        return state.filter((item,index)=>index !==action.payload);
    },
    increment: (state) => {
     
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,removeItem,addItem } = counterSlice.actions;

export default counterSlice.reducer