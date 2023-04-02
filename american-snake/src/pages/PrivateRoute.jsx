import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((store) => {
    return store.AuthReducer.isAdminAuth;
  });
  console.log(auth);
  return !auth ? (
    <Navigate to={"/login"} state={location.pathname} replace={true} />
  ) : (
    children
  );
};
