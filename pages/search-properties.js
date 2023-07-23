/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../util/shopData";

import { BsHouse } from "react-icons/bs";
import { MdApartment, MdFavoriteBorder } from "react-icons/md";

import Layout from "../components/layout/Layout";

import FilterLocations from "../components/searchProperties/FilterLocations";
import CustomizedHook from "../components/elements/Autocomplete";

import FilterProperties from "../components/searchProperties/sections/FilterProperties";
import PopularProperties from "../components/searchProperties/sections/TopProperties";

import { parseCookies } from "../helpers/CookieParser";
import { getCapitalizeWords } from "../helpers/CamelCaseToCapitalizeWords";
import { priceRange } from "../components/searchProperties/components/FilterPrice";
import Viewer from "../components/360Viewer/Viewer360";
import FilterContainer from "../components/filter";
import useWidth from "../hooks/useWidth";
import { useRouter } from "next/router";
import { Pagination, Rating } from "@mui/material";
import { useCallback } from "react";
import FilterPrice from "../components/searchProperties/components/FilterPrice";
import CustomPagination from "../components/pagination/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../services/scroll";
import Preloader from "../components/elements/Preloader";

const EachProperty = ({
  topTitle,
  subTitle,
  src,
  propertyTitle,
  setShow,
  propertyDesc,
  price,
  accommodation,
  size,
  floor,
  href,
  sectorNumber,
  propertyRooms,
  facing,
  possession,
  imageType,
  id,
  setLoading,
}) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set the mobile breakpoint as per your requirement
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prooppertyTitle = propertyTitle.replace(/\s+/g, "-");
  const hreff = "/" + prooppertyTitle + "-" + id;
  console.log(prooppertyTitle, hreff);

  return (
    <>
      {!isMobile && (
        <div className="rounded-lg w-[100%] bg-[#F5F5F5] min-h-[250px] lg:h-[260px] mb-[10px] flex-col flex border border-2 border-solid border-[#000]   drop-shadow-xl relative">
          <div className=" flex w-full">
            <div className="w-[320px]  h-full relative">
              <img
                className=" min-w-[320px] md:w-[100%] lg:h-[258px] md:h-[30vh] md1:h-[41vh] cursor-pointer rounded-tl-lg rounded-bl-lg"
                src={src}
                alt=""
                onClick={() => {
                  console.log(href, "please have a look at it");
                  localStorage.setItem("backUrl", href);
                  setLoading(true);
                  router.push(hreff);
                  // router.push({
                  //   pathname: hreff,
                  //   query: { id:id,category: propertyTitle },
                  // });
                }}
              />
              {imageType && imageType === "360 DEGREE" && (
                <div className="absolute top-4 right-4  ">
                  <img
                    src="/assets/imgs/icons/360-degrees.png"
                    alt="360-degrees icon"
                    className="w-[35px] h-[35px]"
                  />
                </div>
              )}
            </div>
            <div className=" flex flex-col w-full ">
              <div className="pl-4 bg-[#d9d9d9] text-body-lead text-left border-b-2 border-solid border-[#777]  rounded-tr-lg flex py-2 justify-between align-center">
                <h4>{propertyTitle}</h4>
                <div className="flex pr-2 items-center ">
                  <div className="px-2 ">
                    <div
                      onClick={() => {
                        let images = "";
                        console.log("");
                        setShow({
                          show: true,
                          url: hreff,
                        });
                      }}
                      className=" cursor-pointer w-10 h-10 rounded-full  border-1 border-solid border-[#000] flex items-center justify-center bg-[#949494]"
                    >
                      <img
                        src="/assets/imgs/icons/share.png"
                        alt="share"
                        className="w-6 h-6 "
                      />
                    </div>
                  </div>
                  <div className="px-2 ">
                    <div className="w-10 h-10 rounded-full border-1 border-solid border-[#000] flex items-center justify-center  bg-[#949494]">
                      <img
                        src="/assets/imgs/icons/heart.png"
                        alt="like"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex mt-[20px] justify-around flex-wrap w-[85%] items-center">
                  <div className="w-full sm:w-auto pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/location.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <h5 className="pl-2"> {sectorNumber}</h5>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/area.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <h5 className="pl-2"> {size} Sq. Yd.</h5>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/home.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <h5 className="pl-2"> {propertyRooms}</h5>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/check.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <h5 className="pl-2"> {possession} Possession</h5>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/stairs.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <h5 className="pl-2"> {floor}</h5>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/compass.png"
                        alt=""
                        className="w-6 h-6"
                      />
                      <h5 className="pl-2"> {facing}</h5>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col justify-evenly items-center ">
                  <div className="pt-3 ">
                    <button
                      type=""
                      className="bg-[#006D77] w-[100%] sm:w-[90%] sm:pl-2 sm:pr-1  px-4 py-2 rounded-lg text-[#fff] whitespace-nowrap"
                    >
                      {price}
                    </button>
                  </div>
                  <div className="lg:hidden md:hidden  sm:block xs:block pb-4 whitespace-nowrap pr-2">
                    <span
                      onClick={() => {
                        console.log(href, "please have a look at it");
                        localStorage.setItem("backUrl", href);
                        setLoading(true);
                        // router.push(href);
                        router.push(hreff);
                      }}
                      className="text-bold cursor-pointer text-[#666]"
                      style={{
                        borderBottom: "1px solid #555",
                      }}
                    >
                      View Details
                    </span>
                    &gt;&gt;
                  </div>
                  <div className=" md:block lg:block  sm:hidden  whitespace-nowrap pr-2">
                    <span
                      onClick={() => {
                        console.log(href, "please have a look at it");
                        localStorage.setItem("backUrl", href);
                        setLoading(true);
                        // router.push(href);
                        router.push(hreff);
                      }}
                      className="text-bold cursor-pointer text-[#666]"
                      style={{
                        borderBottom: "1px solid #555",
                      }}
                    >
                      View Details
                    </span>
                    &gt;&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="w-[100%] bg-[#F5F5F5] min-h-[250px] lg:h-[250px] mb-[10px] flex-col flex border border-2 border-solid border-[#000]   drop-shadow-xl ">
          <div
            style={{
              backgroundColor: "#d9d9d9",
            }}
            className="pl-4 text-body-lead text-[12px] text-left border-t-2 border-b-2 border-solid border-[#777] flex py-2 justify-between align-center"
          >
            <h4 className="">{propertyTitle}</h4>
            <div className="flex pr-2 items-center ">
              <div className="px-2">
                <div className="w-7 h-7 rounded-full  border-1 border-solid border-[#000] flex items-center justify-center">
                  <img
                    onClick={()=>{
                      setShow({
                        show: true,
                        url: hreff,
                      });
                    }}
                    src="/assets/imgs/icons/share.png"
                    alt="share"
                    className="w-4 h-4  cursor-pointer"
                  />
                </div>
              </div>
              <div className="px-2">
                <div className="w-7 h-7 rounded-full border-1 border-solid border-[#000] flex items-center justify-center">
                  <img
                    src="/assets/imgs/icons/heart.png"
                    alt="like"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[full] h-[100%] relative">
            <img
              className=" w-[100%] h-[10%] cursor-pointer"
              src={src}
              alt=""
              onClick={() => {
                localStorage.setItem("backUrl", href);
                setLoading(true);
                router.push(hreff);
              }}
            />
            {imageType && imageType === "360 DEGREE" && (
              <div className="absolute top-4 right-4  ">
                <img
                  src="/assets/imgs/icons/360-degrees.png"
                  alt="360-degrees icon"
                  className="w-[35px] h-[35px]"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 mt-20 justify-items-start xs:px-0 sm1:px-20 sm:px-[120px] items-center ">
            <div>
              <div className="flex items-center pl-4">
                <img
                  src="/assets/imgs/icons/location.png"
                  alt=""
                  className="w-6 h-6"
                />
                <h5 className="pl-2 ml-2 xs:text-[12px]">{sectorNumber}</h5>
              </div>
            </div>
            <div>
              <div className="flex items-center pl-4">
                <img
                  src="/assets/imgs/icons/area.png"
                  alt=""
                  className="w-6 h-6"
                />
                <h5 className="pl-2 ml-2 xs:text-[12px]">{size} Sq. Yd.</h5>
              </div>
            </div>
            <div>
              <div className="flex items-center pl-4">
                <img
                  src="/assets/imgs/icons/home.png"
                  alt=""
                  className="w-6 h-6"
                />
                <h5 className="pl-2 ml-2 xs:text-[12px]">{propertyRooms}</h5>
              </div>
            </div>
            <div>
              <div className="flex items-center pl-4">
                <img
                  src={
                    possession === "READY"
                      ? "/assets/imgs/icons/check.png"
                      : "/assets/imgs/icons/construction.png"
                  }
                  alt=""
                  className="w-6 h-6"
                />
                <h5 className="pl-2 ml-2 xs:text-[12px] text-start ml-2">
                  {possession} Possession
                </h5>
              </div>
            </div>
            <div>
              <div className="flex items-center pl-4">
                <img
                  src="/assets/imgs/icons/stairs.png"
                  alt=""
                  className="w-6 h-6"
                />
                <h5 className="pl-2 ml-2 xs:text-[12px]">{floor}</h5>
              </div>
            </div>
            <div>
              <div className="flex items-center pl-4">
                <img
                  src="/assets/imgs/icons/compass.png"
                  alt=""
                  className="w-6 h-6"
                />
                <h5 className="pl-2 ml-2 xs:text-[12px]">{facing}</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-4 py-4">
            <div className=" ">
              <button
                type=""
                className="bg-[#006D77] px-3 py-2 rounded-lg text-[#fff]"
              >
                {price}
              </button>
            </div>

            <div className=" whitespace-nowrap pr-2">
              <span
                onClick={() => {
                  localStorage.setItem("backUrl", href);
                  setLoading(true);
                  // router.push(href);
                  router.push(hreff);
                }}
                className="cursor-pointer text-bold text-[#666]"
                style={{
                  borderBottom: "1px solid #555",
                }}
              >
                View Details
              </span>
              &gt;&gt;
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ShareContainer = ({ setShow, url, image }) => {
  const [copiied, setCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a temporary textarea element to hold the text to be copied
    const textarea = document.createElement("textarea");
    textarea.value = "https://www.builderfloor.com/" + url;

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea from the DOM
    document.body.removeChild(textarea);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className="w-[100%] h-[100vh] fixed px-[5px] bg-[#00000060] flex items-center justify-center"
      style={{ zIndex: 10000000000 }}
    >
      <div className="relative md:w-[100%] px-[50px] md:px-[5px]  py-[20px] flex items-center pt-[30px] justify-center flex-col f1 bg-[#fff] rounded-sm  w-[700px] min-h-[100px]">
        <img
          onClick={() => {
            setShow({ show: false, url: "" });
          }}
          alt=""
          src="/close.svg"
          className="absolute cursor-pointer top-[10px] right-[10px] w-[22px]"
        />
        <iframe
          // src={`https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${images[curr]}&autoLoad=true&autoRotate=-2&hfov=200`}
          // src={`https://builder-floor-images.vercel.app/uploads/${images[curr]}`}
          src={
            // deviceCheck
            //   ? `https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${images[curr]}&autoLoad=true&autoRotate=-2&hfov=200`
            `https://fascinating-queijadas-53a09a.netlify.app/?image=${
              image + "?not-from-cache-please"
            }`
          }
          className="w-[100%] mb-[20px] md:h-[280px] h-[400px]"
          frameBorder="0"
        ></iframe>
        <p
          onClick={() => {
            window.open(
              `https://wa.me/8804504504?text=Hi! I saw a property ${"https://www.builderfloor.com/" +url} on BuilderFloor.com and i am interested in it. Is it available?`,
              "_blank"
            );
          }}
          className="underline text-green font-medium mb-[10px] cursor-pointer"
        >
          Share to Whatsapp
        </p>
        <div
          style={{
            backgroundColor: copiied ? "#fff" : "#000",
            color: !copiied ? "#fff" : "#000",
            border: !copiied ? "#" : "2px solid #000",
          }}
          onClick={() => {
            handleCopyClick();
          }}
          className="w-[100%] duration-0 rounded-sm cursor-pointer flex items-center justify-center text-center font-medium h-[40px] bg-[#000] text-[#fff]"
        >
          {copiied ? "Copied to clipboard" : "Copy Url"}
        </div>
      </div>
    </div>
  );
};

function ShopGrid2(props) {
  const [total, setTotal] = useState(10);
  const router = useRouter();
  const [defaultProperties, setDefaultProperties] = useState(props?.properties);
  const [properties, setProperties] = useState(props.properties);
  const [propertiesLength, setPropertiesLength] = useState(
    props.properties.length
  );
  const [locations, setLocations] = useState(props.locations);
  const [values, setValues] = useState(props.values);
  const [priceRange, setPriceRange] = useState();
  const [view360, set360] = useState(false);
  const [url, setUrl] = useState("./assets/imgs/textures/one-1.jpeg");
  const [searchCity, setSearchCity] = useState("City");
  const [loading, setLoading] = useState(false);
  const [paginationData, setPaginationData] = useState([]);
  const [prices, setPrices] = useState(props?.values?.priceRange);

  const closeHandler = () => {
    set360(false);
  };

  useEffect(() => {
    setTotal(properties.length);
  });
  // useEffect(() => {
  //   setProperties(props.properties.length)
  // }, [])

  function replaceEmptyWithPercentageURL(string) {
    const parts = string.split(" ");
    const nonEmptyParts = parts.filter((part) => part !== "");
    const numEmptyParts = parts.length - nonEmptyParts.length;
    const emptyPercentage = (numEmptyParts / parts.length) * 100;

    const newParts = parts.map((part) =>
      part !== "" ? part : encodeURIComponent("%")
    );
    const outputString = newParts.join(" ");
    return { outputString, emptyPercentage };
  }

  function replaceEmptyWithPercentage(string) {
    const parts = string.split(" ");
    const nonEmptyParts = parts.filter((part) => part !== "");
    const numEmptyParts = parts.length - nonEmptyParts.length;
    const emptyPercentage = (numEmptyParts / parts.length) * 100;

    const newParts = nonEmptyParts
      .map((part) => encodeURIComponent(part))
      .join("%");
    return { newParts, emptyPercentage };
  }

  const checFnc = (str) => {
    if (str[0] === " ") {
      return str.slice(1);
    } else {
      return str;
    }
  };

  function endsWithDesktopIni(str) {
    return str.endsWith("desktop.ini");
  }

  const width = useWidth();

  const [pageNumber, setPageNumber] = useState(props.pageNumber);

  useEffect(() => {
    const newProperties = props.properties;
    paginationData.length > 0
      ? setProperties(
          paginationData.slice(
            (pageNumber - 1) * 10,
            (pageNumber - 1) * 10 + 10
          )
        )
      : setProperties(
          newProperties.slice((pageNumber - 1) * 10, (pageNumber - 1) * 10 + 10)
        );
  }, [pageNumber]);

  const state = useSelector((state) => state.scroll.filters);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    const ff = JSON.parse(localStorage.getItem("filter"))
      ? JSON.parse(localStorage.getItem("filter"))
      : state;
    const str = JSON.stringify({ ...ff, pageNumber: page });
    console.log(str);
    localStorage.setItem("filter", str);
    dispatch(setFilters({ ...ff, pageNumber: page }));
    setPageNumber(page);
  };

  useEffect(() => {
    setDefaultProperties(props?.properties);
    setProperties(props.properties);
    setPropertiesLength(props.properties.length);
    setLocations(props.locations);
    setValues(props.values);
    console.log("props have been changed", props);
  }, [props]);

  const [pricy, setPricy] = useState(priceRange);

  const [share, setShare] = useState({
    show: false,
    url: "",
    image: "",
  });

  return (
    <>
      {loading && <Preloader />}
      {share.show && (
        <ShareContainer
          url={share.url}
          setShow={setShare}
          image={share.image}
        />
      )}
      <Layout>
        {view360 && <Viewer close={closeHandler} curr={0} images={url} />}

        {/* <div className="flex justify-between px-4 ">
          <div className="relative">
            <select
              className=" hidden sm1:block   bg-[#006d77] text-[#fff] appearance-none f1 px-4 cursor-pointer mr-[15px] h-[50px] flex items-center justify-center font-medium rounded-[8px]"
              onChange={(e) => setSearchCity(e.target.value)}
              value={searchCity}
            >
              <option className="" value="" hidden>
                City
              </option>
              <option className="" value="Gurgaon">
                Gurgaon
              </option>
            </select>
            <div className="absolute top-2 bottom-2 right-3  flex items-center pr-3 pointer-events-none   ">
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
          <div>
            <button
              onClick={() => {
                setLoading(true);
                let propertyFilter = {
                  accommodation: [],
                  categories: [],
                  cities: [],
                  facing: [],
                  floors: [],
                  locations: [],
                  positions: [],
                  possession: [],
                  priceRange: priceRange,
                  sizeRange: [],
                };

                // router.push(
                //   `/search-properties?filter=${JSON.stringify(propertyFilter)}`
                // );
              }}
              className=" hidden sm1:block w-[100px] bg-[#006d77] text-[#fff] rounded-[8px] f1 cursor-pointer ml-[15px]  h-[50px] flex items-center justify-center font-medium"
            >
              Search
            </button>
          </div>
        </div> */}

        {/* <div className="mt-[10px] f1 text-center text-[30px] md:text-[24px]">
          {propertiesLength} Matches Found
        </div> */}
        <div className="text-center bg-[#f4f4f4]">
          <FilterContainer
            values={values}
            setProperties={setProperties}
            locations={locations}
            priceRange={priceRange}
            pageNumber={pageNumber}
            defaultProperties={defaultProperties}
            setPropertiesLength={setPropertiesLength}
            propertiesLength={propertiesLength}
            setPageNumber={(e) => {
              const ff = JSON.parse(localStorage.getItem("filter"))
                ? JSON.parse(localStorage.getItem("filter"))
                : state;
              const str = JSON.stringify({ ...ff, pageNumber: pageNumber });
              console.log(str);
              localStorage.setItem("filter", str);
              dispatch(setFilters({ ...ff, pageNumber: pageNumber }));
              setPageNumber(e);
            }}
            setPaginationData={setPaginationData}
            pprraa={props?.values?.priceRange}
          />
          <div className=" md:px-[5px] ">
            <div className="w-[100%] flex flex-col ">
              <div className="w-[100%] md:mx-auto lg:px-[100px]">
                {properties.length === 0 && (
                  <div className="w-[100%] h-[500px] flex text-[30px] md:text-[20px] tracking-wide font-medium items-center justify-center">
                    Sorry, No Properties match your requirement
                  </div>
                )}
                {properties?.map((item, i) => {
                  if (item.images.length === 0) {
                  }

                  if (i > 9) {
                    return <React.Fragment key={i}></React.Fragment>;
                  }
                  return (
                    <EachProperty
                      key={i}
                      topTitle="Fulbrix"
                      setLoading={setLoading}
                      subTitle={`${""}
                    ${item.sectorNumber}
                   ${getCapitalizeWords(item.city)}, ${getCapitalizeWords(
                        item.state
                      )}`}
                      setShow={(e) => {
                        console.log(item);
                        let image = "";
                        if (item.images.length > 0) {
                          image = item.images[0];
                        } else {
                          image = item.normalImages[0];
                        }
                        setShare({ ...e, image: image });
                      }}
                      propertyRooms={item.accommodation}
                      // src={`https://testerp1apis.nextsolutions.in/${item.thumbnails[0]}`}
                      src={item.thumbnails[0]}
                      propertyTitle={`${item.detailTitle}`}
                      propertyDesc={item.title ? item.title : "-"}
                      price={`₹
                                ${parseFloat(item.price)
                                  .toExponential()
                                  .toString()
                                  .split("e")[0]
                                  .slice(0, 4)}
                                Cr.`}
                      accommodation={item.accommodation[0]}
                      floor={getCapitalizeWords(item.floor)}
                      size={item.size}
                      facing={item.facing}
                      sectorNumber={item.sectorNumber}
                      possession={item.possession}
                      // href={`/shop/${item._id}`}
                      href={`/shop`}
                      id={item._id}
                      imageType={item.imageType}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container"></div>
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
        {/* <div className="flex w-[100%] px-[5%] md:px-[1%] justify-end">
          <div
            onClick={() => {
              if (pageNumber !== 0) {
                setPageNumber(pageNumber - 1);
              }
            }}
            style={{
              backgroundColor: pageNumber === 0 ? "#ccc" : "#006d77",
            }}
            className=" cursor-pointer w-[100px] flex items-center mr-[20px] justify-center h-[50px] rounded-[5px] text-[#fff] font-bold f1 "
          >
            Prev
          </div>
          <div
            onClick={() => {

              if (pageNumber !== props.total) {
                setPageNumber(pageNumber + 1);
              }
            }}
            style={{
              backgroundColor: pageNumber === props.total ? "#ccc" : "#006d77",
            }}
            className="cursor-pointer w-[100px] flex items-center justify-center h-[50px] rounded-[5px] text-[#fff] font-bold f1 "
          >
            Next
          </div>
        </div> */}
        <CustomPagination
          totalItems={propertiesLength}
          itemsPerPage={10}
          currentPage={pageNumber}
          onPageChange={handlePageChange}
        />
      </Layout>
    </>
  );
}

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

export async function getServerSideProps({ req, res, query }) {
  const data = {
    property_filters: query.filter,
  };

  let filters;
  let filterValues = {
    categories: [],
    cities: [],
    locations: [],
    facing: [],
    positions: [],
    floors: [],
    possession: [],
    accommodation: [],
    priceRange: [],
    sizeRange: [],
    pageNumber: 1,
  };
  if (data?.property_filters) {
    filterValues = JSON.parse(data?.property_filters);
  }
  if (data?.property_filters) {
    filters = {
      ...(filterValues.cities?.length > 0 && {
        city: { $in: filterValues.cities },
      }),
      ...(filterValues.locations?.length > 0 && {
        sectorNumber: {
          $in: filterValues.locations.map(({ value }) => value),
        },
      }),
      ...(filterValues.possession?.length > 0 && {
        possession: { $in: generateArray(filterValues.possession) },
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
      ...(filterValues.positions.includes("parkFacing") > 0 && {
        parkFacing: { $eq: true },
      }),
      ...(filterValues.positions.includes("corner") > 0 && {
        corner: { $eq: true },
      }),
      ...(filterValues.priceRange?.[0] && {
        price: {
          $gte: filterValues.priceRange[0],
          // ...(filterValues.priceRange?.[1] !=
          //   priceRange[priceRange.length - 1] && {
          //   $lte: filterValues.priceRange?.[1],
          // }),
          $lte: filterValues.priceRange?.[1],
        },
      }),
      ...(filterValues.sizeRange?.[0] && {
        size: {
          $gte: filterValues.sizeRange?.[0],
          $lte: filterValues.sizeRange?.[1],
        },
      }),
    };
  }

  const response = await axios.post(
    "https://testerp1apis.nextsolutions.in/api/p24x7",
    {
      action: "list",
      module: "properties",
      filters,
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
      sort: filterValues.sort,
    }
  );

  const locationsResponse = await axios.post(
    "https://testerp1apis.nextsolutions.in/api/p24x7",
    {
      action: "auto",
      module: "properties",
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
    }
  );

  return {
    props: {
      properties: response.data ?? [],
      locations: locationsResponse.data.map((location) => ({
        value: location,
        label: location,
      })),
      total: response.data ? response.data.length : 0,
      values: filterValues,
      pageNumber: filterValues.pageNumber,
      filters: filters,
    }, // will be passed to the page component as props
  };
}

export default ShopGrid2;
