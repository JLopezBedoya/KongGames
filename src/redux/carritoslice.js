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
        },
        clear:(estado)=>{
            estado.save = []
        }
    }
})
export const { add,remove, clear } = carritoSlice.actions;
export default carritoSlice.reducer;