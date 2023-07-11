/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";

function About2() {
  return (
    <>
      <Layout footer={true}>
        <section className="section-box">
          <div
            className="banner-hero bg-about-2"
            style={{
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 box-banner-left">
                  {/* <span className="tag-1 bg-6 color-green-900">About Us</span> */}
                  <h1 className="text-display-3 mt-30 capitalize">
                    Find Your Dream Builder Floor today
                  </h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                    We understand the importance of
                    <br className="d-lg-block d-none" />
                    transparency in the real
                    <br className="d-lg-block d-none" />
                    estate
                  </p>
                  <div className="mt-40">
                    {/* <Link href="/page-about-1"> */}
                    <a
                      className="btn btn-black shape-square icon-arrow-right-white"
                      onClick={() => {
                        // const msg =
                        //   "Hello! I am reaching out to inquire about the real estate services your company offers.";
                        // window.open(
                        //   `https://wa.me/917669481778?text=${msg}`,
                        //   "_blank"
                        // );
                        window.scrollTo(0, document.body.scrollHeight);
                      }}
                    >
                      Contact Us
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-2">
                      <img
                        src="/assets/imgs/page/about/2/banner.png"
                        alt="Builder Floor"
                      />
                    </div>
                    <div className="float-end col-lg-6 mt-90">
                      <div className="list-icons mt-50">
                        <div className="item-icon none-bd">
                          <span className="icon-left">
                            <img
                              src="/assets/imgs/page/about/2/icon-officer.svg"
                              alt="Builder Floor"
                            />
                          </span>
                          <h4 className="text-heading-4">
                            <span className="text-heading-3 color-green-900">
                              +<span className="count">5</span>k
                            </span>
                          </h4>
                          <p className="text-body-text color-gray-500 leading-[30px] mt-[5px]">
                            Verified BuilderFloors Alloted
                          </p>
                        </div>
                        <div className="item-icon none-bd">
                          <span className="icon-left">
                            <img
                              src="/assets/imgs/page/about/2/icon-officer.svg"
                              alt="Builder Floor"
                            />
                          </span>
                          <h4 className="text-heading-4">
                            <span className="text-heading-3 color-green-900">
                              +<span className="count">30</span>
                            </span>
                          </h4>
                          <p className="text-body-text color-gray-500">
                            Verified Channel Partners
                          </p>
                        </div>
                        {/* <div className="item-icon none-bd">
                          <span className="icon-left">
                            <img
                              src="/assets/imgs/page/about/2/icon-constant.svg"
                              alt="Builder Floor"
                            />
                          </span>
                          <h4 className="text-heading-4">
                            <span className="text-heading-3 color-green-900">
                              +<span className="count">100</span>
                            </span>
                          </h4>
                          <p className="text-body-text color-gray-500">
                            Happy Homes
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section-box bg-[#f4f4f4]"
          style={{
            padding: "30px 60px",
          }}
        >
          <div
            className="container bg-[#fff]"
            style={{
              padding: "30px 40px",
            }}
          >
            <div className="row">
              <div className="mb-[10px]">
                <span className="text-[30px] font-bold ff">About Us ?</span>
              </div>
            </div>
            <div className="w-[100%]">
              <p className="text-[20px] font-medium capitalize mb-[30px] mt-[10px]">
                At BuilderFloor.com, we are dedicated to helping you find your
                dream builder floor in the vibrant city of Gurgaon. We
                understand that finding the perfect builder floor is an
                important and exciting journey, and we are here to make that
                process seamless and enjoyable for you.
              </p>
              <p className="text-[20px] font-medium capitalize mb-[30px]">
                Our platform exclusively focuses on new builder floors in
                Gurgaon, offering a wide range of options at all price points
                and locations. Whether you&apos;re a first-time buyer, a growing
                family, or an investor looking for a lucrative opportunity, we
                have the right builder floor to meet your unique requirements.
              </p>
              <p className="text-[20px] font-medium  capitalize mb-[30px]">
                We know and very well understand that finding and selecting a
                Builder Floor for one self is really a tough job. It is our
                endeavour to help you find the best match for you within your
                budget and also according to your taste & requirement. We have
                brought the world of builder floors at your door steps with the
                help of our verified channel partners.
              </p>
              <p className="text-[28px] font-bold capitalize mb-[10px]">
                Why choose BuilderFloor.com?
              </p>
              <p className="text-[20px] font-medium  capitalize mb-[30px]">
                •{" "}
                <span className="text-[24px] underline font-bold capitalize mt-[50px] mb-[10px]">
                  Extensive Selection:
                </span>{" "}
                Our comprehensive database showcases a diverse collection of new
                builder floors in Gurgaon. From affordable options to luxury
                residences, we have something to suit every taste and budget
              </p>{" "}
              <p className="text-[20px] font-medium  capitalize mb-[30px]">
                •{" "}
                <span className="text-[24px] underline font-bold capitalize mt-[50px] mb-[10px]">
                  Trusted Channel Partners:
                </span>{" "}
                We collaborate with reputed Channel Partners who in turn contact
                different builders and developers in Gurgaon with a proven track
                record of delivering quality constructions and enlist the best
                builder floors on our platform which meet the highest standards
                of craftsmanship and design.
              </p>{" "}
              <p className="text-[20px] font-medium  capitalize mb-[30px]">
                •{" "}
                <span className="text-[24px] underline font-bold capitalize mt-[50px] mb-[10px]">
                  Location Expertise:
                </span>{" "}
                Gurgaon is a dynamic city with numerous neighborhoods and
                localities, each with its own charm and amenities. Our channel
                partners are a team of real estate professionals, who have
                in-depth knowledge of the Gurgaon market and can guide you
                towards the ideal location that aligns with your lifestyle and
                preferences.
              </p>
              <p className="text-[20px] font-medium  capitalize mb-[30px]">
                •{" "}
                <span className="text-[24px] underline font-bold capitalize mt-[50px] mb-[10px]">
                  Personalized Assistance:
                </span>{" "}
                Our channel partners will provide a personalized experience to
                every customer. They, as a team, are dedicatedly ready to assist
                you throughout your home-buying journey, offering expert advice,
                answering your queries, and facilitating smooth transactions.
              </p>
              <p className="text-[20px] font-medium capitalize mb-[30px]">
                •{" "}
                <span className="text-[24px] underline font-bold capitalize mt-[50px] mb-[10px]">
                  Transparent Information:
                </span>{" "}
                We understand the importance of transparency in the real estate
                industry. On BuilderFloor.com, you will find detailed
                information, including floor plans, specifications, amenities,
                and pricing, empowering you to make informed decisions.
              </p>
              <p className="text-[20px] font-medium  capitalize mb-[30px]">
                At BuilderFloor.com, our mission is to simplify your search for
                the perfect builder floor and help you embark on a new chapter
                of your life. We are passionate about real estate and committed
                to exceeding your expectations.
              </p>
              <p className="text-[20px] font-medium  capitalize mb-[30px]">
                Start exploring our listings today and let us be your trusted
                partner in finding your dream builder floor in Gurgaon.
              </p>
            </div>
          </div>
        </section>
        {/* <section
          className="section-box mt-70"
          style={{
            padding: "0 60px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1">How It Work ?</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-60">
                  Elevate your Employee
                  <br className="d-lg-block d-none" />
                  Development Journey
                </h2>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-12 col-12" />
              <div className="col-lg-10 col-sm-12 col-12">
                <ul className="list-steps">
                  <li
                    className="icon-asset1 wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <div className="text-center block-step">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-start-plan.svg"
                          alt="Builder Floor"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Start Plan</h3>
                      <p className="text-body-text color-gray-500">
                        Choose any of our packages
                      </p>
                    </div>
                  </li>
                  <li
                    className="icon-asset2 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <div className="text-center block-step">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-connect.svg"
                          alt="Builder Floor"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Connect</h3>
                      <p className="text-body-text color-gray-500">
                        Receive concepts In 24 hours
                      </p>
                    </div>
                  </li>
                  <li
                    className="icon-asset3 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="text-center block-step bg-5">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-match.svg"
                          alt="Builder Floor"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Match</h3>
                      <p className="text-body-text color-gray-500">
                        Development Stage
                      </p>
                    </div>
                  </li>
                  <li
                    className="icon-asset4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="text-center block-step bg-5">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-complete.svg"
                          alt="Builder Floor"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Complete</h3>
                      <p className="text-body-text color-gray-500">
                        After-release Support
                      </p>
                    </div>
                  </li>
                  <li
                    className="wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="text-center block-step bg-9">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-review.svg"
                          alt="Builder Floor"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Review</h3>
                      <p className="text-body-text color-gray-500">
                        Project launch and checkout
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-1 col-sm-12 col-12" />
            </div>
          </div>
        </section> */}
        {/* <section
          className="section-box mt-100 bg-green-900 pt-90 pb-90"
          style={{
            padding: "0 60px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="img-responsive mb-10"
                      src="assets/imgs/page/about/2/img-2.png"
                      alt="Builder Floor"
                    />
                    <img
                      className="img-responsive"
                      src="assets/imgs/page/about/2/img-3.png"
                      alt="Builder Floor"
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-responsive"
                      src="assets/imgs/page/about/2/img-1.png"
                      alt="Builder Floor"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 block-pl">
                <h2 className="text-heading-1 color-white mb-30 mt-20">
                  Our game-changing approach to working together
                </h2>
                <p className="text-inter-lg">
                  Check out stories from companies like Leroy Merlin and
                  Decathlon to get inspired by how much you can gain.
                </p>
                <div className="mt-30">
                  <Link href="/page-service-2">
                    <a className="btn btn-black text-body-text">Keep Reading</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* here starts */}
        {/* <section
          className="section-box"
          style={{
            padding: "0 60px",
          }}
        >
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-8">
                <h3 className="text-heading-1 mb-10">Learn about us</h3>
                <p className="text-body-lead-large color-gray-600">
                  Know more about our potentiality
                </p>
              </div>
              <div className="col-lg-4 text-lg-end text-start pt-30">
                <Link href="/page-service-1">
                  <a className="btn btn-black icon-arrow-right-white">
                    View More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-1.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-2.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-3.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-4.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-5.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-6.png"
                          alt="Builder Floor"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900">
                  Frequently asked questions
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Feeling inquisitive? Have a read through some of our FAQs or
                  contact our supporters for help
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-4 mb-50">
                    <h4 className="text-heading-6 icon-leaf">People first</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-4 mb-50">
                    <h4 className="text-heading-6 icon-leaf">Agile approach</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                  <div className="col-lg-4 mb-50">
                    <h4 className="text-heading-6 icon-leaf">New mindset</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      The latest design trends meet hand-crafted templates.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mt-50">
                    <Accordion />
                    <div className="mt-100 text-center">
                      <Link href="/#">
                        <a className="btn btn-green-900 icon-arrow-right-white text-heading-6 color-white">
                          Contact Us
                        </a>
                      </Link>

                      <Link href="/#">
                        <a className="btn btn-link text-heading-6">
                          Support Center
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
        </section> */}
        <section className="section-box box-gray-100 ">
          <div className="container">
            <div className="icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-60">
                  <span className="text-body-capitalized text-uppercase">
                    Contact us
                  </span>
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    The right move to choose your new home.
                  </h2>
                  <p className="text-body-text color-gray-600 mt-20"></p>
                </div>
                <div className="col-lg-4 mb-40">
                  <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                    Builder Floor
                  </h4>
                  <p className="text-body-text leading-[30px] my-[7px] color-gray-600">
                    C1069, SUSHANT LOK-1, GURGAON ( HARAYANA)
                  </p>
                  <p className="text-body-text color-gray-600">
                    +91 91118xxxx0
                  </p>
                  <p className="text-body-text color-gray-600">
                    contact@BuilderFloor.com
                  </p>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Comapy (optioanl)"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Tell us about yourself"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                      <button
                        className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <br className="d-lg-none d-block" />
                      <span className="text-body-text-md color-gray-500 mb-20">
                        By clicking contact us button, you agree our terms and
                        policy,
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-box px-[60px]">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                <p className="text-body-lead-large color-gray-600">
                  Know about our clients, we are a woldwide corporate brand
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-80">
            <TestimonialSlider />
          </div>
        </section> */}
      </Layout>
    </>
  );
}

export default About2;
