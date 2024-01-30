import React from "react";

import {AuthProvider} from './AuthContext';

const App = ()=>{

    return (
        
        <>
        <AuthProvider>
       

        <h1> Hello Sonu !!</h1>
        </AuthProvider>
        </>

    )
}

export default App