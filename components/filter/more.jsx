import Image from "next/image";
import React from "react";
import { useState } from "react";

const RadioOptions = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-[100%] py-[10px]">
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="radio"
          id=""
          name="selectit"
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected(0);
          }}
          value={true}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Any</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="radio"
          name="selectit"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected(1);
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Guesthouse</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="radio"
          id=""
          onChange={(e) => {
            setSelected(2);
          }}
          style={{
            accentColor: "#006d77",
          }}
          name="selectit"
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Homestay</p>
      </div>
    </div>
  );
};

const CheckOptions1 = () => {
  const [selected, setSelected] = useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <div className="w-[100%] py-[10px]">
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected({
              ...selected,
              first: !selected.first,
            });
          }}
          value={true}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">North facing</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected({
              ...selected,
              second: !selected.second,
            });
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">South facing</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          onChange={(e) => {
            setSelected({
              ...selected,
              third: !selected.third,
            });
          }}
          style={{
            accentColor: "#006d77",
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">
          North-East facing
        </p>
      </div>
    </div>
  );
};

const CheckOptions2 = () => {
  const [selected, setSelected] = useState({
    first: false,
    second: false,
  });
  return (
    <div className="w-[100%] py-[10px]">
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected({
              ...selected,
              first: !selected.first,
            });
          }}
          value={true}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Corner</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected({
              ...selected,
              second: !selected.second,
            });
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Park facing</p>
      </div>
    </div>
  );
};

const MoreDropdown = () => {
  const [click, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const onPointerdown = () => {
    if (!hover) {
      setClicked(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("pointerdown", onPointerdown);
    return () => {
      document.removeEventListener("pointerdown", onPointerdown);
    };
  });

  return (
    <div
      className="h-[50px] bg-[#fff] relative flex duration-10 items-center mx-[20px] cursor-pointer px-[20px] rounded-sm border-[1px] border-[#ccc]"
      onClick={() => {
        setClicked(true);
      }}
      style={{
        backgroundColor: click && "#006d77",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p
        className="text-[16px] font-medium mr-[12px]"
        style={{
          color: click && "#fff",
        }}
      >
        More
      </p>
      <Image
        src={
          click
            ? "/assets/imgs/textures/drop1.svg"
            : "/assets/imgs/textures/dropdown.svg"
        }
        alt=""
        className="translate-y-[2px]"
        width={15}
        height={15}
      />
      {click && (
        <div
          className="w-[240px] absolute top-[60px] bg-[#fff] right-0 border-[1px] border-[#000]"
          style={{
            zIndex: 1000,
            border: "1px solid #000",
          }}
        >
          {/* <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
            Accomodation
          </div>
          <RadioOptions /> */}
          <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
            Position
          </div>
          <CheckOptions2 />
        </div>
      )}
    </div>
  );
};

export default MoreDropdown;
