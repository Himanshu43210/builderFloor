/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import useUser from "../../hooks/useUser";
import { useRouter } from "next/router";

const Menu = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseMove = () => {
    if (!hover) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("pointerdown", onMouseMove, false);
    return () => {
      document.removeEventListener("pointerdown", onMouseMove, false);
    };
  });

  const router = useRouter();
  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        if (hover) {
          setClicked(true);
        }
      }}
      className={`cursor-pointer  h-[61px] flex absolute left-0 flex items-center md:pl-[10px] md:pr-[10px] pl-[30px] pr-[40px] text-[20px] font-medium ${
        clicked && "bg-[#444] text-[#fff]"
      } `}
    >
      <img
        alt=""
        src="/assets/imgs/icons/ham.svg"
        className={` ${
          clicked && "svg-white"
        } w-[30px] mr-[10px] translate-y-[1px]`}
      />
      <span className="md:hidden">Menu</span>
      {clicked && (
        <div
          style={{
            border: "1px solid #ccc",
          }}
          className="bg-[#fff] scroll-hidden  top-[71px]  overflow-y-auto left-0 absolute w-[300px] h-[250px]"
        >
          <div
          onClick={()=>{
router.replace("/")
          }}
          className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Home Page
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Gurgaon Maps
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Loan Service
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Collaboration
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Floor Designs
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Important Documents
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Home
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            About Us
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Contact Us
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            News
          </div>
          <div className="w-[100%] h-[50px] hover:text-[#fff] text-[#000] text-[14px] font-2 tracking-wide duration-0 flex items-center px-[20px] hover:bg-[#006d77]">
            Customer Reviews
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ handleOpen, headerStyle }) => {
  const { getUserName } = useUser();
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const router = useRouter();

  return (
    <>
      <div
        className="w-[100%] h-[60px] bg-[#fff] flex items-center justify-center fixed top-0 left-0 z-50 "
        style={{
          borderBottom: "1px solid #ccc",
        }}
      >
        <Menu />
        <div
          className="flex cursor-pointer items-center"
          onClick={() => {
            router.replace("/");
          }}
        >
          <img
            className="w-[40px] h-[40px] mr-[10px]"
            alt="Agon"
            src="/assets/imgs/template/BUILDER.png"
          />
          <span
            className="text-[22px] color-green-900 font-2 font-medium translate-y-[1.5px] tracking-wide "
            style={{
              fontWeight: "500",
            }}
          >
            BuilderFloor.com
          </span>
        </div>
      </div>
      <div className="w-[100%] h-[60px]"></div>
    </>
  );
};

export default Header;
