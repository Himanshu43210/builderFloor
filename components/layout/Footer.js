/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-50 overflow-x-hidden">
        <div className="w-[100%] px-0">
          {/* <div className="footer-top">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <span className="color-head-900 mr-30 text-mb-sm-20 pb-[40px]">
                  Ready to get started?
                </span>
                <Link href="/page-signup">
                  <a className="create-acc">Create an Account</a>
                </Link>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">4517 Washington Ave. Manchester, Kentucky 39495</div>
                            <div className="mt-20 text-body-text color-gray-600">(239) 555-0108</div>
                            <div className="text-body-text color-gray-600">contact@Builder Floor.com</div>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>Mission &amp; Vision</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Our Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-career">
                                        <a>Careers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Press &amp; Media</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Advertising</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/blog-2">
                                        <a>Our Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-1">
                                        <a>Plans &amp; Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Knowledge Base</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Cookie Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Office Center</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>News &amp; Events</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-faqs-1">
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Editor Help</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Community</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Live Chatting</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Support Center</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>Request an offer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>How it works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-2">
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Reviews</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Stories</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
          <div
            className="footer-bottom"
            style={{ backgroundColor: "transparent",padding:"40px 40px" }}
          >
            <div className="row">
              {/* <div className="col-md-6 col-sm-6 text-center text-md-start">
                <div className="header-nav mb-50">
                  <nav className="nav-main-menu d-none d-xl-block">
                    <ul className="main-menu d-flex">
                      <li>
                        <Link href="/about">
                          <a className="footer-menu-design">About</a>
                        </Link>
                      </li>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <li>
                        <Link href="/blog">
                          <a className="footer-menu-design">News</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="row mb-40 d-flex items-center">
                  <div className="col-md-4">
                    <span className="color-yellow-400 text-body-lead">
                      FOLLOW US
                    </span>
                  </div>
                  <div className="col-md-4 text-lg-end text-md-end">
                    <div className="footer-social d-flex space-x-6">
                      <Link href="https://www.linkedin.com">
                        <a className="icon-socials icon-linkedin"></a>
                      </Link>
                      <Link href="https://www.instagram.com">
                        <a className="icon-socials icon-instagram"></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-12 col-sm-12 text-center text-md-start bord-bott">
                <Link href="/">
                  <a>
                    <img
                      style={{
                        width: "8%",
                        height: "auto",
                        float: "left",
                      }}
                      alt="Builder Floor"
                      src="/assets/imgs/template/BUILDER.png"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="row mt-30 mb-30 bord-top-2">
              <div className="col-md-10  flex justify-left">
                <span className="text-body-lead foot-font copyright-p ">
                  © Builder Floor Official 2022
                </span>
                {/* <Link href="/page-terms">
                  <a className="text-body-lead foot-font copyright-m ml-6">
                    Privacy policy
                  </a>
                </Link>
                <Link href="/page-terms">
                  <a className="text-body-lead foot-font copyright-m ml-6">
                    Cookie Settings
                  </a>
                </Link>
                <Link href="/page-terms">
                  <a className="text-body-lead foot-font ml-6">
                    Terms of service
                  </a>
                </Link> */}
              </div>
              <div className="col-md-2 text-right text-lg-end text-md-end copyright-c ">
                <div className="footer-social d-flex space-x-6 mt-10">
                  <Link href="https://www.linkedin.com">
                    <a className="icon-socials icon-linkedin"></a>
                  </Link>
                  <Link href="https://www.instagram.com">
                    <a className="icon-socials icon-instagram"></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Old Footer Start 
          <div className="footer-bottom mt-20">
            <div className="row bord-bot">
              <div className="col-md-6 col-sm-6 text-center text-md-start">
                <div className="header-nav mb-50">
                  <nav className="nav-main-menu d-none d-xl-block">
                    <ul className="main-menu d-flex">
                      <li>
                        <Link href="/about">
                          <a className="footer-menu-design">About</a>
                        </Link>
                      </li>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <li>
                        <Link href="/blog">
                          <a className="footer-menu-design">News</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="row mb-40 d-flex items-center">
                  <div className="col-md-4">
                    <span className="color-yellow-400 text-body-lead">
                      FOLLOW US
                    </span>
                  </div>
                  <div className="col-md-4 text-lg-end text-md-end">
                    <div className="footer-social d-flex space-x-6">
                      <Link href="https://www.linkedin.com">
                        <a className="icon-socials icon-linkedin"></a>
                      </Link>
                      <Link href="https://www.instagram.com">
                        <a className="icon-socials icon-instagram"></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 text-center text-md-start">
                <Link href="/">
                  <a>
                    <img
                      style={{
                        width: "90%",
                        height: "90%",
                        float: "right",
                      }}
                      alt="Builder Floor"
                      src="/assets/imgs/template/footer-logo.png"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="row mt-30">
              <div className="col-md-6 flex justify-center">
                <span className="color-yellow-400 copyright-p ">
                  Website copyright by @Property 24x7 | All right reserved
                </span>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end copyright-c ">
                <Link href="/page-terms">
                  <a className="text-body-text color-yellow-400 copyright-m">
                    Privacy policy
                  </a>
                </Link>
                <Link href="/page-terms">
                  <a className="text-body-text color-yellow-400 copyright-m">
                    Cookie Settings
                  </a>
                </Link>
                <Link href="/page-terms">
                  <a className="text-body-text color-yellow-400 ">
                    Terms of service
                  </a>
                </Link>
              </div>
            </div>
          </div>
          Old Footer End */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
