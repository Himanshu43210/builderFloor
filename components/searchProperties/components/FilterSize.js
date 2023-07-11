import { useState, useEffect } from "react";

// Components
import RangeSlider from "../../elements/RangeSlider";

function FilterSize({ values, setSize }) {
  const [sizes, setSizes] = useState();
  const [value, setValue] = useState(values);

  const sizeRanges = [
    [0, 10],
    [10, 22],
    [22, 38],
    [38, 48],
    [48, 64],
    [64, 74],
    [74, 76],
  ];
  const baseSize = [100, 150, 200, 250, 300, 400, 500];

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
    setSizes([getPrice(value[0]), getPrice(value[1])]);
    setSize([getPrice(value[0]), getPrice(value[1])]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const getPriceWithWordNotation = (figure) => {
    const floatFigure = figure;
    if (figure > baseSize[baseSize.length - 1]) return "500 +";
    return `${floatFigure.toFixed(2)}`;
  };

  return (
    sizes && (
      <div className="mt-10">
        <span className="text-heading-5 color-green-900 d-inline-block">
          <span id="price-from" className="price-from mr-13">
            {getPriceWithWordNotation(sizes[0])} <br />
            <span className="sqyard"> Sq.Yard </span>
          </span>
          {/* <span> Sq.Yard</span> */}
          <RangeSlider
            step={2}
            min={0}
            max={76}
            value={value}
            onChange={(event, value) => setValue(value)}
          />
          <span id="price-to" className="price-to">
            {getPriceWithWordNotation(sizes[1])} <br />{" "}
            <span className="sqyard"> Sq.Yard </span>
          </span>
          {/* <span> Sq.Yard</span> */}
        </span>
      </div>
    )
  );
}

export default FilterSize;
