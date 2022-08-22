import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  cart: [],
  cartTotal: 0,
  cartTotalItems: 0,
  cartTotalPrice: 0,
  cartTotalDiscount: 0,
  cartTotalDiscountPrice: 0,
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product } = action.payload
      const { cart } = state
      const cartItem = cart.find(item => item.id === product.id)
      if (cartItem) {
        cartItem.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
      state.cartTotalItems += 1
      state.cartTotalPrice += product.price
      state.cartTotalDiscount += product.discount
      state.cartTotalDiscountPrice += product.discountPrice
    },
    removeFromCart(state, action) {
      const { product } = action.payload
      const { cart } = state
      const cartItem = cart.find(item => item.id === product.id)
      if (cartItem) {
        cartItem.quantity -= 1
        if (cartItem.quantity === 0) {
          state.cart = cart.filter(item => item.id !== product.id)
        }
      }
      state.cartTotalItems -= 1
      state.cartTotalPrice -= product.price
      state.cartTotalDiscount -= product.discount
      state.cartTotalDiscountPrice -= product.discountPrice
    }

  }

})

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default store
