/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Edges } from "@react-three/drei";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
// Components
import Slider from "../../components/slider/Slider";
import Layout from "./../../components/layout/Layout";
import { BedroomTag, BathroomTag } from "../../components/tag/Tags";
import PropertyDetailsElement from "../../components/propertyDetails/PropertDetailsElement";

// Helpers
import { getCapitalizeWords } from "../../helpers/CamelCaseToCapitalizeWords";
import { flexbox } from "@mui/system";
import { Rating } from "@mui/material";
import Viewer from "../../components/360Viewer/Viewer360";

const SingleVendor = ({ property }) => {
  let Router = useRouter();

  const [activeIndex, setActiveIndex] = useState(1);
  const [three60, set360] = useState();
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

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
        <div className="section-box mt-50" />
        <section className="section-box detail-pad">
          <div className="">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1
                  className="color-head-900"
                  style={{ fontSize: "40px", marginBottom: "40px" }}
                >
                  Property Results
                </h1>
                <div
                  className="product-item-2 product-item-3 hover-up min-h-[650px] md:min-h-[100px] check-width mb-30"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  {property.images && property.images.length !== 0 && (
                    <Slider
                      view360={{ status: true, view: three60, set360: set360 }}
                      images={property.images}
                    />
                  )}
                </div>
              </div>
              {/* <div className="col-lg-1"></div> */}

              <div className="col-lg-6">
                <div
                  className="product-info "
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  <div className=" mb-20 mt-20 head-price d-flex justify-between product-info-check">
                    {/* <div className="d-flex">
                      <div className="box-category-product">
                        <span className="tag-category">
                        {property.propertyID}
                      </span>
                      </div>
                      <div className="box-rate-product">
                                                    <div className="box-ratin g"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="Builder Floor" /></span></div><span className="text-semibold"><span>(</span><span>{singleStore.rating}</span><span>&nbsp;rates )</span></span>
                                                </div>
                    </div> */}
                    <div>
                      <h1
                        className="color-head-900"
                        style={{ fontSize: "30px" }}
                      >
                        {property.title}
                      </h1>
                      <h3
                        className="text-body-lead color-gray-900"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        A well furnished plot with spacious rooms.
                      </h3>
                    </div>
                  </div>
                  <div className=" mb-20 mt-20 head-price d-flex justify-between product-info-check">
                    {/* <div className="d-flex">
                      <div className="box-category-product">
                        <span className="tag-category">
                        {property.propertyID}
                      </span>
                      </div>
                      <div className="box-rate-product">
                                                    <div className="box-ratin g"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="Builder Floor" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="Builder Floor" /></span></div><span className="text-semibold"><span>(</span><span>{singleStore.rating}</span><span>&nbsp;rates )</span></span>
                                                </div>
                    </div> */}

                    <div>
                      <div className="box-price  my-0">
                        <h4 className=" price-tag text-xl price-tag-check ">
                          {`₹
                      ${parseFloat(property.price)
                        .toExponential()
                        .toString()
                        .split("e")[0]
                        .slice(0, 4)}
                      Cr.`}
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* <p className="text-body-text color-gray-500 img-icons">
                    <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/golf.svg"
                      alt="Builder Floor"
                    />
                    {`Near Golf Course Road`}&nbsp;&nbsp;&nbsp;
                    <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/metro.svg"
                      alt="Builder Floor"
                    />
                    {`Near Rapid Metro`}&nbsp;&nbsp;&nbsp;
                    <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/market.svg"
                      alt="Builder Floor"
                    />
                    {`Near Galleria Market`}&nbsp;&nbsp;&nbsp;
                    <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/supermarket.svg"
                      alt="Builder Floor"
                    />
                    {`Near Supermart Market`}&nbsp;&nbsp;&nbsp;
                  </p> */}
                  {/* <p className="text-body-text color-gray-500 img-icons">
                    <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/wardrobe.svg"
                      alt="Builder Floor"
                    />
                    {`Wardrobe in Each Room with attached washrooms`}
                    &nbsp;&nbsp;&nbsp;
                    <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/kitchen.svg"
                      alt="Builder Floor"
                    />
                    {`Modular Kitchen`}&nbsp;&nbsp;&nbsp;
                  </p> */}
                  <p className="text-body-text color-gray-500 img-icons">
                    {/* <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/marble.svg"
                      alt="Builder Floor"
                    />
                    {`Italian Marble`}&nbsp;&nbsp;&nbsp;
                    <img
                      className="propicon"
                      src="/assets/imgs/page/homepage5/fan.svg"
                      alt="Builder Floor"
                    />
                    {`Chimney & Hob with Exhuast FAN`}&nbsp;&nbsp;&nbsp; */}
                    {/* {property.description} */}
                  </p>
                  {/* <div
                    style={{
                      display: "flex",
                      gap: 8,
                      marginTop: 12,
                    }}
                  >
                    <BedroomTag
                      count={parseInt(property.accommodation.charAt(0))}
                    /> */}
                  {/* <BathroomTag count={0} /> */}
                  {/* </div> */}
                  {/* <div className="box-countdown mt-40">
                        <div className="box-processbar">
                          <div className="text-hurry">
                            Hurry up!
                            <br />
                            Sales ends soon!
                          </div>
                          <div className="process-bar-line">
                            <div className="process-bar-inner" />
                          </div>
                          <span className="text-number-sold">63/158 sold</span>
                        </div>
                        <div className="box-count">
                          <div
                            className="deals-countdown pl-5"
                            data-countdown="2022/05/25 00:00:00"
                          />
                        </div>
                      </div> */}
                  {/* <div className="detail-extralink mb-30">
                        <div className="detail-qty border radius">
                          <Link href="#">
                            <a className="qty-down">
                              <i className="fi-rs-angle-small-down" />
                            </a>
                          </Link>
                          <input
                            className="qty-val"
                            name="quantity"
                            defaultValue={1}
                            min={1}
                          />
                          <Link href="#">
                            <a className="qty-up">
                              <i className="fi-rs-angle-small-up" />
                            </a>
                          </Link>
                        </div>
                        <div className="product-extra-link2">
                          <button
                            className="button button-add-to-cart"
                            type="submit"
                          >
                            <img src="/assets/imgs/page/single-product/cart.svg" />{" "}
                            Add to cart
                          </button>
                          <a
                            className="action-btn hover-up"
                            aria-label="Add To Wishlist"
                          >
                            <BiBed fontSize={32} />
                          </a>
                          <Link href="#">
                            <a
                              className="action-btn hover-up"
                              aria-label="Compare"
                            ></a>
                          </Link>
                        </div>
                      </div> */}
                  {/* <div col-lg-12 style={{ display: "flex" }}>
                    <div className="box-categories-link mt-10 mr-50">
                      <div className="item-cat">
                        <span className="color-head-900" style={{fontSize:"22px"}}>Dealer: </span>
                        <Link href="#">
                          <a className="pde-design">{property.builderName}</a>
                        </Link>
                      </div>
                    </div>
                    <div className="box-categories-link mt-10">
                      <div className="item-cat">
                        <span className="color-head-900" style={{fontSize:"22px"}}>Contact: </span>
                        <Link href="#">
                          <a className="pde-design">
                            {property.builderContact}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                  <div
                    // style={{
                    //   display: "flex",
                    //   alignItems: "center",
                    //   justifyContent: "space-between",
                    //   gap: 28,
                    //   marginTop: 16,
                    //   // gridTemplateColumns: "auto auto auto",
                    // }}
                    className="product-info-check"
                  >
                    <PropertyDetailsElement>
                      <span>{`Area: `}</span>
                      {/* <br/> */}
                      <span className="pde-design">{`${property.size} Sq. Yard`}</span>
                    </PropertyDetailsElement>
                    <PropertyDetailsElement>
                      <span>{`Category: `}</span>
                      {/* <br/> */}
                      <span className="pde-design">
                        {getCapitalizeWords(property.category)}
                      </span>
                    </PropertyDetailsElement>
                    <PropertyDetailsElement>
                      <span>{`Floor: `}</span>
                      {/* <br/> */}
                      <span className="pde-design">
                        {getCapitalizeWords(property.floor)}
                      </span>
                    </PropertyDetailsElement>
                  </div>
                  <div
                    // style={{
                    //   display: "flex",
                    //   alignItems: "center",
                    //   justifyContent: "space-between",
                    //   gap: 28,
                    //   marginTop: 16,
                    //   // gridTemplateColumns: "auto auto auto",
                    // }}
                    className="product-info-check"
                  >
                    <PropertyDetailsElement>
                      <span>{`Facing: `}</span>
                      {/* <br/> */}
                      <span className="pde-design">
                        {getCapitalizeWords(property.facing)}
                      </span>
                    </PropertyDetailsElement>
                    <PropertyDetailsElement>
                      <span>{`Address: `}</span>
                      {/* <br/> */}
                      <span className="pde-design">
                        {/* {getCapitalizeWords(property.address)} */}
                        {property.address}
                      </span>
                    </PropertyDetailsElement>
                    <PropertyDetailsElement>
                      {(property.parkFacing || property.corner) && (
                        <div>
                          <span>{`Position: `}</span>
                          {/* <br/> */}
                          {/* <ul
                            style={{
                              listStyleType: "none",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          > */}

                          {property.parkFacing && (
                            <span className="pde-design mt-1">Park Facing</span>
                          )}
                          {property.corner && (
                            <span className="pde-design mt-1">Corner</span>
                          )}
                          {/* </ul> */}
                        </div>
                      )}
                    </PropertyDetailsElement>
                  </div>
                </div>
                <Rating
                  value={5}
                  readOnly
                  size="large"
                  style={{ marginTop: "15px" }}
                />
              </div>
              <div className="col-lg-6 flex justify-center">
                <div
                  className="col-lg-10"
                  style={{
                    backgroundColor: "#f5f5f5",
                    border: "1px solid black",
                    paddingTop: "50px",
                    paddingBottom: "50px",
                  }}
                >
                  <h1
                    className="color-head-900"
                    style={{ fontSize: "30px", paddingLeft: "55px" }}
                  >
                    Contact This Property{" "}
                  </h1>

                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      paddingLeft: "55px",
                      lineHeight: "44px",
                    }}
                  >
                    <b>Tour Options:</b> In-Person, Video
                  </span>
                  <div className="text-center mt-30">
                    <a
                      className="btn btn-black"
                      style={{ width: "80%" }}
                      onClick={() => {
                        axios
                          .post(
                            "https://testerp1apis.nextsolutions.in/api/sort/urls",
                            {
                              url: `https://builder-floor-flax.vercel.app/shop/${property._id}`,
                            }
                          )
                          .then((e) => {
                            const msg = `Hi! I saw a property ${e.data.url} on BuilderFloor.com and i am interested in it. Is it available?`;
                            window.open(
                              `https://wa.me/917669481778?text=${msg}`,
                              "_blank"
                            );
                          });
                      }}
                    >
                      Contact Us{" "}
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-1"></div> */}
            </div>
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
                            <span>{property.builderName}</span>
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
                            <span>{property.builderContact}</span>
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
            <div className="section-box mt-100 bord-top">
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
              <div className="container mt-70">
                <div className="row margin-check  ">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="product-item-2 product-item-recent hover-up">
                      <div className="exp-img">
                        <img
                          className="bord-rad"
                          src="/assets/imgs/page/homepage8/img-4.jpg"
                        />
                      </div>
                      <div className="product-info product-info-recent">
                        <h3
                          className="text-body-lead color-head-900"
                          style={{ fontSize: "22px" }}
                        >
                          Fulbrix Studio - 3 Beds
                        </h3>
                        <h3
                          className="text-body-lead color-head-900"
                          style={{ fontSize: "16px" }}
                        >
                          676, Gurgaon, Haryana
                        </h3>
                        <h3
                          className="text-body-lead color-head-900"
                          style={{
                            fontSize: "15px",
                            fontWeight: "normal",
                            lineHeight: "20px",
                          }}
                        >
                          A well furnished plot with spacious rooms.
                        </h3>
                        <div className="text-body-text icon-with-text property-info color-gray-500 mt-10 d-flex justify-between">
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/home.svg"
                              alt="Builder Floor"
                            />
                            <span>{`3 BHK`}</span>
                          </div>
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/floor.svg"
                              alt="Builder Floor"
                            />
                            <span>{`First Floor `}</span>
                          </div>
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/yard.svg"
                              alt="Builder Floor"
                            />
                            <span>{`220 Sq. Yd.`}</span>
                          </div>
                        </div>
                        <div>
                          <div className="rating rating-recent">
                            <div className="box-rating-2 box-rating">
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star.svg"
                                alt="Builder Floor"
                              />
                            </div>
                            <div className="d-flex flatprice-2 mt-20">
                              <div className="box-prices price-theme">
                                <span className="price-regular color-white mr-5">
                                  ₹ 22.51
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="product-item-2 product-item-recent hover-up">
                      <div className="exp-img">
                        <img
                          className="bord-rad"
                          src="/assets/imgs/page/homepage8/img-4.jpg"
                        />
                      </div>
                      <div className="product-info product-info-recent">
                        <h3
                          className="text-body-lead color-head-900"
                          style={{ fontSize: "22px" }}
                        >
                          Fulbrix Studio - 3 Beds
                        </h3>
                        <h3
                          className="text-body-lead color-head-900"
                          style={{ fontSize: "16px" }}
                        >
                          676, Gurgaon, Haryana
                        </h3>
                        <h3
                          className="text-body-lead color-head-900"
                          style={{
                            fontSize: "15px",
                            fontWeight: "normal",
                            lineHeight: "20px",
                          }}
                        >
                          A well furnished plot with spacious rooms.
                        </h3>
                        <div className="text-body-text icon-with-text property-info color-gray-500 mt-10 d-flex justify-between">
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/home.svg"
                              alt="Builder Floor"
                            />
                            <span>{`3 BHK`}</span>
                          </div>
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/floor.svg"
                              alt="Builder Floor"
                            />
                            <span>{`First Floor `}</span>
                          </div>
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/yard.svg"
                              alt="Builder Floor"
                            />
                            <span>{`220 Sq. Yd.`}</span>
                          </div>
                        </div>
                        <div>
                          <div className="rating rating-recent">
                            <div className="box-rating-2 box-rating">
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star.svg"
                                alt="Builder Floor"
                              />
                            </div>
                            <div className="d-flex flatprice-2 mt-20">
                              <div className="box-prices price-theme">
                                <span className="price-regular color-white mr-5">
                                  ₹ 22.51
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="product-item-2 product-item-recent hover-up">
                      <div className="exp-img">
                        <img
                          className="bord-rad"
                          src="/assets/imgs/page/homepage8/img-4.jpg"
                        />
                      </div>
                      <div className="product-info product-info-recent">
                        <h3
                          className="text-body-lead color-head-900"
                          style={{ fontSize: "22px" }}
                        >
                          Fulbrix Studio - 3 Beds
                        </h3>
                        <h3
                          className="text-body-lead color-head-900"
                          style={{ fontSize: "16px" }}
                        >
                          676, Gurgaon, Haryana
                        </h3>
                        <h3
                          className="text-body-lead color-head-900"
                          style={{
                            fontSize: "15px",
                            fontWeight: "normal",
                            lineHeight: "20px",
                          }}
                        >
                          A well furnished plot with spacious rooms.
                        </h3>
                        <div className="text-body-text icon-with-text property-info color-gray-500 mt-10 d-flex justify-between">
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/home.svg"
                              alt="Builder Floor"
                            />
                            <span>{`3 BHK`}</span>
                          </div>
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/floor.svg"
                              alt="Builder Floor"
                            />
                            <span>{`First Floor `}</span>
                          </div>
                          <div
                            className="d-flex gap-2"
                            style={{ alignItems: "center" }}
                          >
                            <img
                              className="propicon-2"
                              src="/assets/imgs/page/homepage5/yard.svg"
                              alt="Builder Floor"
                            />
                            <span>{`220 Sq. Yd.`}</span>
                          </div>
                        </div>
                        <div>
                          <div className="rating rating-recent">
                            <div className="box-rating-2 box-rating">
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star-active.svg"
                                alt="Builder Floor"
                              />
                              <span></span>
                              <img
                                className="rateicon-2"
                                src="/assets/imgs/page/homepage5/star.svg"
                                alt="Builder Floor"
                              />
                            </div>
                            <div className="d-flex flatprice-2 mt-20">
                              <div className="box-prices price-theme">
                                <span className="price-regular color-white mr-5">
                                  ₹ 22.51
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <Link href="#">
                    <a className="btn btn-black icon-arrow-right-white">
                      Load more destinations
                    </a>
                  </Link>
                </div> */}
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
