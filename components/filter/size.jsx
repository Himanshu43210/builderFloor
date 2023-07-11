import { useState, useEffect } from "react";

// Components
import RangeSlider from "../elements/RangeSlider";

function FilterSize({
  values,
  setSize,
  initvalues,
  setVal,
  setSelectedDrop,
  setPageNumber,
}) {
  const sizeRanges = [
    [10, 100],
    [100, 200],
    [200, 300],
    [300, 400],
    [400, 500],
    [500, 600],
    [600, 700],
    [700, 800],
    [800, 900],
    [900, 1000],
  ];
  const baseSize = [10, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const [sizes, setSizes] = useState();
  const [value, setValue] = useState(initvalues);
  const [check, setCheck] = useState(false);

  const getPrice = (value) => {
    let result;
    sizeRanges.forEach((sizeRange, index) => {
      if (value === 0) {
        result = baseSize[value];
        return;
      }
      if (value === sizeRanges[sizeRanges.length - 1][1]) {
        result = baseSize[baseSize.length - 1] + 1;
        return;
      }
      if (value > sizeRange[0] && value <= sizeRange[1]) {
        const min = sizeRange[0];
        const max = sizeRange[1];
        const increment =
          (baseSize[index + 1] - baseSize[index]) / ((max - min) / 2);
        result = baseSize[index] + ((value - min) / 2) * increment;
      }
    });
    return result;
  };

  useEffect(() => {
    if (check) {
      setSizes([getPrice(value[0]), getPrice(value[1])]);
      setSize([getPrice(value[0]), getPrice(value[1])]);
    } else {
      setCheck(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const [la1, setLa1] = useState(initvalues[0]);
  const [la2, setLa2] = useState(initvalues[1]);

  const getPriceWithWordNotation = (figure) => {
    const floatFigure = figure;
    if (figure > baseSize[baseSize.length - 1]) return "500 +";
    return `${floatFigure.toFixed(2)}`;
  };

  return (
    <div
      style={{
        zIndex: 999999,
        border: "1px solid #ccc",
      }}
      className="cursor-default drop-shadow-2xl md:w-[100vw] md:px-1 lg:left-0 md:left-0  md:top-[247px] sm1:top-[300px] drop-shadow-2xl top-[38px] py-[10px] px-1 rounded-[3px] absolute w-[330px] min-h-[100px] bg-[#fff]"
    >
      <div className="flex h-[40px] justify-between">
        <input
          className="w-[140px] h-[40px] px-[10px] tracking-wide font-medium "
          style={{ border: "1px solid #ccc" }}
          placeholder="Min."
          value={la1}
          onBlur={(e) => {
            console.log("blur occurs");
            if (la1 < value[1]) {
              const val = [la1, value[1]];
              e.stopPropagation();
              setValue(val);
              setVal(val);
              setSelectedDrop([...val, 1]);
              setPageNumber(1);
              setSizes([getPrice(val[0]), getPrice(val[1])]);
              setSize([getPrice(val[0]), getPrice(val[1])]);
            } else {
              setLa1(value[1] - 1);
              const val = [value[1] - 1, value[1]];
              setValue(val);
              setVal(val);
              setSelectedDrop([...val, 1]);
              setPageNumber(1);
              setSizes([getPrice(val[0]), getPrice(val[1])]);
              setSize([getPrice(val[0]), getPrice(val[1])]);
            }
          }}
          onChange={(e) => {
            setLa1(Number(e.target.value));
          }}
          type="number"
        />
        <input
          className="w-[140px] h-[40px] px-[10px] tracking-wide font-medium "
          style={{ border: "1px solid #ccc" }}
          placeholder="Max."
          value={la2}
          onBlur={(e) => {
            console.log("blur occurs");

            if (value[0] < la2) {
              const val = [value[0], la2];
              e.stopPropagation();
              setValue(val);
              setVal(val);
              setSelectedDrop([...val, 1]);
              setPageNumber(1);
              setSizes([getPrice(val[0]), getPrice(val[1])]);
              setSize([getPrice(val[0]), getPrice(val[1])]);
            } else {
              setLa2(value[0] + 1);
              const val = [value[0], value[0] + 1];
              setValue(val);
              setVal(val);
              setSelectedDrop([...val, 1]);
              setPageNumber(1);
              setSizes([getPrice(val[0]), getPrice(val[1])]);
              setSize([getPrice(val[0]), getPrice(val[1])]);
            }
          }}
          onChange={(e) => {
            setLa2(Number(e.target.value));
          }}
          type="number"
        />
      </div>
      <div className="w-[100%] h-[50px] mt-[10px] flex items-center bg-[#f4f4f4]">
        <RangeSlider
          step={1}
          min={0}
          max={1000}
          value={value}
          onChange={(event, value) => {
            event.stopPropagation();
            setLa1(value[0]);
            setLa2(value[1]);
            setValue(value);
            setVal(value);
            setSelectedDrop([...value, 1]);
            setPageNumber(1);
          }}
        />
      </div>
      <div className="flex h-[40px] px-[10px] mt-[15px] justify-between">
        <p className="text-[20px] font-bold">
          Min:{getPriceWithWordNotation(value[0])}
          <span className="text-[12px]"> Sq.Yd.</span>
        </p>
        <p className="text-[20px] font-bold">
          Max:{getPriceWithWordNotation(value[1])}{" "}
          <span className="text-[12px]"> Sq.Yd.</span>
        </p>
      </div>
    </div>
  );

  return (
    sizes && (
      <div
        className="w-[300px] bg-[#fff] flex justify-between items-center px-[30px] py-[10px] relative"
        style={{
          zIndex: 9999999999999,
          border: "1px solid #000",
        }}
      >
        <span id="price-from" className="price-from mr-13 font-medium">
          {getPriceWithWordNotation(sizes[0])} <br />
          <span className="sqyard"> Sq.Yard </span>
        </span>
        {/* <span> Sq.Yard</span> */}
        <RangeSlider
          step={2}
          min={0}
          max={76}
          value={value}
          onChange={(event, value) => {
            setSelectedDrop(value);
            setValue(value);
          }}
        />
        <span id="price-to" className="price-to font-medium">
          {getPriceWithWordNotation(sizes[1])} <br />{" "}
          <span className="sqyard"> Sq.Yard </span>
        </span>
        {/* <span> Sq.Yard</span> */}
      </div>
    )
  );
}

export default FilterSize;
