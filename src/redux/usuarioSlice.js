import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: "logeado",
    initialState: {
        nombre: "Cliente",
        id: "0"
    },
    reducers:{
        logear:(estado,action)=>{
            const {nombre, id} = action.payload
            estado.nombre = nombre
            estado.id = id
        },
        deslogear:(estado)=>{
            estado.nombre = "nombre"
            estado.id = "0"
        }
    }
})
export const {logear,deslogear } = userSlice.actions;
export default userSlice.reducer;