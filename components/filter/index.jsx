import Image from "next/image";
import React, { useRef } from "react";
import { useState } from "react";
import MoreDropdown from "./more";
import FilterPrice from "../searchProperties/components/FilterPrice";
import { Formik, Form, useFormikContext } from "formik";
import FilterSize from "./size";
import Select from "./select";
import axios from "axios";
import MultiSelect from "./multi-select";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../services/scroll";
import MuiSelect from "./sselect";
import MultiSelectLocation from "./select-locations";

function generateArray(inputArray) {
  let outputSet = new Set();

  if (
    inputArray.includes("3M") ||
    inputArray.includes("1M") ||
    inputArray.includes("READY")
  ) {
    outputSet.add("READY");
  }

  if (inputArray.includes("1M")) {
    outputSet.add("1M");
  }

  if (inputArray.includes("3M")) {
    for (let i = 1; i <= 3; i++) {
      outputSet.add(i + "M");
    }
  }

  if (inputArray.includes("6M")) {
    for (let i = 4; i <= 6; i++) {
      outputSet.add(i + "M");
    }
  }

  if (inputArray.includes("9M")) {
    for (let i = 7; i <= 9; i++) {
      outputSet.add(i + "M");
    }
  }

  if (inputArray.includes("12M")) {
    for (let i = 10; i <= 12; i++) {
      outputSet.add(i + "M");
    }
  }

  return Array.from(outputSet);
}

async function listProperties(filterValues, setPropertiesLength) {
  const dumm = generateArray(filterValues.possession);
  // console.log(
  //   "subbbb",
  //   filterValues.priceRange?.[0] && {
  //     price: {
  //       $gte: filterValues.priceRange[0],
  //       $lte: filterValues.priceRange?.[1],
  //       // ...(filterValues.priceRange?.[1] !=
  //       //   filterValues.priceRange[filterValues.priceRange.length - 1] && {
  //       //   $lte: filterValues.priceRange?.[1],
  //       // }),
  //     },
  //   }
  // );
  console.log("it runns set");
  const filters = {
    ...(filterValues.cities?.length > 0 && {
      city: { $in: filterValues.cities },
    }),
    ...(filterValues.locations?.length > 0 && {
      sectorNumber: {
        // $in: filterValues.locations.map(({ value }) => value),
        $in: filterValues.locations,
      },
    }),
    ...(filterValues.possession?.length > 0 && {
      possession: { $in: dumm },
    }),
    ...(filterValues.floors?.length > 0 && {
      floor: { $in: filterValues.floors },
    }),
    ...(filterValues.accommodation?.length > 0 && {
      accommodation: { $in: filterValues.accommodation },
    }),
    ...(filterValues.categories?.length > 0 && {
      category: { $in: filterValues.categories },
    }),
    ...(filterValues.facing?.length > 0 && {
      facing: {
        $in: filterValues.facing,
      },
    }),
    // ...(filterValues.positions.includes("parkFacing") > 0 && {
    //   parkFacing: { $eq: true },
    // }),
    ...(filterValues.positions.includes("parkFacing") && {
      parkFacing: true,
    }),
    ...(filterValues.positions.includes("corner") > 0 && {
      corner: true,
    }),
    ...(filterValues.priceRange?.[0] && {
      price: {
        $gte: filterValues.priceRange[0],
        $lte: filterValues.priceRange?.[1],
        // ...(filterValues.priceRange?.[1] !=
        //   filterValues.priceRange[filterValues.priceRange.length - 1] && {
        //   $lte: filterValues.priceRange?.[1],
        // }),
      },
    }),
    ...(filterValues.sizeRange?.[0] && {
      size: {
        $gte: filterValues.sizeRange?.[0],
        $lte: filterValues.sizeRange?.[1],
      },
    }),
  };
  console.log(filters, "set PRopss");
  const response = await axios.post(
    // "https://p24x7-server.herokuapp.com/api/p24x7",
    "https://testerp1apis.nextsolutions.in/api/p24x7",
    {
      action: "list",
      module: "properties",
      filters,
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
      sort: filterValues.sort,
    }
  );
  setPropertiesLength(response.data.length);
  // console.log(response.data)
  return response.data;
}

