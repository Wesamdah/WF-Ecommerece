import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { verifyEmail, selectAuthStatus } from "../features/auth/authSlice";
// assets
import Logo from "../assets/imgs/iconLogo.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Verify() {
  const query = useQuery();
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const [verificationSent, setVerificationSent] = useState(false); // Track if verification has been dispatched

  useEffect(() => {
    // Ensure we only dispatch the verification once
    if (!verificationSent) {
      dispatch(
        verifyEmail({
          verificationToken: query.get("token"),
          email: query.get("email"),
        }),
      );
      setVerificationSent(true); // Mark verification as sent to prevent multiple dispatches
    }
  }, [dispatch, query, verificationSent]);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-evenly gap-16 rounded-xl border-[1px] border-orange p-10 shadow-lg">
        <div className="flex flex-col items-center justify-center gap-10">
          <img src={Logo} alt="" className="h-24 w-24" />
          {authStatus === "succeeded" ? (
            <p className="text-4xl">
              Your Account Has Been Verified Successfully!
            </p>
          ) : (
            <p className="text-4xl">An Error Has Occured, Please Try Again!</p>
          )}
        </div>
        <NavLink to="/signin">
          <button className="flex h-12 w-24 items-center justify-center rounded-lg bg-orange text-lg font-semibold text-[white] md:h-14 md:text-xl">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Verify;
