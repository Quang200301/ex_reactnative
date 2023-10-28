import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features.js/counterSlice'

 const store = configureStore({
  reducer: {
    cart: counterSlice,
  },
})

export default store;