const DropDown = ({
  classid,
  title,
  dropdown,
  changed,
  current,
  curr,
  check,
  submit,
  selectedDrop,
  id,
  insideElement,
  setInsideElement,
}) => {
  const dropdownRef = useRef(null);
  const [objectCheck, setObjectCheck] = useState(null);
  let lastElement = null;
  if (selectedDrop?.length > 0) {
    lastElement = selectedDrop[selectedDrop.length - 1];
  }

  React.useEffect(() => {
    const tempObject = insideElement.find((obj) => obj.id === current);
    setObjectCheck(tempObject);
  }, [insideElement]);

  React.useEffect(() => {
    setInsideElement((prev) =>
      prev.map((obj) => {
        if (obj.id === lastElement) {
          return {
            ...obj,
            selectedDrop: selectedDrop,
          };
        } else {
          return obj;
        }
      })
    );
  }, [selectedDrop]);

  const [hover, setHover] = useState(false);

  const handleClickOutside = (event) => {
    const dropdownElement =
      document.getElementsByClassName("DROPDOWN")[classid];
    if (current === 1) {
      console.log(
        title,
        current,
        id,
        document.getElementsByClassName("DROPDOWN")
      );
      console.log(dropdownElement.contains(event.target));
    } else if (dropdownElement && !dropdownElement.contains(event.target)) {
      // Mouse clicked outside of the dropdown
      // Perform your desired action here

      console.log("it's exitingweca");
      setInsideElement((prev) =>
        prev.map((obj) =>
          obj.id === current ? { ...obj, isOpen: false } : obj
        )
      );
    }
  };
  const onPointerdown = (e) => {
    if (!hover) {
      // setClicked(false);
      if (curr === current) {
        console.log("it's exiting");

        changed(null);
        if (submit) {
          submit();
        }
      }
    }
  };

  const isMediumScreen = useMediaQuery("(max-width:1024px)");

  React.useEffect(() => {
    document.addEventListener("pointerdown", onPointerdown);
    return () => {
      document.removeEventListener("pointerdown", onPointerdown);
    };
  });

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdown = () => {
    changed(current);
    setInsideElement((prev) =>
      prev.map((obj) =>
        obj.id === current ? { ...obj, isOpen: !obj.isOpen } : obj
      )
    );
  };

  return (
    <div
      ref={dropdownRef}
      className="h-[40px] rounded-[8px] md:mr-[10px] md:px-3 md:rounded-[40px] md:justify-center  lg:mr-[20px]  border-[#000]  md:my-[10px] bg-[#fff] lg:relative flex items-center duration-10 cursor-pointer  px-[10px] rounded-sm border-[1px] DROPDOWN"
      onClick={handleDropdown}
      style={{
        // backgroundColor: ((lastElement === current) && selectedDrop?.length) > 0 ? "#000" : "",
        backgroundColor:
          insideElement?.some(
            (obj) => obj.id === current && obj.selectedDrop?.length > 1
          ) ||
          (curr === current && objectCheck?.isOpen)
            ? "#006D77"
            : "",
        border: " 1px solid #ccc",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p
        className="text-[16px] xs:text-[12px] capitalize  mr-0 lg:mr-[12px] xl:mr-[12px] 2xl:mr-[12px]"
        style={{
          color:
            insideElement?.some(
              (obj) => obj.id === current && obj.selectedDrop?.length > 1
            ) ||
            (curr === current && objectCheck?.isOpen)
              ? "#fff"
              : "",
        }}
      >
        {title}
      </p>
      {!isMediumScreen && (
        <Image
          src={
            current === curr
              ? "/assets/imgs/textures/drop1.svg"
              : "/assets/imgs/textures/dropdown.svg"
          }
          alt=""
          className="translate-y-[2px]"
          width={15}
          height={15}
        />
      )}
      {current === curr &&
        objectCheck?.isOpen &&
        (check ? (
          <div
            className="absolute top-0 left-0"
            style={{
              zIndex: 99999999999,
            }}
          >
            {/* {console.log(insideElement)} */}
            {dropdown}
          </div>
        ) : (
          <div
            className="absolute top-[60px] left-[-30px]"
            style={{
              zIndex: 99999999999,
            }}
          >
            {dropdown}
          </div>
        ))}
    </div>
  );
};

const DropDown1 = ({
  classid,
  title,
  dropdown,
  changed,
  current,
  curr,
  check,
  submit,
  selectedDrop,
  id,
  insideElement,
  setInsideElement,
}) => {
  const dropdownRef = useRef(null);
  const [objectCheck, setObjectCheck] = useState(null);
  let lastElement = null;
  if (selectedDrop?.length > 0) {
    lastElement = selectedDrop[selectedDrop.length - 1];
  }

  React.useEffect(() => {
    const tempObject = insideElement.find((obj) => obj.id === current);
    setObjectCheck(tempObject);
  }, [insideElement]);

  React.useEffect(() => {
    setInsideElement((prev) =>
      prev.map((obj) => {
        if (obj.id === lastElement) {
          return {
            ...obj,
            selectedDrop: selectedDrop,
          };
        } else {
          return obj;
        }
      })
    );
  }, [selectedDrop]);

  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const onPointerdown = (e) => {
    if (!hover) {
      // setClicked(false);
      if (clicked) {
        console.log("it's exiting");
        changed(null);
        setClicked(false);
        if (submit) {
          submit();
        }
      }
    }
  };

  const isMediumScreen = useMediaQuery("(max-width:1024px)");

  React.useEffect(() => {
    document.addEventListener("pointerdown", onPointerdown);
    return () => {
      document.removeEventListener("pointerdown", onPointerdown);
    };
  });

  const handleDropdown = () => {
    changed(current);
    setInsideElement((prev) =>
      prev.map((obj) =>
        obj.id === current ? { ...obj, isOpen: !obj.isOpen } : obj
      )
    );
  };

  return (
    <div
      ref={dropdownRef}
      className="h-[40px] rounded-[8px] md:mr-[10px] md:px-3 md:rounded-[40px] md:justify-center  lg:mr-[20px]  border-[#000]  md:my-[10px] bg-[#fff] lg:relative flex items-center duration-10 cursor-pointer  px-[10px] rounded-sm border-[1px] DROPDOWN"
      onClick={() => {
        if (current !== curr) {
          setClicked(true);
        }
      }}
      style={{
        // backgroundColor: ((lastElement === current) && selectedDrop?.length) > 0 ? "#000" : "",
        backgroundColor:
          insideElement?.some(
            (obj) => obj.id === current && obj.selectedDrop?.length > 1
          ) ||
          (curr === current && objectCheck?.isOpen)
            ? "#006D77"
            : "",
        border: " 1px solid #ccc",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p
        className="text-[16px] xs:text-[12px] capitalize  mr-0 lg:mr-[12px] xl:mr-[12px] 2xl:mr-[12px]"
        style={{
          color:
            insideElement?.some(
              (obj) => obj.id === current && obj.selectedDrop?.length > 1
            ) ||
            (curr === current && objectCheck?.isOpen)
              ? "#fff"
              : "",
        }}
      >
        {title}
      </p>
      {!isMediumScreen && (
        <Image
          src={
            current === curr
              ? "/assets/imgs/textures/drop1.svg"
              : "/assets/imgs/textures/dropdown.svg"
          }
          alt=""
          className="translate-y-[2px]"
          width={15}
          height={15}
        />
      )}
      {clicked &&
        (check ? (
          <div
            className="absolute top-0 left-0"
            style={{
              zIndex: 99999999999,
            }}
          >
            {/* {console.log(insideElement)} */}
            {dropdown}
          </div>
        ) : (
          <div
            className="absolute top-[60px] left-[-30px]"
            style={{
              zIndex: 99999999999,
            }}
          >
            {dropdown}
          </div>
        ))}
    </div>
  );
};

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
const CheckOptions2 = ({
  setValue,
  selected,
  setSelected,
  setSelectedDrop,
}) => {
  React.useEffect(() => {
    const arr = [];
    if (selected.second) {
      arr.push("parkFacing");
    }
    if (selected.first) {
      arr.push("corner");
    }
    setValue(arr);
    setSelectedDrop([...arr, 4]);
  }, [selected]);
  return (
    <div className="w-[100%] py-[10px]">
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          checked={selected.first}
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
          checked={selected.second}
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

const FilterContainer = ({
  values,
  setProperties,
  locations,
  defaultProperties,
  setPropertiesLength,
  setPageNumber,
  setPaginationData,
  propertiesLength,
  pprraa,
  pageNumber,
}) => {
  const categoriesOptions = [
    {
      value: "plot",
      label: "Plot",
    },
    {
      value: "flat",
      label: "Flat",
    },
    {
      value: "commercial",
      label: "Commercial",
    },
    {
      value: "institutional",
      label: "Institutional",
    },
  ];
  // console.log(defaultProperties)
  const [insideElement, setInsideElement] = useState([
    {
      id: 1,
      isOpen: false,
    },
    {
      id: 2,
      isOpen: false,
    },
    {
      id: 3,
      isOpen: false,
    },
    {
      id: 4,
      isOpen: false,
    },
    {
      id: 5,
      isOpen: false,
    },
    {
      id: 6,
      isOpen: false,
    },
    {
      id: 7,
      isOpen: false,
    },
  ]);

  const defaultFilters = values ?? {
    categories: [],
    cities: [],
    locations: [],
    facing: [],
    positions: [],
    floors: [],
    possession: [],
    accommodation: [],
    priceRange: pprraa,
    sizeRange: [0, 10],
  };

  const [loading, setLoading] = useState(false);
  const [selectedDrop, setSelectedDrop] = useState([]);
  const [isReset, setIsReset] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    // console.log(values, "Please check here", locations);
    const ff = JSON.parse(localStorage.getItem("filter"))
      ? JSON.parse(localStorage.getItem("filter"))
      : values;
    const str = JSON.stringify({ ...values, pageNumber: pageNumber });
    console.log(str);
    localStorage.setItem("filter", str);
    console.log(values, "please checck here");
    dispatch(setFilters({ ...values, pageNumber: pageNumber }));
    setLoading(true);
    // setCookie("property_filters", JSON.stringify(values));
    const properties = await listProperties(values, setPropertiesLength);
    setProperties(properties ?? []);
    setPaginationData(properties ?? []);
    setLoading(false);
    // console.log(values, "values", properties, "properties", locations, "locations")
  };

  const [selected, setSelected] = useState({
    first: false,
    second: false,
  });

  const [multiData, setMultiData] = useState({
    localtions: [],
    position: [],
    facing: [],
    accommodation: [],
    possession: [],
    floors: [],
    sort: null,
  });

  const [curr, setCurr] = useState(null);
  const [park, setPark] = useState(false);
  const [corner, setCorner] = useState(false);
  const [val, setVal] = useState([180, 360]);
  const [selectedVal, setSelectedVal] = useState([]);
  const reset = () => {
    setProperties(defaultProperties);
    setCurr(null);
    setPark(false);
    setCorner(false);
    setVal([180, 360]);
    setSelectedVal([]);
    setSelectedDrop([]);
    setPropertiesLength(defaultProperties.length);
    setMultiData({
      localtions: [],
      position: [],
      facing: [],
      accommodation: [],
      possession: [],
      floors: [],
      sort: 1,
    });
    setInsideElement([
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 6,
      },
      {
        id: 7,
      },
    ]);
    setPageNumber(1);
  };

  const formikRef = useRef(null);

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit(); // Trigger submit function of Formik form
    }
  };

  const [searchCity, setSearchCity] = useState("Gurgaon");
  const [priceRange, setPriceRange] = useState();
  const onChangePriceRange = useCallback(
    (priceArr) => {
      setPriceRange([...priceArr]);
    },
    [priceRange]
  );
  const [prices, setPrices] = useState(pprraa);

  return (
    <Formik ref={formikRef} initialValues={defaultFilters} onSubmit={onSubmit}>
      {({ getFieldProps, setFieldValue, handleSubmit, resetForm }) => (
        <>
          <div className="mt-[30px] bg-[#fff] form-center flex ">
            <div className="relative">
              <select
                className=" sm1:hidden   bg-[#006d77] text-[#fff] appearance-none f1 px-4 cursor-pointer mr-[15px] h-[50px] flex items-center justify-center font-medium rounded-[8px]"
                onChange={(e) => setSearchCity(e.target.value)}
                value={searchCity}
              >
                <option className="" value="" hidden>
                  City
                </option>
                <option className="" selected value="Gurgaon">
                  Gurgaon
                </option>
              </select>
              <div className="absolute top-4 sm1:top-[-3px] sm1:bottom-2  right-2  flex items-center pr-3 pointer-events-none   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path fillRule="evenodd" d="M10 13l6-6H4l6 6z" />
                </svg>
              </div>
            </div>
            <FilterPrice
              setPrice={onChangePriceRange}
              prices={prices}
              change={(e) => {
                setFieldValue("priceRange", e);
              }}
              setPrices={setPrices}
            />
            <button
              onClick={() => {
                handleSubmit();

                // router.push(`/search-properties`);
              }}
              className=" sm1:hidden w-[100px] bg-[#006d77] text-[#fff] rounded-[8px] f1 cursor-pointer ml-[15px]  h-[50px] flex items-center justify-center font-medium"
            >
              Search
            </button>
          </div>
          <div className="bg-[#fff] pt-[10px] f1 text-center text-[30px] md:text-[24px]">
            {propertiesLength} Matches Found
          </div>
          <div className="">
            <div className="">
              <div
                style={{
                  borderTop: "1px solid #ccc",
                  borderBottom: "1px solid #ccc",
                  whiteSpace: "nowrap",
                  maxWidth: "100vw",
                }}
                className="w-full  md:py-0 lg:py-2 xl:py-2 2xl:py-2  md:border-t-[#000] border-t-[1px] items-center
        mb-[40px] md:mb-0  bg-[#f4f4f4] lg:justify-center md:justify-start font-bold px-[20px] flex md:overflow-x-scroll  "
              >
                <DropDown
                  classid={0}
                  insideElement={insideElement}
                  setInsideElement={setInsideElement}
                  id={6}
                  curr={curr}
                  changed={(e) => {
                    setCurr(e);
                  }}
                  check={true}
                  current={6}
                  title={"Floors"}
                  submit={handleSubmit}
                  selectedDrop={selectedDrop}
                  dropdown={
                    <div
                      style={{
                        zIndex: 999999,
                        border: "1px solid #ccc",
                      }}
                      className="cursor-default   drop-shadow-2xl md:w-[100vw] md:px-0 md:px-[30px] flex justify-center lg:left-0 md:top-[247px] sm1:top-[300px] md:left-0 top-[38px] py-[10px] px-[10px] rounded-[3px] absolute w-[250px] min-h-[80px] bg-[#fff]"
                    >
                      <MultiSelect
                        setPageNumber={setPageNumber}
                        val={multiData.floors}
                        locations={[
                          { value: "1st Floor", label: "First Floor" },
                          { value: "2nd Floor", label: "Second Floor" },
                          { value: "3rd Floor", label: "Third Floor" },
                          { value: "4th Floor", label: "Fourth Floor" },
                          {
                            value: "firstBasement",
                            label: "Basement + First Floor",
                          },
                        ]}
                        setLocalData={(e) => {
                          setMultiData({ ...multiData, floors: e });
                        }}
                        setData={(e) => {
                          setFieldValue("floors", e);
                        }}
                        setSelectedDrop={setSelectedDrop}
                        id={6}
                      />
                    </div>
                  }
                />
                <DropDown
                  classid={1}
                  insideElement={insideElement}
                  setInsideElement={setInsideElement}
                  id={2}
                  curr={curr}
                  submit={handleSubmit}
                  changed={(e) => {
                    setCurr(e);
                  }}
                  check={true}
                  current={2}
                  title={"Location"}
                  selectedDrop={selectedDrop}
                  dropdown={
                    <div
                      style={{
                        zIndex: 999999,
                        border: "1px solid #ccc",
                      }}
                      className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-0 md:px-[30px] flex justify-center lg:left-0 md:top-[247px] sm1:top-[300px] md:left-0 top-[38px] py-[10px] px-[0px] rounded-[3px] absolute w-[250px] min-h-[80px] bg-[#fff]"
                    >
                      <MultiSelectLocation
                        setPageNumber={setPageNumber}
                        val={multiData.localtions}
                        setSelectedDrop={setSelectedDrop}
                        Locations={locations}
                        setLocalData={(e) => {
                          setMultiData({ ...multiData, localtions: e });
                        }}
                        setData={(e) => {
                          setFieldValue("locations", e);
                        }}
                        id={2}
                      />
                    </div>
                  }
                  selectedVal={selectedVal}
                />
                <DropDown1
                  classid={2}
                  insideElement={insideElement}
                  setInsideElement={setInsideElement}
                  id={1}
                  curr={curr}
                  submit={handleSubmit}
                  check={true}
                  changed={(e) => {
                    setCurr(e);
                  }}
                  current={1}
                  title={"Size"}
                  selectedDrop={selectedDrop}
                  dropdown={
                    <FilterSize
                      setPageNumber={setPageNumber}
                      initvalues={val}
                      setVal={setVal}
                      values={[0, 10]}
                      setSize={(sizes) => {
                        setFieldValue("sizeRange", sizes);
                      }}
                      setSelectedDrop={setSelectedDrop}
                      id={1}
                    />
                  }
                />

                <DropDown
                  classid={3}
                  insideElement={insideElement}
                  setInsideElement={setInsideElement}
                  id={5}
                  curr={curr}
                  submit={handleSubmit}
                  changed={(e) => {
                    setCurr(e);
                  }}
                  check={true}
                  current={5}
                  title={"Accomodation"}
                  selectedDrop={selectedDrop}
                  dropdown={
                    <div
                      style={{
                        zIndex: 999999,
                        border: "1px solid #ccc",
                      }}
                      className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-0 md:px-[30px] flex justify-center lg:left-0 md:top-[247px] sm1:top-[300px] md:left-0 top-[38px] py-[10px] px-[10px] rounded-[3px] absolute w-[200px] min-h-[80px] bg-[#fff]"
                    >
                      <MultiSelect
                        setPageNumber={setPageNumber}
                        val={multiData.accommodation}
                        locations={[
                          { value: "2 BHK", label: "2 BHK" },
                          { value: "3 BHK", label: "3 BHK" },
                          { value: "4 BHK", label: "4 BHK" },
                          { value: "5 BHK", label: "5 BHK" },
                          {
                            value: "6 BHK",
                            label: "6 BHK",
                          },
                        ]}
                        setLocalData={(e) => {
                          setMultiData({ ...multiData, accommodation: e });
                        }}
                        setData={(e) => {
                          setFieldValue("accommodation", e);
                        }}
                        setSelectedDrop={setSelectedDrop}
                        id={5}
                      />
                    </div>
                  }
                />
                <DropDown
                  classid={4}
                  insideElement={insideElement}
                  setInsideElement={setInsideElement}
                  id={7}
                  curr={curr}
                  submit={handleSubmit}
                  changed={(e) => {
                    setCurr(e);
                  }}
                  check={true}
                  current={7}
                  title={"Possession"}
                  selectedDrop={selectedDrop}
                  dropdown={
                    <div
                      style={{
                        zIndex: 999999,
                        border: "1px solid #ccc",
                      }}
                      className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-0 md:px-[30px] flex justify-center lg:left-0 md:top-[247px] sm1:top-[300px] md:left-0 top-[38px] py-[10px] px-[10px] rounded-[3px] absolute w-[200px] min-h-[80px] bg-[#fff]"
                    >
                      <MultiSelect
                        setPageNumber={setPageNumber}
                        val={multiData.possession}
                        locations={[
                          { value: "READY", label: "Ready" },
                          { value: "1M", label: "1 Months" },
                          { value: "3M", label: "3 Months" },
                          { value: "6M", label: "6 Months" },
                          { value: "9M", label: "9 Months" },
                          {
                            value: "12M",
                            label: "12 Months",
                          },
                        ]}
                        setLocalData={(e) => {
                          setMultiData({ ...multiData, possession: e });
                        }}
                        setData={(e) => {
                          setFieldValue("possession", e);
                        }}
                        setSelectedDrop={setSelectedDrop}
                        id={7}
                      />
                    </div>
                  }
                />
                <DropDown
                  classid={5}
                  insideElement={insideElement}
                  setInsideElement={setInsideElement}
                  id={3}
                  curr={curr}
                  changed={(e) => {
                    setCurr(e);
                  }}
                  submit={handleSubmit}
                  check={true}
                  current={3}
                  title={"Facing"}
                  selectedDrop={selectedDrop}
                  dropdown={
                    <>
                      <div
                        style={{
                          zIndex: 999999,
                          border: "1px solid #ccc",
                        }}
                        className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-0 md:px-[30px] flex justify-center lg:left-0 md:top-[247px] sm1:top-[300px] md:left-0 top-[38px] py-[10px] px-[0px] rounded-[3px] absolute w-[200px] min-h-[80px] bg-[#fff]"
                      >
                        <MultiSelect
                          setPageNumber={setPageNumber}
                          val={multiData.facing}
                          locations={[
                            { value: "NORTH", label: "North" },
                            { value: "SOUTH", label: "South" },
                            { value: "EAST", label: "East" },
                            { value: "WEST", label: "West" },
                            { value: "NORTHEAST", label: "North-East" },
                            { value: "NORTHWEST", label: "North-West" },
                            { value: "SOUTHEAST", label: "South-East" },
                            { value: "SOUTHWEST", label: "South-West" },
                          ]}
                          setLocalData={(e) => {
                            setMultiData({ ...multiData, facing: e });
                          }}
                          setData={(e) => {
                            setFieldValue("facing", e);
                          }}
                          setSelectedDrop={setSelectedDrop}
                          id={3}
                        />
                      </div>
                    </>
                  }
                />
                {/* <DropDown
            classid={}
             insideElement={insideElement}
              setInsideElement={setInsideElement}
              id={4}
              curr={curr}
              changed={(e) => {
                setCurr(e);
              }}
              submit={handleSubmit}
              current={4}
              title={"position"}
              check={true}
              selectedDrop={selectedDrop}
              dropdown={
                <div
                  className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-[30px] lg:left-0 md:top-[247px] sm1:top-[300px] md:left-0 top-[38px] py-[10px] px-[10px] rounded-[3px] absolute w-[330px]  bg-[#fff]"
                  style={{
                    zIndex: 9999999999,
                    border: "1px solid #000",
                  }}
                >

                  <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
                    Position
                  </div>
                  <CheckOptions2
                    setValue={(e) => {
                      setFieldValue("positions", e);
                      handleSubmit();
                    }}
                    selected={selected}
                    setSelected={setSelected}
                    setSelectedDrop={setSelectedDrop}
                  />
                </div>
              }
            /> */}

                <button
                  onClick={() => {
                    const val = getFieldProps("positions").value;
                    const result = ["parkFacing"];
                    const nono = [];
                    for (let i = 0; i < val.length; i++) {
                      if (val[i] === "corner") {
                        result.push("corner");
                        nono.push("corner");
                        break;
                      }
                    }
                    setFieldValue("positions", park ? nono : result);
                    setPark((prev) => !prev);
                    handleSubmit();
                  }}
                  className={`text-[16px] rounded-[8px] xs:text-[12px] h-[40px] md:mr-[10px] md:px-5 md:rounded-[40px] md:justify-center md:px-[40px] lg:mr-[10px] border-[#CDCDCD] md:my-[10px] bg-[#fff] lg:relative flex items-center duration-10 cursor-pointer px-[20px] rounded-sm border-[1px] ${
                    park ? "bg-[#006D77] text-[#fff]" : ""
                  }`}
                >
                  Park
                </button>
                <button
                  onClick={() => {
                    const val = getFieldProps("positions").value;
                    const result = ["corner"];
                    const nono = [];
                    for (let i = 0; i < val.length; i++) {
                      if (val[i] === "parkFacing") {
                        result.push("parkFacing");
                        nono.push("parkFacing");
                        break;
                      }
                    }
                    setFieldValue("positions", corner ? nono : result);
                    setCorner((prev) => !prev);
                    handleSubmit();
                  }}
                  className={`text-[16px] rounded-[8px] xs:text-[12px] h-[40px] md:mr-[10px] md:px-5 md:rounded-[40px] md:justify-center md:px-[40px] lg:mr-[10px] border-[#CDCDCD] md:my-[10px] bg-[#fff] lg:relative flex items-center duration-10 cursor-pointer px-[20px] rounded-sm border-[1px] ${
                    corner ? "bg-[#006D77] text-[#fff]" : ""
                  }`}
                >
                  Corner
                </button>

                {/* <button onClick={() => { (e) => setFieldValue("positions", park ? ['parkFacing'] : []); setPark(prev => !prev); handleSubmit() }} className={` text-[16px] xs:text-[12px] h-[40px] md:mr-[10px] md:px-5 md:rounded-[40px] md:justify-center md:px-[40px] lg:mr-[10px]  border-[#CDCDCD]  md:my-[10px] bg-[#fff] lg:relative flex items-center duration-10 cursor-pointer  px-[20px] rounded-sm border-[1px] ${park ? "bg-[#006D77] text-[#fff]" : ""} `} >Park</button>
            <button onClick={() => { (e) => setFieldValue("positions", e); setCorner(prev => !prev); handleSubmit() }} className={` text-[16px] xs:text-[12px] h-[40px] md:mr-[10px] md:px-5 md:rounded-[40px] md:justify-center md:px-[40px] lg:mr-[10px]  border-[#CDCDCD]  md:my-[10px] bg-[#fff] lg:relative flex items-center duration-10 cursor-pointer  px-[20px] rounded-sm border-[1px] ${corner ? "bg-[#006D77] text-[#fff]" : ""}  `} >Corner</button> */}
                <button
                  onClick={() => {
                    setFieldValue("categories", []);
                    setFieldValue("cities", []);
                    setFieldValue("locations", []);
                    setFieldValue("facing", []);
                    setFieldValue("positions", []);
                    setFieldValue("floors", []);
                    setFieldValue("possession", []);
                    setFieldValue("accommodation", []);
                    setFieldValue("priceRange", pprraa);
                    setFieldValue("sizeRange", [180, 360]);
                    setFieldValue("sort", null);
                    setPrices(pprraa);
                    reset();
                    handleSubmit();
                  }}
                  className={` text-[16px] xs:text-[12px] h-[40px] md:mr-[10px] md:px-5 md:rounded-[40px] md:justify-center md:px-[40px] lg:mr-[10px]  border-[#CDCDCD]  md:my-[10px] bg-[#fff] lg:relative flex items-center duration-10 cursor-pointer  px-[20px] rounded-sm border-[1px] bg-[#006D77] text-[#fff] rounded-[8px]   `}
                >
                  Reset
                </button>

                <DropDown
                  classid={6}
                  insideElement={insideElement}
                  setInsideElement={setInsideElement}
                  id={4}
                  curr={curr}
                  changed={(e) => {
                    setCurr(e);
                  }}
                  submit={handleSubmit}
                  check={true}
                  current={4}
                  title={"Sort By"}
                  selectedDrop={selectedDrop}
                  dropdown={
                    <>
                      <div
                        style={{
                          zIndex: 999999,
                          border: "1px solid #ccc",
                        }}
                        className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-0 md:px-[30px] flex justify-center lg:left-0 md:top-[247px] sm1:top-[300px] md:left-0 top-[38px] py-[10px] px-[0px] rounded-[3px] absolute w-[300px] min-h-[80px] bg-[#fff]"
                      >
                        <MuiSelect
                          setPageNumber={setPageNumber}
                          val={multiData.sort}
                          aa={getFieldProps("sort").value}
                          sset={(e) => setFieldValue("sort", e)}
                          locations={[
                            {
                              value: -1,
                              label: "Price High to Low",
                            },
                            {
                              value: 1,
                              label: "Price Low to High",
                            },
                          ]}
                          setLocalData={(e) => {
                            setMultiData({ ...multiData, sort: e });
                          }}
                          setData={(e) => {
                            setFieldValue("sort", e);
                          }}
                          setSelectedDrop={setSelectedDrop}
                          id={4}
                        />
                      </div>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default FilterContainer;
