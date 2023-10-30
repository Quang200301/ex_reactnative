import { createSelector } from '@reduxjs/toolkit';

export const selectTotalAllQuantity = (state) => state.cart.totalAllQuantity;
export const selectTotalAllPrice = (state) => state.cart.totalAllPrice;