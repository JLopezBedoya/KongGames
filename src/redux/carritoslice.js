import { createSlice } from '@reduxjs/toolkit';
const carritoSlice = createSlice({
    name: "carrito",
    initialState: {
        save: []
    },
    reducers:{
        add:(estado, action)=>{
            const id = action.payload
            estado.save.push(id)
        },
        remove:(estado,action)=>{
            const id = action.payload
            estado.save.splice(id,1)
        }
    }
})
export const { add,remove } = carritoSlice.actions;
export default carritoSlice.reducer;