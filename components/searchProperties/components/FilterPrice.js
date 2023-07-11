import { useState, useEffect } from "react";

// Components
import RangeSlider from "../../elements/RangeSlider";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const GreenSlider = styled(Slider)(({ theme }) => ({
  color: "#1d1d1d",
  "& .MuiSlider-thumb": {
    height: 7,
    width: 7,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
}));

export const priceRange = [
  10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000,
  80000000, 90000000, 100000001,
];
function FilterPrice({
  priceRangeIntial,
  setPrice,
  width,
  prices,
  setPrices,
  change,
  sub,
}) {
  const [value, setValue] = useState(prices);

  useEffect(() => {
    if (priceRangeIntial) {
      setPrices(priceRangeIntial);
      setValue(priceRangeIntial);
      setPrice(priceRangeIntial);
    } else {
      setPrice(value);
    }
  }, []);

  const getPriceWithWordNotation = (figure) => {
    if (figure >= priceRange[priceRange.length - 1]) return "10 Cr. +";
    var figureStr = figure?.toExponential();
    const floatFigure = figureStr?.toString()?.split("e")?.[0];
    if (figure > 999 && figure <= 9999) return `${floatFigure} Th.`;
    if (figure > 9999 && figure <= 99999) return `${floatFigure * 10} Th.`;
    if (figure > 99999 && figure <= 999999) return `${floatFigure} Lk.`;
    if (figure > 999999 && figure <= 9999999) return `${floatFigure * 10} Lk.`;
    if (figure > 9999999 && figure <= 99999999) return `${floatFigure} Cr.`;
  };

  useEffect(() => {
    setValue(prices);
  }, [prices]);

  return (
    prices && (
      <div
        className="mt-0 bg-[#fff] px-[20px] sm1:px-[5px] py-[5px] w-[full]  sm1:w-[90%]  rounded-[2px]"
        style={{ width: width }}
      >
        <span className="text-heading-5 color-green-900 d-inline-block items-center h-[100%] justify-center">
          <span id="price-from" className="price-from w-[50px] ">
            {getPriceWithWordNotation(prices[0])}
          </span>
          {/* <RangeSlider
            step={1000000}
            min={priceRange[0]}
            max={priceRange[priceRange.length - 1]}
            value={value}
            onChange={(event, value) => {
              change(value)
              setValue(value);
              setPrices(value);
              setPrice(value);
            }}
          /> */}
          <div className="w-[200px] px-[10px] flex items-center">
            <GreenSlider
              step={1000000}
              min={priceRange[0]}
              max={priceRange[priceRange.length - 1]}
              value={value}
              onChange={(event, value) => {
                change(value);
                setValue(value);
                setPrices(value);
                setPrice(value);
              }}
            />
          </div>
          <span id="price-to" className="price-to w-[50px]">
            {getPriceWithWordNotation(prices[1])}
          </span>
        </span>
      </div>
    )
  );
}

export default FilterPrice;
