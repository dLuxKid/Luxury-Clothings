import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cartItems: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Function to toggle cart dropdown card
    toggleCartDropdown: (state) => {
      state.showCart = !state.showCart;
    },
    // function to add to cart
    addToCart: (state, action) => {
      // check if item is already in cart
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // if already in cart, update quantity value
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        // return updated cart
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          cartItems: updatedCartItems,
        };
      }

      // return updated cart
      return {
        ...state,
        totalQuantity: state.totalQuantity + 1,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    },
    removeFromCart: (state, action) => {
      // remove from cart
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      // return updated state
      return {
        ...state,
        totalQuantity: state.totalQuantity - action.payload.quantity,
        cartItems: updatedItems,
      };
    },

    reduceFromCart: (state, action) => {
      // if quantity is 1 remove from cart
      if (action.payload.quantity === 1) {
        const updatedItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        // return updated cart
        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          cartItems: updatedItems,
        };
      }
      // reduce the quantity number
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // return updated state
      return {
        ...state,
        totalQuantity: state.totalQuantity - 1,
        cartItems: updatedItems,
      };
    },
    clearCart: (state) => {
      return { ...state, cartItems: [] };
    },
  },
});

export const { toggleCartDropdown, addToCart, reduceFromCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
