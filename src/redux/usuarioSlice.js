import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: "logeado",
    initialState: {
        nombre: "Cliente",
        id: "0",
        iu: "0"
    },
    reducers:{
        logear:(estado,action)=>{
            const {nombre, id, iu} = action.payload
            estado.nombre = nombre
            estado.id = id
            estado.iu = iu
        },
        deslogear:(estado)=>{
            estado.nombre = "nombre"
            estado.id = "0"
            estado.iu = "0"
        }
    }
})
export const {logear,deslogear } = userSlice.actions;
export default userSlice.reducer;