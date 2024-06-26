import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    
    const { user } = useAuth();

    return (
        // CONDIÇÃO --- se  user exite mostra AppRoutes,  caso contrário mostra AuthRoutes
        <BrowserRouter>
            
            { user ? < AppRoutes/> : < AuthRoutes/> } 

        </BrowserRouter>
    )
};