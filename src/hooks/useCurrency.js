import { useEffect,useState } from "react";

function useCurrency(currency){
    const url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    const [data,setData]=useState({})
    
    useEffect(()=>{
        console.log(url)
        fetch(url)
        .then((res)=>res.json()).then(res=>setData(res[currency]))

    },[currency]);
    console.log(data);

    return data

}

export default useCurrency