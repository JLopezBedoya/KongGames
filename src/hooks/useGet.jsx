import { useEffect, useState } from "react";

export function useGet(url){
    const [info, setInfo] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch("http://localhost:9000/api"+url)
        .then((resp)=>resp.json())
        .then((data)=>setInfo(data))
        .finally(()=>setLoading(false))
        .catch((err)=>console.log(err))
    }, [url])
    return { info, loading }
}
/* const {info, loading} = useGet("/shoes/ver")
if(loading){
  console.log("cargando...")
}else{
  console.log(info)
} */