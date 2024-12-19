import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectCurrentUser } from "../features/auth/authSlice";

const RequireAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      try {
        if (!user) {
          const response = dispatch(getCurrentUser(signal));
          if (response?.state === 200) {
            controller.abort(); // Abort the request after success
          }
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetched Aborted");
        } else {
          console.error("An error occurred:", error);
        }
      }
    };
    fetchUser();
    return () => {
      controller.abort(); //Cleanup: abort request when the component unmounts
    };
  }, [dispatch, user]);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
