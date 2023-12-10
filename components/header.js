import { useState, useCallback } from "react";
import SecureblendMenu from "./secureblend-menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isSecureblendMenuPopupOpen, setSecureblendMenuPopupOpen] =
    useState(false);

  const openSecureblendMenuPopup = useCallback(() => {
    setSecureblendMenuPopupOpen(true);
  }, []);

  const closeSecureblendMenuPopup = useCallback(() => {
    setSecureblendMenuPopupOpen(false);
  }, []);

  const onFrameButton6Click = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-gray-100 shadow-[0px_4px_100px_#000] w-[1728px] h-[60px] overflow-hidden shrink-0 z-[13]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19px] left-[366px] w-[50px] h-[23px] hidden md:flex"
          onClick={openSecureblendMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[50px] h-[3px] overflow-hidden" />
          <div className="absolute top-[10px] left-[0px] rounded-8xs bg-white w-[30px] h-[3px] overflow-hidden" />
          <div className="absolute top-[20px] left-[0px] rounded-8xs bg-white w-[50px] h-[3px] overflow-hidden" />
        </button>
        <img
          className="absolute top-[0px] left-[0px] w-[67px] h-[60px] overflow-hidden object-cover"
          alt=""
          src="/frame-93@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[14px] left-[482px] rounded-xl shadow-[0px_2px_4px_2px_#01f9f9] w-[161px] h-[26px] overflow-hidden md:hidden">
          <div className="absolute top-[-3px] left-[12px] text-lg font-michroma text-white text-center inline-block w-[136px] h-8">
            Community
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-gray-100 absolute top-[14px] left-[752px] rounded-xl shadow-[0px_2px_4px_2px_#01f9f9] w-[161px] h-[26px] overflow-hidden md:hidden"
          onClick={onFrameButton6Click}
        >
          <div className="absolute top-[-3px] left-[12px] text-lg font-michroma text-white text-center inline-block w-[136px] h-8">
            Developer
          </div>
        </button>
      </div>
      {isSecureblendMenuPopupOpen && (
        <PortalPopup
          placement="Top left"
          onOutsideClick={closeSecureblendMenuPopup}
        >
          <SecureblendMenu onClose={closeSecureblendMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
