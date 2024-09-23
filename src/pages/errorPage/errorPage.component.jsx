import React from "react";
import {useRouteError} from 'react-router-dom';


 const  ErrorPage = () =>{
    let error = useRouteError
     console.error(error)
    return(
        <div className="error-page">
            <h1>Oops!</h1>
            <p>An unexpected error occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
        
    )}

    export default ErrorPage;