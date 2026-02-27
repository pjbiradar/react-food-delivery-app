import React from "react";
import { useRouteError } from "react-router-dom";


export const Error =()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <p>this is the error page</p>
        <p>{err.status}: {err.statusText}</p>

        </div>
        
    )
    
  
}