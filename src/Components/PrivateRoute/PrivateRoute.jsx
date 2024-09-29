import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation();
     console.log(location.pathname)
     if (loading) {
          return <Loading></Loading>
     }
     if (user) {
          return children
     }
     return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {

     children: PropTypes.node,

}