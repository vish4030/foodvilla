import { useEffect, useState } from "react"


const useIsOnline =() =>{
    const[isInternet, setIsInternet] =useState(true);

    const handleOnline = ()=>{setIsInternet(true)}
    const handleOffline = ()=>{setIsInternet(false)}
    
    useEffect(()=>{
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return ()=>{
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
    }
    },[])
    return isInternet;
}

export default useIsOnline;