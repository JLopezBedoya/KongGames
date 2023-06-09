import { useEffect, useState } from "react";

export function usePost(filtros){
    const [info, setInfo] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch("http://localhost:9000/api/shoes/filtros", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(filtros)
          })
            .then(response => response.json())
            .then(data => {
              setInfo(data)
            })
            .finally(()=>setLoading(false))
        .catch((err)=>console.log(err))
    }, [filtros])
    return { info, loading }
}
