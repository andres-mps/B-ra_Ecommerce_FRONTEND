import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    isOpen(state, action) {
      return { ...state, isOpen: action.payload };
    },
    addProduct(state, action) {
      const product = state.products.find((product) => product.id === action.payload.product.id);
      product.qty = product.qty + action.payload.qty;
      if (!product) {
        state.products.push(action.payload);
      }
    },
    removeProduct(state, action) {
      return state.products.filter((product) => product.id !== action.payload);
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
export const { isOpen, setProducts } = actions;
export default reducer;
