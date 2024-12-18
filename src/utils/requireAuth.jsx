import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectCurrentUser } from "../features/auth/authSlice";

const RequireAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);

  if (!user) dispatch(getCurrentUser());

  // useEffect(() => {
  //   dispatch(getCurrentUser()); // Fetch user on app load to restore session
  // }, [dispatch]);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
