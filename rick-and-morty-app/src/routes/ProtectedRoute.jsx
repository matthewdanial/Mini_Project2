import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext.jsx";

//protects logged-in only routes
function ProtectedRoute({ redirectPath = '/login', children }) {
    const { currentUser } = useUserContext();

    //not logged in
    if (!currentUser.email) {
        return <Navigate to={redirectPath} replace />;
    }

    //logged in
    return children ? children : <Outlet/>;
}

export default ProtectedRoute