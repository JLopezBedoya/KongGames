import { createSlice } from '@reduxjs/toolkit';
const carritoSlice = createSlice({
    name: "carrito",
    initialState: {
        compras: []
    },
    reducers:{
        add:(estado, action)=>{
            const id = action.payload
            estado.compras.push(id)
        },
        remove:(estado,action)=>{
            const id = action.payload
            estado.compras.splice(id,1)
        }
    }
})
export const { add,remove } = carritoSlice.actions;
export default carritoSlice.reducer;