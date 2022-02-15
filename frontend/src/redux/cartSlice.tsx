import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductIDState {
  productID: Array<number>
}

const initialState: ProductIDState = {
    productID: [],
}

export const productIDSlice = createSlice({
  name: 'productID',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productID.push(action.payload)
      state.productID = state.productID.sort()
    },
    removeFromCart: (state, action) => {
      for( var i = 0; i < state.productID.length; i++){ 
          if(action.payload == state.productID[i]){
            state.productID.splice(i, 1)
            break
          }
      }
    },
  },
})

export const { addToCart, removeFromCart } = productIDSlice.actions

export default productIDSlice.reducer