import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: { products: [], isOpen: false },
  reducers: {
    openCart(state, action) {
      return { ...state, isOpen: action.payload };
    },
    closeCart(state, action) {
      return { ...state, isOpen: action.payload };
    },
    addProduct(state, action) {
      const product = state.products.find((product) => product.id === action.payload.product.id);
      if (product) {
        product.qty = product.qty + action.payload.qty;
      } else {
        state.products.push({ ...action.payload.product, qty: action.payload.qty });
      }
    },
    removeProduct(state, action) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const product = state.products.find((product) => product.id === action.payload); //Action.payload incluye solo el product id
      product.qty = product.qty + 1;
    },
    decrementQuantity(state, action) {
      const product = state.products.find((product) => product.id === action.payload); //Action.payload incluye solo el product id
      product.qty = product.qty - 1;
      product.qty <= 0 &&
        (state.products = state.products.filter((product) => product.id !== action.payload));
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  openCart,
  closeCart,
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = actions;
export default reducer;
