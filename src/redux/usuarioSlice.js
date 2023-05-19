import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: "logeado",
    initialState: {
        nombre: "Cliente",
        id: "0"
    },
    reducers:{
        loggear:(estado,action)=>{
            const {nombre, id} = action.payload
            estado.nombre = nombre
            estado.id = id
        },
        deslogggear:(estado,action)=>{
            estado.nombre = "nombre"
            estado.id = "0"
        }
    }
})
export const {deslogggear, loggea } = userSlice.actions;
export default userSlice.reducer;