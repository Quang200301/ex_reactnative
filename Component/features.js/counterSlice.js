import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalAllQuantity: 0,
    totalAllPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      const itemCart = state.cart.find((item) => item.id === itemToAdd.id);
      if (itemCart) {
        itemCart.quantity++;
        itemCart.totalPrice = itemCart.quantity * itemCart.price;
      } else {
        state.cart.push({ ...itemToAdd, quantity: 1, totalPrice: itemToAdd.price })
      }
      state.totalAllQuantity += 1;
      state.totalAllPrice += itemToAdd.price;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.cart.find((item) => item.id === action.payload.id);
      if (itemToRemove) {
        state.totalAllQuantity -= itemToRemove.quantity;
        state.totalAllPrice -= itemToRemove.totalPrice;
      }
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {

      const itemCart = state.cart.find((item) => item.id == action.payload.id);
      if (itemCart && itemCart.quantity >= 1) {
        itemCart.quantity++;
        itemCart.totalPrice = itemCart.quantity * itemCart.price; // Update the total price
        state.totalAllQuantity += 1;
        state.totalAllPrice += itemCart.price;
      }
    },
    decrementQuantity: (state, action) => {
      const itemCart = state.cart.find((item) => item.id == action.payload.id);
      if (itemCart && itemCart.quantity > 1) {
        itemCart.quantity--;
        itemCart.totalPrice = itemCart.quantity * itemCart.price; // Update the total price
        state.totalAllQuantity -= 1;
        state.totalAllPrice -= itemCart.price;
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { incrementQuantity, decrementQuantity, removeItem, addItem } = counterSlice.actions;

export default counterSlice.reducer