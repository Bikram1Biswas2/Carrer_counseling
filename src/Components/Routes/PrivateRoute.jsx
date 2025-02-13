import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
    </div>
    }

    if(user){
        return children
    }

    return (
        <Navigate state={{from:location}} to="/login">
            
        </Navigate>
    );
};

export default PrivateRoute;