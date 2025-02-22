import { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { hidePopup, selectPopupMessage, selectPopupType } from "./popupSlice";
// assets
import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../../assets/imgs/IconLogo.png";

const SvgIcon = ({ theIcon }) => (
  <Icon icon={theIcon} className="text-3xl text-orange" />
);

const InfoPopup = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectPopupMessage);
  const type = useSelector(selectPopupType);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (message) {
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 2500);

      const hideTimer = setTimeout(() => {
        dispatch(hidePopup());
        setIsFadingOut(false);
      }, 3000);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [message, dispatch]);

  if (!message) return null;

  const getIcon = () => {
    if (type === "success") return <SvgIcon theIcon="ix:success" />;
    if (type === "error") return <SvgIcon theIcon="ix:error" />;
    return null;
  };

  return (
    <div
      className={`fixed bottom-5 right-[22%] z-[1000] flex scale-100 transform-gpu items-center space-x-3 rounded-lg bg-[#ffffff] p-1 text-[#000] shadow-lg transition-transform md:right-[42%] ${
        isFadingOut ? "animate-fadeOut" : "animate-fadeIn"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-3 border-2 border-solid border-orange p-2">
        <img src={logo} alt="" className="h-8 w-8" />
        <div className="flex flex-row items-center gap-2">
          {getIcon()} <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
