import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";

const UserInfo = React.memo(
  () => {
    const user = useSelector(selectCurrentUser);

    console.log(user);

    return (
      <div className="flex h-full w-full items-center justify-center bg-primary-blue">
        <div className="flex h-44 flex-col items-start justify-center bg-primary-black p-3">
          <div className="text-[#ffffff]">
            Full Name : {user.name} {user.lastName}
          </div>
          <div className="text-[#ffffff]">User ID : {user.userId}</div>
          <div className="text-[#ffffff]">User Role : {user.role}</div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison logic
    return prevProps.user === nextProps.user;
  },
);

export default UserInfo;
