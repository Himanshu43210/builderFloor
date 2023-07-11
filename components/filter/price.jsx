import { useState, useEffect } from "react";

// Components
import RangeSlider from "../elements/RangeSlider";

export const priceRange = [
  10000000, 20000000, 30000000, 40000000, 50000000, 60000001,
];
function FilterPrice({ priceRangeIntial, setPrice }) {
  const [prices, setPrices] = useState([priceRange[0], priceRange[1]]);
  const [value, setValue] = useState([priceRange[0], priceRange[1]]);

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
    if (figure >= priceRange[priceRange.length - 1]) return "6 Cr. +";
    var figureStr = figure?.toExponential();
    const floatFigure = figureStr?.toString()?.split("e")?.[0];
    if (figure > 999 && figure <= 9999) return `${floatFigure} Th.`;
    if (figure > 9999 && figure <= 99999) return `${floatFigure * 10} Th.`;
    if (figure > 99999 && figure <= 999999) return `${floatFigure} Lk.`;
    if (figure > 999999 && figure <= 9999999) return `${floatFigure * 10} Lk.`;
    if (figure > 9999999 && figure <= 99999999) return `${floatFigure} Cr.`;
  };


  return (
    <div
      style={{
        zIndex: 999999,
        border: "1px solid #ccc",
      }}
      className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-[30px] lg:left-0 left-0 md:top-[160px] top-[60px] py-[10px] px-[10px] rounded-[3px] absolute w-[330px] min-h-[100px] bg-[#fff]"
    >
      <div className="flex h-[40px] justify-between">
        <input
          className="w-[140px] h-[40px] px-[10px] tracking-wide font-medium "
          style={{ border: "1px solid #ccc" }}
          placeholder="Min."
          value={value[0]}
          type="number"
        />
        <input
          className="w-[140px] h-[40px] px-[10px] tracking-wide font-medium "
          style={{ border: "1px solid #ccc" }}
          placeholder="Max."
          value={value[1]}
          type="number"
        />
      </div>
      <div className="w-[100%] h-[50px] mt-[10px] flex items-center bg-[#f4f4f4]">
        <RangeSlider
          step={2000000}
          min={priceRange[0]}
          max={priceRange[priceRange.length - 1]}
          value={value}
          onChange={(event, value) => {
            setValue(value);
            setPrices(value);
            setPrice(value);
          }}
        />
      </div>
      <div className="flex h-[40px] px-[10px] mt-[15px] justify-between">
        <p className="text-[20px] font-bold">
          Min:{getPriceWithWordNotation(value[0])}
        </p>
        <p className="text-[20px] font-bold">
          Max:{getPriceWithWordNotation(value[1])}
        </p>
      </div>
    </div>
  );

  return (
    prices && (
      <div
        className="w-[300px] bg-[#fff] flex items-center px-[15px] py-[10px] relative"
        style={{
          zIndex: 9999999999999,
          border: "1px solid #000",
        }}
      >
        <span id="price-from" className="price-from font-medium">
          {getPriceWithWordNotation(prices[0])}
        </span>
        <RangeSlider
          step={2000000}
          min={priceRange[0]}
          max={priceRange[priceRange.length - 1]}
          value={value}
          onChange={(event, value) => {
            setValue(value);
            setPrices(value);
            setPrice(value);
          }}
        />
        <span id="price-to" className="price-to font-medium">
          {getPriceWithWordNotation(prices[1])}
        </span>
      </div>
    )
  );
}

export default FilterPrice;
