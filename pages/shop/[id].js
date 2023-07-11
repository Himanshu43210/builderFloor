/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Edges } from "@react-three/drei";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// Components
import Slider from "../../components/slider/Slider";
import Layout from "./../../components/layout/Layout";
import { BedroomTag, BathroomTag } from "../../components/tag/Tags";
import PropertyDetailsElement from "../../components/propertyDetails/PropertDetailsElement";

import { getCapitalizeWords } from "../../helpers/CamelCaseToCapitalizeWords";
import { flexbox } from "@mui/system";
import { Rating } from "@mui/material";
import Viewer from "../../components/360Viewer/Viewer360";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import useWidth from "../../hooks/useWidth";
import { useSelector } from "react-redux";
const SingleVendor = ({ property }) => {

  console.log(property,"please chec here")
  let Router = useRouter();
  const currentUrl = Router.asPath;
  // console.log(currentUrl)
  const property_id = currentUrl.split("/shop/")[1];
  // console.log(property_id)
  const [activeIndex, setActiveIndex] = useState(1);
  const [three60, set360] = useState();
  console.log(property);
  const propertyObj = property.find((obj) => obj._id === property_id);
  useEffect(() => {}, [propertyObj]);
  const description = propertyObj?.description;
  const descriptionLines = description?.split("\n");
  const swiperRef = useRef(null);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  const [mediaObject, setMediaObject] = useState([
    {
      name: "360 DEGREE",
      value: 0,
    },
    {
      name: "NORMAL",
      value: 0,
    },
    {
      name: "video",
      value: 0,
    },
  ]);

  // SwiperCore.use([Navigation, Pagination]);
  // const handleNext = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slideNext();
  //   }
  // };

  // const handlePrev = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slidePrev();
  //   }
  // };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 475); // Set the mobile breakpoint as per your requirement
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // useEffect(() => {
  //   setMediaObject(prev => {
  //     if (propertyObj?.images.length > 0) {
  //       const updateObject = prev.find((item) => item.name === "360 DEGREE")
  //       if (updateObject) {
  //         updateObject.value = propertyObj?.images?.length;
  //       }
  //       return [...prev]
  //     }
  //     if (propertyObj?.normalImages.length > 0) {
  //       console.log(";SAsda")
  //       const updateObject = prev.find((item) => item.name === "NORMAL")
  //       if (updateObject) {
  //         updateObject.value = propertyObj?.images?.length;
  //       }
  //       return [...prev]
  //     }
  //   })
  // }, [propertyObj])

  const [cliicked, setCliiicked] = useState(false);

  useEffect(() => {
    setMediaObject((prev) => {
      if (propertyObj?.images.length > 0) {
        const updateObject = prev.find((item) => item.name === "360 DEGREE");
        if (updateObject) {
          updateObject.value = propertyObj.images.length;
        }
      }
      if (propertyObj?.normalImages.length > 0) {
        const updateObject = prev.find((item) => item.name === "NORMAL");
        if (updateObject) {
          updateObject.value = propertyObj.normalImages.length;
        }
      }
      return [...prev];
    });
  }, [propertyObj]);

  const width = useWidth();

  // useEffect(() => {
  //   setMediaObject(prev => {
  //     const imgkey = property.hasOwnProperty("images")
  //     if ((property.imageType === prev.name) && (prev.name !== "images")) {
  //       return {
  //         ...prev,
  //         value: 1
  //       }
  //     }

  //     else if (imgkey === prev.name) {
  //       return {
  //         ...prev,
  //         value: property.images.length
  //       }
  //     }
  //   })
  // }, [])
  const state = useSelector((state) => state.scroll.filters);
  const router = useRouter();


  useEffect(() => {
    const handlePopState = () => {
      const ff=JSON.parse(localStorage.getItem("filter"))?JSON.parse(localStorage.getItem("filter")):state;
      router.replace(
        `/search-properties?filter=${JSON.stringify({
          ...ff,
        })}`
      );
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("popstate", handlePopState);
    };
  });

  console.log(propertyObj, width, "please have a look at it");

  console.log(state, "only check here");
  return (
    <>
      {three60 && (
        <Viewer
          close={() => {
            set360(null);
          }}
          curr={three60 - 1}
          images={[
            {
              src: "../assets/imgs/textures/one-1.jpeg",
              name: "Kitchen",
              position: { x: -150, y: -150, z: -200 },
            },
            {
              src: "../assets/imgs/textures/one-3.jpeg",
              name: "Dining room",
              position: { x: -90, y: -150, z: -100 },
            },
            {
              src: "../assets/imgs/textures/one-2.jpeg",
              name: "Balcony",
              position: { x: -120, y: -150, z: -50 },
            },
          ]}
        />
      )}
      <Layout
        headTitle="Blog"
        pageTitle="Our online News"
        pageTitleSub="The fancy moon going in little artist painting"
        parent="Blog"
        child="Blog Details"
        pageClass="front"
      >
        {
          // console.log(mediaObject)
        }
        {/* <section className="section-box">
          <div className="banner-hero nav-breadcrums bg-gray-100">
            <div className="container">
              <div className="breadcrumb">
                <ul>
                  <li className="home">
                    <Link href="index.html">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="page-shop-grid-1.html">
                      <a>State</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="page-shop-grid-2.html">
                      <a>City</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Location</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Category</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Property Name</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
        {/* {console.log(propertyObj)} */}

        <div className="py-[6px] flex justify-between  ">
          <h1 className="color-head-900 font-medium tracking-wide text-center text-[25px] md:text-[20px] sm1:text-[16px] ">
            {propertyObj?.detailTitle}
          </h1>
          <div className="flex pr-2 items-center">
            <div className="px-2 ">
              <div className="w-10 h-10 sm1:w-8 sm1:h-8  rounded-full  border-1 border-solid border-[#000]  flex items-center justify-center ">
                <img
                  src="/assets/imgs/icons/share.png"
                  alt="share"
                  className="w-6 h-6 sm1:w-4 sm1:h-4"
                />
              </div>
            </div>
            <div className="px-2 ">
              <div className="w-10 h-10  sm1:w-8 sm1:h-8 rounded-full border-1 border-solid border-[#000]  flex items-center justify-center ">
                <img
                  src="/assets/imgs/icons/heart.png"
                  alt="like"
                  className="w-6 h-6 sm1:w-4 sm1:h-4"
                />
              </div>
            </div>
          </div>
        </div>
        {(propertyObj?.images && propertyObj?.images?.length !== 0) ||
        (propertyObj?.normalImages && propertyObj?.normal?.length !== 0) ? (
          <div className="relative mt-[-29px]">
            <Slider
              view360={{ status: true, view: three60, set360: set360 }}
              images={propertyObj?.images}
              normal={propertyObj.normalImages}
              type={propertyObj.images.length > 0}
            />
            <button className="absolute z-10 bottom-[-40px] left-[35%] px-2 py-2 bg-[#f5f5f5] border-solid border-1 border-black text-[#066972] ">
              {mediaObject?.length > 0
                ? mediaObject
                    .map((obj, idx) =>
                      obj.value > 0 ? (
                        obj.name === "360 DEGREE" ? (
                          <span key={idx}>({obj.value}) Panorama</span>
                        ) : (
                          <span key={idx}>
                            ({obj.value}) {obj.name}
                          </span>
                        )
                      ) : null
                    )
                    .filter(Boolean)
                    .reduce(
                      (acc, curr) => (acc === "" ? [curr] : [acc, " | ", curr]),
                      ""
                    )
                : null}
            </button>
          </div>
        ) : (
          <div className="w-[100%] md:h-[300px] h-[550px] flex items-center justify-center ">
            <p className="text-[20px] font-bold capitalize">
              No Images available!
            </p>
          </div>
        )}
        <div className="section-box mt-50" />

        <section className="section-box detail-pad">
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
              <div className=" rounded-md  px-4 relative ">
                <span className="text-body-lead text-[22px]">
                  {propertyObj?.title}
                </span>
                <ul className="text-start w-full pb-[135px] ">
                  {descriptionLines &&
                    descriptionLines.map((list, idx) => (
                      <li className=" text-[16px] " key={idx}>
                        {list}{" "}
                      </li>
                    ))}
                </ul>
                <button
                  type=""
                  className=" mt-4 px-5 py-3 bg-[#006D77] text-[#fff] text-[24px] rounded-lg absolute bottom-9 left-3 "
                >
                  {" "}
                  ₹
                  {parseFloat(propertyObj?.price)
                    .toExponential()
                    .toString()
                    .split("e")[0]
                    .slice(0, 4)}
                  Cr.
                </button>
              </div>

              <div className="border-1 border-solid border-[#999] bg-[#f5f5f5]  rounded-md px-4 relative">
                <div className="flex mt-[20px] justify-around flex-wrap sm:pb-[120px] md:pb[20px]">
                  <div className="w-full w-1/2  pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/location.png"
                        alt="sectorNumber-icon"
                        className="w-10 h-10"
                      />
                      <h5 className="pl-2"> {propertyObj?.sectorNumber}</h5>
                    </div>
                  </div>
                  <div className="w-full w-1/2  pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/area.png"
                        alt="size-icon"
                        className="w-10 h-10"
                      />
                      <h5 className="pl-2"> {propertyObj?.size} Sq. Yd.</h5>
                    </div>
                  </div>
                  <div className="w-full w-1/2  pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/home.png"
                        alt="accommodation-icon"
                        className="w-10 h-10"
                      />
                      <h5 className="pl-2"> {propertyObj?.accommodation}</h5>
                    </div>
                  </div>
                  <div className="w-full w-1/2  pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/stairs.png"
                        alt="floor-icon"
                        className="w-10 h-10"
                      />
                      <h5 className="pl-2"> {propertyObj?.floor}</h5>
                    </div>
                  </div>
                  <div className="w-full w-1/2  pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/compass.png"
                        alt="facing-icon"
                        className="w-10 h-10"
                      />
                      <h5 className="pl-2"> {propertyObj?.facing}</h5>
                    </div>
                  </div>
                  <div className="w-full w-1/2  pl-4 mb-4 sm:mb-0 sm:w-1/3">
                    <div className="flex pl-4 items-center  ">
                      <img
                        src="/assets/imgs/icons/check.png"
                        alt="parkFacing-icon"
                        className="w-10 h-10"
                      />
                      <h5 className="pl-2">
                        {" "}
                        {propertyObj?.parkFacing} Possession
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-start w-full sm1:pb-[100px] ">
                    <div className="w-full  pl-4 mb-4 sm:mb-0 sm:w-1/3">
                      <div className="flex pl-4 items-center  ">
                        <img
                          src="/assets/imgs/icons/park.png"
                          alt="parkFacing-icon"
                          className="w-10 h-10"
                        />
                        <h5 className="pl-2">
                          {" "}
                          {propertyObj?.parkFacing === true ? "Park" : ""}{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="w-full pl-4 mb-4 sm:mb-0 sm:w-1/3 ">
                      <div className="flex pl-4 items-center  ">
                        <img
                          src="/assets/imgs/icons/right.png"
                          alt="corner-icon"
                          className="w-10 h-10"
                        />
                        <h5 className="pl-2">
                          {" "}
                          {propertyObj?.corner === true ? "Corner" : ""}{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4 w-full text-[#fff] absolute bottom-[-10px] md:bottom-0 lg:bottom-3 ">
                    {width < 900 ? (
                      <div className="text-[#fff xs:text-[14px]   w-full py-3  justify-center bg-[#006D77]  flex items-center text-[24px] rounded-lg mx-3 ">
                        <img
                          src="/assets/imgs/icons/phone-call.png"
                          alt="call-icon"
                          className="w-6 h-6 xs:w-4 xs:h-4"
                        />

                        <a href="tel:+919818215215">
                          <button type="button" className="ml-2">
                            Call
                          </button>
                        </a>
                      </div>
                    ) : cliicked ? (
                      <div className="text-[#fff xs:text-[14px]   w-full py-3  justify-center bg-[#006D77]  flex items-center text-[24px] rounded-lg mx-3 ">
                        +91 9818215215
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setCliiicked(true);
                        }}
                        className="text-[#fff xs:text-[14px]   w-full py-3  justify-center bg-[#006D77]  flex items-center text-[24px] rounded-lg mx-3 "
                      >
                        <img
                          src="/assets/imgs/icons/phone-call.png"
                          alt="call-icon"
                          className="w-6 h-6 xs:w-4 xs:h-4"
                        />

                        {/* <a href="tel:+919818215215"> */}
                        <button type="button" className="ml-2">
                          Call
                        </button>
                        {/* </a> */}
                      </div>
                    )}
                    <div className="text-[#fff] xs:text-[14px]  w-full py-3 justify-center  bg-[#006D77] flex items-center text-[24px]  rounded-lg mx-3">
                      <img
                        src="/assets/imgs/icons/whatsapp.png"
                        alt="call-icon"
                        className="w-6 h-6 xs:w-4 xs:h-4"
                      />

                      <button
                        type=""
                        onClick={() =>
                          window.open(
                            "https://wa.me/9818215215?text=hi",
                            "_blank"
                          )
                        }
                        className="ml-2"
                      >
                        Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex justify-between mt-[40px] bg-[#F9FBFA] ">
              <div className="col-lg-6  " >
                <div className="block">
                  <h3 className="text-body-lead text-2xl ">
                    Ultra Luxury Builder Floor Sushant Lok 1
                  </h3>
                </div>
                <div className="block mt-2  ml-[20px] ">
                  <ul>

                    {
                      descriptionLines.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))
                    }
                  </ul>
                  <button className="px-8 py-3 bg-[#006D77] mt-4 text-center text-[#fff] rounded-lg"> {`₹
                      ${parseFloat(property.price)
                      .toExponential()
                      .toString()
                      .split("e")[0]
                      .slice(0, 4)}
                         Cr.`}</button>
                </div>
              </div>
              <div className="col-lg-6 flex justify-center border-solid border-1 border-black "  >
              </div>
            </div> */}
            <div className="product-description">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="nav mt-50" role="tablist">
                      {/* <li onClick={() => handleOnClick(1)}>
                        <a
                          className={
                            activeIndex === 1
                              ? "btn btn-default btn-tab active"
                              : "btn btn-default btn-tab"
                          }
                        >
                          Description
                        </a>
                      </li> */}
                      {/* <li onClick={() => handleOnClick(2)}>
                        <a
                          className={
                            activeIndex === 2
                              ? "btn btn-default btn-tab active"
                              : "btn btn-default btn-tab"
                          }
                        >
                          Additional info
                        </a>
                      </li> */}
                      {/* <li onClick={() => handleOnClick(3)}>
                        <a
                          className={
                            activeIndex === 3
                              ? "btn btn-default btn-tab active"
                              : "btn btn-default btn-tab"
                          }
                        >
                          Contact Us
                        </a>
                      </li> */}
                      {/* <li onClick={() => handleOnClick(4)}>
                            <a
                              className={
                                activeIndex === 4
                                  ? "btn btn-default btn-tab active"
                                  : "btn btn-default btn-tab"
                              }
                            >
                              Reviews (3)
                            </a>
                          </li> */}
                    </ul>
                    <div className="tab-content mt-50">
                      {/* <div
                        className={
                          activeIndex === 1
                            ? "tab-pane fade active show"
                            : "tab-pane fade"
                        }
                      >
                        <p className="text-body-text color-gray-500">
                          {property.description}
                        </p>
                      </div> */}
                      <div
                        className={
                          activeIndex === 2
                            ? "tab-pane fade active show"
                            : "tab-pane fade"
                        }
                      >
                        <table className="table">
                          <tbody>
                            <tr className="stand-up">
                              {/* <th>Dimenstions</th>
                              <td>
                                <p>
                                  35″L x 24″W x 37-45″H(front to back wheel)
                                </p>
                              </td> */}
                            </tr>
                            <tr className="folded-wo-wheels">
                              <th>Park Facing</th>
                              <td>
                                <p>Yes</p>
                              </td>
                            </tr>
                            <tr className="folded-w-wheels">
                              <th>Transaction Type</th>
                              <td>
                                <p>Resell</p>
                              </td>
                            </tr>
                            <tr className="door-pass-through">
                              <th>Cark Parking</th>
                              <td>
                                <p>1</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className={
                          activeIndex === 3
                            ? "tab-pane fade active show"
                            : "tab-pane fade"
                        }
                      >
                        <div className="vendor-logo d-flex mb-30">
                          {/* <img
                            src="/assets/imgs/page/single-product/vendor-18.svg"
                            alt
                          /> */}
                          <div className="vendor-name ml-5">
                            <h6>
                              <Link href="vendor-details-2.html">
                                <a>Builder Co.</a>
                              </Link>
                            </h6>
                            <div className="product-rate-cover text-end">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "90%" }}
                                />
                              </div>
                              <span className="font-small ml-5 text-muted">
                                (32 reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul className="contact-infor mb-50">
                          <li>
                            <strong>Name: </strong>
                            <span>{propertyObj?.builderName}</span>
                          </li>
                          <li>
                            <img
                              src="/assets/imgs/page/single-product/icon-location.svg"
                              alt
                            />
                            <strong>Address: </strong>
                            {/* <span>{property.address}</span> */}
                          </li>
                          <li>
                            <img
                              src="/assets/imgs/page/single-product/icon-contact.svg"
                              alt
                            />
                            <strong>Contact Builder:</strong>
                            <span>{propertyObj?.builderContact}</span>
                          </li>
                        </ul>
                        {/* <div className="d-flex mb-55">
                              <div className="mr-30">
                                <p className="text-brand font-xs">Rating</p>
                                <h4 className="mb-0">92%</h4>
                              </div>
                              <div className="mr-30">
                                <p className="text-brand font-xs">
                                  Ship on time
                                </p>
                                <h4 className="mb-0">100%</h4>
                              </div>
                              <div>
                                <p className="text-brand font-xs">
                                  Chat response
                                </p>
                                <h4 className="mb-0">89%</h4>
                              </div>
                            </div> */}
                        {/* <p className="text-body-text color-gray-500">
                          Noodles &amp; Company is an American fast-casual
                          restaurant that offers international and American
                          noodle dishes and pasta in addition to soups and
                          salads. Noodles &amp; Company was founded in 1995 by
                          Aaron Kennedy and is headquartered in Broomfield,
                          Colorado. The company went public in 2013 and recorded
                          a $457 million revenue in 2017.In late 2018, there
                          were 460 Noodles &amp; Company locations across 29
                          states and Washington, D.C.
                        </p> */}
                      </div>
                      {/* <div
                            className={
                              activeIndex === 4
                                ? "tab-pane fade active show"
                                : "tab-pane fade"
                            }
                          >
                            <div className="comments-area">
                              <div className="row">
                                <div className="col-lg-8">
                                  <h4 className="mb-30 title-question">
                                    Customer questions &amp; answers
                                  </h4>
                                  <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex mb-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img
                                            src="/assets/imgs/page/single-product/author-2.png"
                                            alt
                                          />
                                          <Link href="#">
                                            <a className="font-heading text-brand">
                                              Sienna
                                            </a>
                                          </Link>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2022 at 3:12 pm
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "100%" }}
                                              />
                                            </div>
                                          </div>
                                          <p className="mb-10 text-body-text color-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?
                                            <Link href="#">
                                              <a className="reply">Reply</a>
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img
                                            src="/assets/imgs/page/single-product/author-3.png"
                                            alt
                                          />
                                          <Link href="#">
                                            <a className="font-heading text-brand">
                                              Brenna
                                            </a>
                                          </Link>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2022 at 3:12 pm
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "80%" }}
                                              />
                                            </div>
                                          </div>
                                          <p className="mb-10 text-body-text color-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?
                                            <Link href="#">
                                              <a className="reply">Reply</a>
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img
                                            src="/assets/imgs/page/single-product/author-4.png"
                                            alt
                                          />
                                          <Link href="#">
                                            <a className="font-heading text-brand">
                                              Gemma
                                            </a>
                                          </Link>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2022 at 3:12 pm
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "80%" }}
                                              />
                                            </div>
                                          </div>
                                          <p className="mb-10 text-body-text color-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?
                                            <Link href="#">
                                              <a className="reply">Reply</a>
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <h4 className="mb-30 title-question">
                                    Customer reviews
                                  </h4>
                                  <div className="d-flex mb-30">
                                    <div className="product-rate d-inline-block mr-15">
                                      <div
                                        className="product-rating"
                                        style={{ width: "90%" }}
                                      />
                                    </div>
                                    <h6>4.8 out of 5</h6>
                                  </div>
                                  <div className="progress">
                                    <span>5 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      50%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>4 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      25%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>3 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuenow={45}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      45%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>2 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuenow={65}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      65%
                                    </div>
                                  </div>
                                  <div className="progress mb-30">
                                    <span>1 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "85%" }}
                                      aria-valuenow={85}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    >
                                      85%
                                    </div>
                                  </div>
                                  <Link href="#">
                                    <a className="font-xs text-muted">
                                      How are ratings calculated?
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-box mt-100 bord-top mb-20">
              {/* <div className="container">
                <span className="tag-1 color-orange-900">
                  Hot for this Summer
                </span>
                <h2 className="text-heading-1 color-gray-900 mt-30">
                  Explore Top Properties
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  We find the absolute best prices on plots &amp; flats
                </p>
              </div> */}
              <div className="text-center text-[32px] mt-[25px]">
                <h1>Explore similar options to match your choice </h1>
              </div>

              <div className="flex justify-center md:flex-col items-center px-[10px] mt-[50px]">
                <div className="flex flex-wrap  justify-center w-[100%] w-full px-[0px] md:gap-x-4 relative">
                  <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                    spaceBetween={20}
                    // breakpoints={{
                    //   1024: {
                    //     slidesPerView: 4,
                    //   },
                    //   1024: {
                    //     slidesPerView: 3,
                    //   },
                    //   769: {
                    //     slidesPerView: 2,
                    //   },
                    //   539: {
                    //     slidesPerView: 1,
                    //   }

                    // }}
                    breakpoints={{
                      540: {
                        slidesPerView: 1,
                      },
                      // When window width is >= 640px
                      768: {
                        slidesPerView: 2,
                      },
                      // When window width is >= 768px
                      1024: {
                        slidesPerView: 3,
                      },
                      // When window width is >= 1024px
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {[property[503],property[506],property[554],property[507],].map((property, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="swiper-item h-[400px] md:mt-[70px] mx-auto  lg:shrink-0 xl:shrink-0 2xl:shrink-0  w-[280px]  hover:scale-[1.05] cursor-pointer flex items-center justify-center relative bg-white rounded-[4px] mt-[50px]"
                          style={{
                            border: "1px solid #cacaca",
                          }}
                        >
                          <div className="card-container absolute duration-100 xl:1/4 2xl:1/4  ">
                            <div
                              data-wow-delay=".2s"
                              style={{ height: "100%" }}
                            >
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
                                    {
                                      // console.log(property.imageType)
                                    }
                                    {property &&
                                      property?.imageType === "360 DEGREE" && (
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
                                  <div className="text-body-text icon-with-text property-info color-gray-500  px-2 flex justify-evenly shrink-0">
                                    <div className="flex items-center w-full">
                                      <img
                                        className="propicon-2 mr-[8px] translate-y-[-1px]"
                                        src="/assets/imgs/icons/home.svg"
                                        alt="Builder Floor"
                                      />
                                      <span className="text-[13px]">
                                        {property?.accommodation}
                                      </span>
                                    </div>
                                    <div className="flex items-center w-full">
                                      <img
                                        className="propicon-2 mr-[8px] translate-y-[-1px]"
                                        src="/assets/imgs/page/homepage5/floor.svg"
                                        alt="Builder Floor"
                                      />
                                      <span className="text-[13px]">
                                        {property?.floor}
                                      </span>
                                    </div>
                                    <div className="flex items-center w-full">
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
                                        onClick={()=>{
                                          console.log(property)
                                        }}
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
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-box mt-90">
          <div className="container">
            <h2 className="text-heading-1 color-gray-900">You may also like</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Take it to your cart
            </p>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp1.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Bass ultra x-203. Head phone
                        </h3>
                        <span className="price-regular mr-15">$29.8</span>
                        <span className="price-regular price-line">$32.2</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp2.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Boxie by Dro C 3450. Active Noise
                        </h3>
                        <span className="price-regular mr-15">$30.2</span>
                        <span className="price-regular price-line">$42.5</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp3.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Sony DSC H300 - 20.1 Megapixel
                        </h3>
                        <span className="price-regular mr-15">$59.8</span>
                        <span className="price-regular price-line">$62.3</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp4.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Bass ultra x-203. Head phone
                        </h3>
                        <span className="price-regular mr-15">$42.6</span>
                        <span className="price-regular price-line">$52.3</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp5.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Boxie by Dro C 3450. Active Noise
                        </h3>
                        <span className="price-regular mr-15">$69.5</span>
                        <span className="price-regular price-line">$71.5</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#">
                    <a>
                      <div className="product-image">
                        <img
                          src="/assets/imgs/page/homepage5/sp6.png"
                          alt="Builder Floor"
                        />
                      </div>
                      <div className="product-info">
                        <h3 className="title-product">
                          Sony DSC H300 - 20.1 Megapixel
                        </h3>
                        <span className="price-regular mr-15">$52.9</span>
                        <span className="price-regular price-line">$55.6</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-box mt-80 mb-40">
          <div className="container">
            <div className="banner-ads">
              <div className="box-banner-ads">
                <h3 className="text-head-ads mb-15">
                  Big sale for Iphone 7 plus
                </h3>
                <p className="desc-ads">
                  Sed mauris Pellentesque elit Aliquam at
                  <br className="d-lg-block d-none" />
                  lacus interdum nascetur elit ipsum.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-box mt-70 shop-bottom-banner">
          <div className="container">
            <div className="box-green box-green-2 bdr-18">
              <h3 className="text-heading-1 color-white">
                You can order on
                <br className="d-lg-block d-none" />
                App and Play store
              </h3>
              <p className="text-desc-white">
                Bring the world of shopping to your phone
              </p>
              <div className="mt-60">
                <Link href="#">
                  <a className="mr-20">
                    <img
                      src="/assets/imgs/page/homepage5/apple-button.svg"
                      alt="Builder Floor"
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <img
                      src="/assets/imgs/page/homepage5/google-play.svg"
                      alt="Builder Floor"
                    />
                  </a>
                </Link>
              </div>
              <div className="mt-10">
                <span className="cb-layout mr-5">
                  Order direct from the app
                </span>
                <span className="cb-layout">Save and searches</span>
              </div>
              <div className="block-1 d-none d-lg-block">
                <img
                  src="/assets/imgs/page/shop1/safety.png"
                  alt="Builder Floor"
                />
              </div>
              <div className="block-2 d-none d-lg-block">
                <img
                  src="/assets/imgs/page/shop1/chart.png"
                  alt="Builder Floor"
                />
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  // const response = await axios.post(
  //   "https://p24x7-server.herokuapp.com/api/p24x7",
  //   {
  //     action: "read",
  //     module: "properties",
  //     _id: query.id,
  //     apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
  //   }
  // );
  const response = await axios.post(
    // "https://p24x7-server.herokuapp.com/api/p24x7",
    "https://testerp1apis.nextsolutions.in/api/p24x7",
    {
      action: "list",
      module: "properties",
      _id: query.id,
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
    }
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      property: response.data ?? {},
    }, // will be passed to the page component as props
  };
}

export default SingleVendor;
