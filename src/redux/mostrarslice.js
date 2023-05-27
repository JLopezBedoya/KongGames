import { createSlice } from '@reduxjs/toolkit';
const mostrarSlice = createSlice({
    name: "mostrar",
    initialState: {
        mostrar: ["block","none","none","none","none","none"]
    },
    reducers:{
        cambiar:(estado,action)=>{
            const enpantalla = action.payload
            estado.mostrar = estado.mostrar.map((e, i)=>{
                if(i===enpantalla){
                    return "block";
                }
                else{
                    return "none";
                }
            })
        }
    }
})
export const { cambiar } = mostrarSlice.actions;
export default mostrarSlice.reducer;