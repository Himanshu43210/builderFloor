import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Button } from "@mui/material";
import { createTheme } from "@mui/system";
import Viewer from "../360Viewer/Viewer360";
import Image from "next/image";
const ThumbSlider = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const data = [
    {
      img: "9.jpg",
      avatar: "1.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
    {
      img: "10.jpg",
      avatar: "2.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
  ];

  return (
    <>
      <div className="galleries">
        <div className="detail-gallery">
          {/* <span className="icon-plus" /> */}
          <div className="product-image-slider">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView="auto"
            >
              <SwiperSlide>
                <figure className="border-radius-20">
                  {/* <img
                    className="slide-img"
                    src="/assets/imgs/page/homepage8/img-new.jpg"
                    alt="product image"
                  /> */}
                  <div className="checkkkkkk">
                    <Image
                      src="/assets/imgs/page/homepage8/img-new.jpg"
                      alt="product image"
                      className="w-[100%] object-cover rounded-24px"
                      style={{
                        width: "100% !important",
                      }}
                      width={500}
                      height={350}
                    />
                  </div>
                  <Button
                    className="button-360"
                    variant="contained"
                    onClick={() => {
                      props.view360.set360(1);
                    }}
                  >
                    360
                  </Button>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="border-radius-20">
                  <div className="checkkkkkk">
                    <Image
                      src="/assets/imgs/page/homepage8/img-new.jpg"
                      alt="product image"
                      className="w-[100%] object-cover rounded-24px"
                      style={{
                        width: "100% !important",
                      }}
                      width={500}
                      height={350}
                    />
                  </div>
                  <Button
                    className="button-360"
                    variant="contained"
                    onClick={() => {
                      props.view360.set360(2);
                    }}
                  >
                    360
                  </Button>
                </figure>
                {/* <button className="360-button">360</button> */}
              </SwiperSlide>
              <SwiperSlide>
                <figure className="border-radius-20">
                  <div className="checkkkkkk">
                    <Image
                      src="/assets/imgs/page/homepage8/img-new.jpg"
                      alt="product image"
                      className="w-[100%] object-cover rounded-24px"
                      style={{
                        width: "100% !important",
                      }}
                      width={500}
                      height={350}
                    />
                  </div>
                  <Button
                    className="button-360"
                    variant="contained"
                    onClick={() => {
                      props.view360.set360(3);
                    }}
                  >
                    360
                  </Button>
                </figure>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="slider-nav-thumbnails">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="slider-nav-thumbnails-align"
          >
            <SwiperSlide>
              {/* <div> */}
              <div className="checkkkkkk">
                <Image
                  src="/assets/imgs/page/homepage8/img-new.jpg"
                  alt="product image"
                  className="w-[100%] object-cover rounded-24px"
                  style={{
                    width: "100% !important",
                  }}
                  width={500}
                  height={350}
                />
              </div>
              {/* <div className="checkkkkkk">
                <Image
                  src="/assets/imgs/page/homepage8/img-new.jpg"
                  alt="product image"
                  className="w-[100%] object-cover rounded-24px"
                  style={{
                    width: "100% !important",
                  }}
                  width={500}
                  height={350}
                />
              </div> */}
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div> */}
              <div className="checkkkkkk">
                <Image
                  src="/assets/imgs/page/homepage8/img-new.jpg"
                  alt="product image"
                  className="w-[100%] object-cover rounded-24px"
                  style={{
                    width: "100% !important",
                  }}
                  width={500}
                  height={350}
                />
              </div>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div> */}
              <div className="checkkkkkk">
                <Image
                  src="/assets/imgs/page/homepage8/img-new.jpg"
                  alt="product image"
                  className="w-[100%] object-cover rounded-24px"
                  style={{
                    width: "100% !important",
                  }}
                  width={500}
                  height={350}
                />
              </div>
              {/* </div> */}
            </SwiperSlide>
            {/* <SwiperSlide><div><img src="/assets/imgs/page/single-product/img-sp4.jpg" alt="product image" /></div></SwiperSlide> */}
          </Swiper>
        </div>
      </div>

      {/* <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
            </Swiper> */}
    </>
  );
};

export default ThumbSlider;