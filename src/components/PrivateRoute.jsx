import { Navigate } from "react-router-dom";

// Its a higher order component
function PrivateRoute({ children }) {
   //xs console.log(children)
   // const auth=true;
   const token=localStorage.getItem("token");
   return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;