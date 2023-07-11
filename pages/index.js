/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// Components
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import FilterPrice from "../components/searchProperties/components/FilterPrice";
import { useState, useCallback } from "react";
import { useCookies } from "react-cookie";
import Preloader from "../components/elements/Preloader";
import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import useWidth from "../hooks/useWidth";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../services/scroll";
function Index8() {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["property_filters"]);
  const [loading, setLoading] = useState(false);
  const [searchCity, setSearchCity] = useState("Gurgaon");
  const [prices, setPrices] = useState([25000000, 35000000]);
  const onChangePriceRange = useCallback(
    (priceArr) => {
      setPriceRange([...priceArr]);
    },
    [priceRange]
  );

  const [newProperties, setProperties] = useState([]);
  const [check, setCheck] = useState(false);
  // console.log(newProperties);
  const propertiesFnc = async (e, i) => {
    const response = await axios.post(
      // "https://p24x7-server.herokuapp.com/api/p24x7",
      "https://testerp1apis.nextsolutions.in/api/p24x7",
      {
        action: "read",
        module: "properties",
        _id: e,
        apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
      }
    );
    // console.log(response.data);
    const pro = newProperties;
    pro[i] = response.data;
    if (i === 11) {
      setCheck(true);
    }
    setProperties(pro);
  };
  useEffect(() => {
    if (newProperties.length === 0) {
      propertiesFnc("649ebe8a33b8e5742e13b0ed", 0);
      propertiesFnc("649ebe8a33b8e5742e13b0ee", 1);
      propertiesFnc("649ebe8a33b8e5742e13b0ef", 2);
      propertiesFnc("649ebe8a33b8e5742e13b0f0", 3);
      propertiesFnc("649ebe8a33b8e5742e13b0f1", 4);
      propertiesFnc("649ebe8a33b8e5742e13b0f2", 5);
      propertiesFnc("649ebe8a33b8e5742e13b0f3", 6);
      propertiesFnc("649ebe8a33b8e5742e13b0f4", 7);
      propertiesFnc("649ebe8a33b8e5742e13b0f5", 8);
      propertiesFnc("649ebe8a33b8e5742e13b0f7", 9);
      propertiesFnc("649ebe8a33b8e5742e13b0f9", 10);
      propertiesFnc("649ebe8a33b8e5742e13b0f8", 11);
    }
  }, []);
  console.log(newProperties);

  const w = useWidth();
  const state = useSelector((state) => state.scroll.filters);
  const dispatch = useDispatch();

  return (
    <>
      {/* {console.log(newProperties)} */}
      {loading && <Preloader />}
      <Layout>
        <div className="section-box">
          <div className="banner-homepage8 ">
            <div className="h-[420px] overflow-hidden relative banner-mob banner-homepage8 banner-background">
              {/* banner-background"> */}
              <img
                src="/assets/imgs/textures/banner-builder.jpg"
                className="absolute left-0 w-[100%] h-[100%] object-cover top-0 z-10"
                alt=""
              />
              <div className="w-[100%] bg-[#00000060] h-[100%] relative z-20 ">
                <div className="flex items-center justify-center h-[100%] flex-col">
                  <div className="col-lg-9 text-right"></div>{" "}
                  <h1 className="text-display-4 text-display-mob font-bold mt-[20px] text-center color-white">
                    Start Exploring Your Dream <br></br>
                    <span className="color-gold">Builder Floor now</span>
                  </h1>
                  {/* <p className="text-body-lead-large text-body-lead-mob color-white font-bold mt-20 text-center">
                      Optimize your website for Google&lsquo;s first page
                      ranking to increase traffic and sales.
                    
                    </p> */}
                  {/* Get a website to be found on the first page of Google to
                    avoid missing out on potential visitors and sales. */}
                  {/* <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-imgs d-flex">
                    <div className="rounded-img shape-1">
                      <img
                        className="img-responsive"
                        alt="Builder Floor"
                        src="assets/imgs/page/homepage8/banner1.jpg"
                      />
                    </div>
                    <div className="rounded-img mt-20 shape-1-2">
                      <img
                        className="img-responsive"
                        alt="Builder Floor"
                        src="assets/imgs/page/homepage8/banner2.jpg"
                      />
                    </div>
                    <div className="rounded-img shape-1">
                      <img
                        className="img-responsive"
                        alt="Builder Floor"
                        src="assets/imgs/page/homepage8/banner3.jpg"
                      />
                    </div>
                  </div>
                </div> */}
                </div>
                {/* <div className="popular-search mt-100">
                <h2 className="text-heading-4">Popular Search</h2>
                <ul className="list-search-popular">
                  <li>
                    <Link href="#"><a className="btn btn-border">New York</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">London</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Estonia</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Phuket</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Paris</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Nethelands</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Lotus Temple</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Eiffel Tower</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">The Colosseum</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Rome</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Statue of Liberty</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Machu Picchu</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Bali, Indonesia</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Orleans</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Kerry, Ireland</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Marrakesh</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Morocco</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Central</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Tokyo</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Dubai</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Bora Bora</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Dubrovnik</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Edinburgh</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Paro Valley</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Jaipur, India</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Waikato</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">Havana</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">NY, USA</a></Link>
                    </li>
                  <li>
                    <Link href="#"><a className="btn btn-border">West</a></Link>
                    </li>
                </ul>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] bg-transparent form-center flex ">
          {/* <div className="w-[100px] bg-[#006d77] text-[#fff] rounded-sm f1 cursor-pointer mr-[15px] h-[50px] flex items-center justify-center font-medium">
            Gurgaon
          </div> */}
          <div className="relative">
            <select
              className=" sm1:hidden   bg-[#006d77] text-[#fff] appearance-none f1 px-4 cursor-pointer mr-[15px] h-[50px] flex items-center justify-center font-medium rounded-[8px]"
              onChange={(e) => setSearchCity(e.target.value)}
              value={searchCity}
            >
              <option className="" value="" hidden>
                City
              </option>
              <option className="" selected={true} value="Gurgaon">
                Gurgaon
              </option>
              {/* <option className="" value="Delhi">Delhi</option>
              <option className="" value="Mumbai">Mumbai</option> */}
              {/* Add more cities as needed */}
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
            change={() => {}}
            setPrices={setPrices}
          />
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
                sizeRange: [180,360],
                pageNumber: 1,
              };
              // const ff=JSON.parse(localStorage.getItem("filter"))?JSON.parse(localStorage.getItem("filter")):state;
              // // const ff=JSON.parse(localStorage.getItem("filter"))?JSON.parse(localStorage.getItem("filter")):state;
              // console.log(ff);
              
              // setCookie(
              //   "property_filters",
              //   JSON.stringify(propertyFilter)
              // );


           
              // console.log(realFilters)
              // // router.push(`/search-properties`);
              
              dispatch(setFilters(propertyFilter));
              
              router.push(
                `/search-properties?filter=${JSON.stringify(propertyFilter)}`
              );
              const str = JSON.stringify(propertyFilter);
              console.log(str);
              localStorage.setItem("filter",str);
            }}
            className=" sm1:hidden w-[100px] bg-[#006d77] text-[#fff] rounded-[8px] f1 cursor-pointer ml-[15px]  h-[50px] flex items-center justify-center font-medium"
          >
            Search
          </button>
        </div>

        <div className="flex justify-between px-4 ">
          <div className="relative">
            <select
              className=" hidden sm1:block   bg-[#006d77] text-[#fff] appearance-none f1 px-4 cursor-pointer mr-[15px] h-[50px] flex items-center justify-center font-medium rounded-[8px]"
              onChange={(e) => setSearchCity(e.target.value)}
              value={searchCity}
            >
              <option className="" value="" hidden>
                City
              </option>
              <option className="" selected={true} value="Gurgaon">
                Gurgaon
              </option>
              {/* <option className="" value="Delhi">Delhi</option>
              <option className="" value="Mumbai">Mumbai</option> */}
              {/* Add more cities as needed */}
            </select>
            <div className="absolute top-4  xs:top-2 sm1:top-2 sm1:bottom-2  right-3  flex items-center pr-3 pointer-events-none   ">
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


                // setCookie(
                //   "property_filters",
                //   JSON.stringify(propertyFilter)
                // );

                // router.push(`/search-properties`);

                router.push(
                  `/search-properties?filter=${JSON.stringify(propertyFilter)}`
                );
              }}
              className=" hidden sm1:block w-[100px] bg-[#006d77] text-[#fff] rounded-[8px] f1 cursor-pointer ml-[15px]  h-[50px] flex items-center justify-center font-medium"
            >
              Search
            </button>
          </div>
        </div>

        <div className="section-box mt-20 ">
          <div className="lg:container ">
            {/* <span className="tag-1 color-orange-900">Hot for this Summer</span> */}
            <h2 className="text-heading-2  color-gray-900 mt-30 pb-4 text-center ">
              Explore Top Builder Floor to Match Your Choice
            </h2>
            {/* <p className="text-body-lead-large color-gray-600 mt-20 text-center">
              We find the absolute best prices on plots &amp; flats
            </p> */}
          </div>
          <div className="w-[98%] mx-auto ">
            <div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-3.jpg" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*  <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-1"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Delhi
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>{" "}
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices"></div>
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>{" "}
                            |{" "}
                            <span className="price-regular mr-5">
                              $22.51 -{" "}
                            </span>{" "}
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-2"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Gurugram{" "}
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices"></div>
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>{" "}
                            |{" "}
                            <span className="price-regular mr-5">
                              $22.51 -{" "}
                            </span>
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-3"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Mumbai
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>{" "}
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices"></div>
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>{" "}
                            |<span className="price-regular mr-5">$22.51-</span>
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="card-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 justify-center mr-[10px] mb-[30px] check-width ">
                      <div className="card-image-2 img-4"></div>
                      <div>
                        <h3
                          className="text-body-lead color-gray-900 text-center"
                          style={{ lineHeight: "25px" }}
                        >
                          Kolkata{" "}
                        </h3>
                        <div className="d-flex mt-10 justify-center">
                          <div className="box-prices">
                            <span className="location-icon text-center">
                              Central Park West, USA
                            </span>
                          </div>
                        </div>
                        <div className="d-flex mb-20 justify-center">
                          <div className="box-prices">
                            <span className="calendar-icon">
                              3 days, 2 night
                            </span>
                            {"   "}|
                            <span className="price-regular mr-5">
                              $22.51 -{" "}
                            </span>
                            <span className="price-regular price-line">
                              $2.8
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link> */}

              {/* Old Style Start */}
              {/* hover:w-[290px] hover:h-[360px] */}
              {/* flex justify-center  md:flex-col items-center px-[10px] */}

              {/* <Link href="/shop/646c8fe1f277e7aab0151de8">
          <a>
            <div className="product-img relative" >
              <img
                className="object-cover h-[200px] hover:w-[100%] rounded-tl-lg rounded-tr-lg  "
                src={`https://testerp1apis.nextsolutions.in/uploads/A329A-SL1/IMG_20221010_155607_00_merged.jpg`}
                alt="Product Image"
              />
            </div>
            <div className="absolute">

              <img
                src="/assets/imgs/icons/360-degrees.png"
                alt="360-degrees icon"
                className="w-[25px] h-[25px] "
              />

            </div>
          </a>
        </Link> */}

              <div className="flex flex-wrap justify-center w-[100%] w-full px-[0px] md:gap-x-4">
                {check &&
                  newProperties.slice(0, 12).map((property, index) => {
                    return (
                      <div
                        key={index}
                        className=" h-[400px] md:mt-[70px] xs:w-[90%]  lg:shrink-0 xl:shrink-0 2xl:shrink-0 md:mr-0 mr-[20px] w-[280px]  hover:scale-[1.05] cursor-pointer flex items-center justify-center relative bg-white rounded-[4px] mt-[50px]"
                        style={{
                          border: "1px solid #cacaca",
                        }}
                      >
                        <div className="card-container absolute duration-100 xl:1/4 2xl:1/4 ">
                          <div data-wow-delay=".2s" style={{ height: "100%" }}>
                            <Link href={`/shop/${property?._id}`}>
                              <div className="relative">
                                <a>
                                  <div className="product-img">
                                    <img
                                      className="object-fit translate-y-[-10px] xs:w-full  mt-[-31px] h-[190px] w-[280px] hover:w-[100%] rounded-tl-[4px] rounded-tr-[4px]"
                                      src={
                                        property?.images?.length !== 0
                                          ? // ? `https://testerp1apis.nextsolutions.in/${property?.thumbnails?.[0]}`
                                            property?.thumbnails?.[0]
                                          : "https://testerp1apis.nextsolutions.in/uploads/A329A-SL1/IMG_20221010_155607_00_merged.jpg"
                                      }
                                      alt="Product Image"
                                    />
                                  </div>
                                  {/* {
                                    console.log(property.imageType)
                                  } */}
                                  {property && property?.images && (
                                    <div className="absolute top-3 right-4 ">
                                      <img
                                        src="/assets/imgs/icons/360-degrees.png"
                                        alt="360-degrees icon"
                                        className="w-[35px] h-[35px]"
                                      />
                                    </div>
                                  )}
                                </a>
                              </div>
                            </Link>
                            <div className="product-info px-2 pt-[10px] w-100">
                              <Link href={`/shop/${property?._id}`}>
                                <a>
                                  <h3
                                    className="text-body-lead color-gray-700  text-center"
                                    style={{ lineHeight: "25px" }}
                                  >
                                    {property?.title}
                                  </h3>
                                </a>
                              </Link>
                              <div className="d-flex mt-[0px]  justify-center pt-2 whitespace-normal px-2 ">
                                <div className="box-prices">
                                  <span className=" font-medium  ">
                                    {property?.sectorNumber}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="text-body-text icon-with-text property-info color-gray-500  px-2 flex justify-center">
                                  {/* <div
                                    className="flex"
                                    style={{ alignItems: "center" }}
                                  >
                                    <img
                                      className="propicon-2 mr-[8px] translate-y-[-1px]"
                                      src="/assets/imgs/page/homepage5/home.svg"
                                      alt="Builder Floor"
                                    />
                                    <span className="text-[13px]">
                                      {property?.accommodation}
                                    </span>
                                  </div>
                                  <div
                                    className="flex "
                                    style={{ alignItems: "center" }}
                                  >
                                    <img
                                      className="propicon-2 mr-[8px] translate-y-[-1px]"
                                      src="/assets/imgs/page/homepage5/floor.svg"
                                      alt="Builder Floor"
                                    />
                                    <span className="text-[13px]">
                                      {property?.floor}
                                    </span>
                                  </div>
                                  <div
                                    className="flex"
                                    style={{ alignItems: "center" }}
                                  >
                                    <img
                                      className="propicon-2 mr-[8px] translate-y-[-1px]"
                                      src="/assets/imgs/icons/area-svg.svg"
                                      alt="Builder Floor"
                                    />
                                    <span className="text-[13px]">
                                      {property?.size} Sq. Yd.
                                    </span>
                                  </div> */}

                                  <div className="flex items-center w-full ">
                                    <img
                                      className="propicon-2 mr-[8px] translate-y-[-1px]"
                                      src="/assets/imgs/icons/home.svg"
                                      alt="Builder Floor"
                                    />
                                    <span className="text-[13px]">
                                      {property?.accommodation}
                                    </span>
                                  </div>
                                  <div className="flex items-center w-full  ">
                                    <img
                                      className="propicon-2 mr-[8px] translate-y-[-1px]"
                                      src="/assets/imgs/page/homepage5/floor.svg"
                                      alt="Builder Floor"
                                    />
                                    <span className="text-[13px]">
                                      {property?.floor}
                                    </span>
                                  </div>
                                  <div className="flex items-center w-full ">
                                    <img
                                      className="propicon-2 mr-[8px] translate-y-[-1px]"
                                      src="/assets/imgs/icons/area-svg.svg"
                                      alt="Builder Floor"
                                    />
                                    <span className="text-[13px]">
                                      {property?.size} Sq.Yd.
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between px-2 items-center">
                                  <div>
                                    <Rating
                                      value={5}
                                      readOnly
                                      size="medium"
                                      style={{ marginTop: "15px" }}
                                    />
                                  </div>
                                  <div>
                                    <button
                                      type=""
                                      className="mt-1 px-3 py-2 font-medium bg-[#006D77] text-[#fff] rounded-lg"
                                    >{`₹
                               ${parseFloat(property?.price)
                                 .toExponential()
                                 .toString()
                                 .split("e")[0]
                                 .slice(0, 4)}
                               Cr.`}</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Old Style END */}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-7.png" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div
                  className="product-item-2 product-item-3 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img src="/assets/imgs/page/homepage8/img-8.png" />
                      </div>
                    </a>
                  </Link>

                  <div className="product-info">
                    <div className="rating">
                      <div className="box-rating">
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star-active.svg" />
                        </span>
                        <span>
                          <img src="/assets/imgs/page/homepage5/star.svg" />
                        </span>
                      </div>
                      <Link href="#">
                        <a className="text-semibold">(84 rates)</a>
                      </Link>
                    </div>
                    <Link href="#">
                      <a>
                        <h3 className="text-body-lead color-gray-900">
                          All Natural Italian-Style Chicken Meatballs
                        </h3>
                      </a>
                    </Link>

                    <div className="d-flex mt-20">
                      <div className="box-prices">
                        <span className="location-icon">
                          Central Park West, USA
                        </span>
                      </div>
                      <div className="box-prices">
                        <span className="calendar-icon">3 days, 2 night</span>
                      </div>
                    </div>
                    <div className="d-flex mt-30">
                      <div className="box-prices">
                        <span className="price-regular mr-5">$22.51</span>
                        <span className="price-regular price-line">$2.8</span>
                      </div>
                      <div className="button-add text-end">
                        <Link href="#">
                          <a className="btn btn-explorer">Explore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="text-center mt-30">
              <Link href="/search-properties">
                <a className="btn btn-black icon-arrow-right-white">
                  Load more destinations
                </a>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="text-center text-heading-2 whitespace-normal tracking-wide mt-[70px]">
          We are your trusted partner in finding your <br /> dream builder floor
          in Gurgaon
        </div>
        {/* <div className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/homepage8/img-2.png"
                    alt="Builder Floor"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">How does it works</h3>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We find the absolute best prices on hotels &amp; flights then
                  we pass these savings directly to you.
                </p>
                <div className="list-icons-round mt-40">
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/user.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">Account</h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      All the necessary information to create your account are
                      below this.
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/destination.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">
                      Select Destination
                    </h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/trip.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">
                      Book a Trip
                    </h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage8/flight.svg" />
                    </span>
                    <h4 className="text-heading-5 color-green-900">
                      Take your flight
                    </h4>
                    <p className="text-body-text color-gray-600 mt-5">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="section-box bg-7 mt-70">
          <div className="container mt-100 mb-50">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">
                  A Simply Perfect Place To Get Lost
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                  Feugiat primis ligula risus auctor egestas and augue viverra
                  mauri tortor in iaculis magna a feugiat mauris ipsum and
                  placerat viverra tortor gravida purus.
                </p>
                <div className="list-icons mt-40">
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage2/icon-work.svg" />
                    </span>
                    <h4 className="text-heading-4">Best Price Guarantee</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                  <div
                    className="item-icon none-bd wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <span className="icon-left">
                      <img src="/assets/imgs/page/homepage2/icon-design.svg" />
                    </span>
                    <h4 className="text-heading-4">Easy &amp; Quick Booking</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Aliquam a augue suscipit, luctus neque purus ipsum neque
                      at dolor primis libero tempus, blandit
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image">
                  <img
                    className="img-responsive"
                    src="assets/imgs/page/homepage8/img.png"
                    alt="Builder Floor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="section-box">
          <div className="container mt-60">
            <div>
              <div className="col-lg-12 col-sm-8">
                <h3 className="text-heading-1 mb-10 text-center">
                  Our Happy Customers
                </h3>
                <p className="text-body-lead-large color-gray-600 text-center">
                  Know about our clients, we are a woldwide corporate brand
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-80">
            <TestimonialSlider />
          </div>
        </div> */}
        {/* <div className="col-lg-12 flex justify-center">
            <div className="card-3 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 justify-center mb-[30px] check-width ">
              <div className="card-image-3 img-1"></div>
              <div className="text-left">
                <h3
                  className="text-body-lead color-gray-900 text-center"
                  style={{ lineHeight: "25px" }}
                >
                  Delhi
                </h3>
                <div className="d-flex mt-10 justify-center">
                  <div className="box-prices">
                    <span className="location-icon text-center">
                      Central Park West, USA
                    </span>
                  </div>
                </div>{" "}
                <div className="d-flex mb-20 justify-center">
                  <div className="box-prices"></div>
                  <div className="box-prices">
                    <span className="calendar-icon">3 days, 2 night</span> |{" "}
                    <span className="price-regular mr-5">$22.51 - </span>{" "}
                    <span className="price-regular price-line">$2.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className="section-box overflow-visible mt-10">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-partners none-bd pb-0">
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-1.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-2.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-3.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-4.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-5.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-6.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-7.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-8.svg"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="item-logo box-hover-shadow hover-up">
                        <img
                          alt="Builder Floor"
                          src="assets/imgs/slider/logo/sample-logo-9.svg"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* <section className="section-box overflow-visible mb-100">
          <div className="md:w-[80%] mx-auto mt-100">
            <div>
              <div className="col-lg-10 mx-auto">
                <div className="bg-6 box-newsletter position-relative md:h-[900px]  h-[550px] ">
                  <div className="row">
                    <div className="col-lg-5 col-md-7">
                      <span className="text-body-capitalized color-gray-500 text-uppercase">
                        newsletter
                      </span>
                      <h4 className="text-heading-2 mb-10 mt-10">
                        Subscribe our newsletter
                      </h4>
                      <p
                        className="text-body-text color-gray-500"
                        style={{ fontSize: "18px" }}
                      >
                        By clicking the button, you are agreeing with our
                      </p>
                      <Link href="/page-terms">
                        <a>Term &amp; Conditions</a>
                      </Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input
                            className="input-newsletter"
                            // value=""
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send"></button>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1 md:bottom-[300px]">
                        <img
                          src="/assets/imgs/template/chart.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="block-chart-2 md:bottom-[-400px]">
                        <img
                          className="img-responsive img-newsletter"
                          src="assets/imgs/template/img-newsletter.png"
                          alt="Builder Floor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
}

export default Index8;
