/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";

function Pricing1() {
  return (
    <>
      <Layout>
        <section className="section-box mt-70">
          <div className="container mt-50">
            <h3 className="text-heading-1 text-center mb-10">
              Choose The Best Plan
              <br className="d-lg-block d-none" />
              That’s For You
            </h3>
          </div>
          <div className="container mt-20">
            <div className="text-center block-bill-2 mt-10">
              <span className="text-lg text-billed">Billed Monthly</span>
              <label className="switch ml-20 mr-20">
                <input id="cb_billed_type" type="checkbox" name="billed_type" />
                <span className="slider round" />
              </label>
              <span className="text-lg text-billed">Bill Annually</span>
            </div>
            <div className="block-pricing block-pricing-2 mt-70">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            $35
                          </span>
                          <span className="text-heading-3 for-year">$420</span>
                          <span className="text-month for-month text-body-small color-gray-400">
                            /month
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">Standard</h4>
                          <p className="text-body-small color-gray-400">
                            All the basics for businesses that are just getting
                            started.
                          </p>
                        </div>
                        <ul className="list-package-feature">
                          <li>Unlimited updates</li>
                          <li>Custom permissions</li>
                          <li>Custom designs &amp; features</li>
                        </ul>
                        <div>
                          <Link href="/#">
                            <a className="btn btn-black text-body-lead icon-arrow-right-white">
                              Get Started
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="box-pricing-item active hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            $89
                          </span>
                          <span className="text-heading-3 for-year">$1068</span>
                          <span className="text-month for-month text-body-small color-gray-400">
                            /month
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">Essentials</h4>
                          <p className="text-body-small color-gray-400">
                            All the basics for businesses that are just getting
                            started.
                          </p>
                        </div>
                        <ul className="list-package-feature">
                          <li>Unlimited updates</li>
                          <li>Custom permissions</li>
                          <li>Custom instructors</li>
                        </ul>
                        <div>
                          <Link href="/#">
                            <a className="btn btn-black text-body-lead icon-arrow-right-white">
                              Get Started
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            $125
                          </span>
                          <span className="text-heading-3 for-year">$1500</span>
                          <span className="text-month for-month text-body-small color-gray-400">
                            /month
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">Premium</h4>
                          <p className="text-body-small color-gray-400">
                            Avvanced features for pros who need more
                            customization.
                          </p>
                        </div>
                        <ul className="list-package-feature">
                          <li>Unlimited updates</li>
                          <li>Custom designs &amp; features</li>
                          <li>Custom permissions</li>
                          <li>Custom instructors</li>
                        </ul>
                        <div>
                          <Link href="/#">
                            <a className="btn btn-black text-body-lead icon-arrow-right-white">
                              Get Started
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="box-pricing-item hover-up">
                        <div className="box-info-price">
                          <span className="text-heading-3 for-month display-month">
                            $199
                          </span>
                          <span className="text-heading-3 for-year">$2388</span>
                          <span className="text-month for-month text-body-small color-gray-400">
                            /month
                          </span>
                          <span className="text-month for-year text-body-small color-gray-400">
                            /year
                          </span>
                        </div>
                        <div className="line-bd-bottom">
                          <h4 className="text-heading-5 mb-15">Unlimited</h4>
                          <p className="text-body-small color-gray-400">
                            Avvanced features for pros who need more
                            customization.
                          </p>
                        </div>
                        <ul className="list-package-feature">
                          <li>Unlimited updates &amp; Support</li>
                          <li>Custom designs &amp; features</li>
                          <li>Custom permissions</li>
                          <li>Custom instructors</li>
                        </ul>
                        <div>
                          <Link href="/#">
                            <a className="btn btn-black text-body-lead icon-arrow-right-white">
                              Get Started
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                <h2 className="text-heading-1 color-gray-900 mb-30">
                  How It Works
                </h2>
                <p className="text-body-excerpt color-gray-600">
                  Ac sapien purus tristique neque nibh vitae faucibus non
                  phasellus vulputate nulla in eget amet, risus
                </p>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                <div className="list-icons">
                  <div className="item-icon pl-0">
                    <div className="mb-15">
                      <img
                        src="/assets/imgs/page/homepage2/icon-acquis.svg"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-heading-4">1. Acquisition</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                <div className="list-icons">
                  <div className="item-icon pl-0">
                    <div className="mb-15">
                      <img
                        src="/assets/imgs/page/homepage2/icon-active.svg"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-heading-4">2. Activation</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                <div className="list-icons">
                  <div className="item-icon pl-0">
                    <div className="mb-15">
                      <img
                        src="/assets/imgs/page/homepage2/icon-retent.svg"
                        alt="Builder Floor"
                      />
                    </div>
                    <h4 className="text-heading-4">3. Retention</h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mt-120">
            <div className="bdrd-58 box-gray-100">
              <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center">
                  <h2 className="text-heading-1 color-gray-900 mt-30">
                    Our Happy Customers
                  </h2>
                  <p className="text-body-lead-large color-gray-600 mt-20">
                    Know about our clients, we are a woldwide
                    <br className="d-lg-block d-none" />
                    corporate brand
                  </p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
              </div>
              <div className="container mt-70">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h5 className="text-heading-5 color-gray-900">
                        Satisfied client testimonial
                      </h5>
                      <p className="text-body-text color-gray-600 mt-20 text-comment">
                        Even factoring differences in body weight between
                        children and adults into account, it would still not
                        reach an intoxicating level in children.
                      </p>
                      <div className="box-img-user">
                        <div className="img-user">
                          <img
                            src="/assets/imgs/page/homepage2/user-1.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Jane Cooper
                        </h4>
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h5 className="text-heading-5 color-gray-900">
                        98% of residents recommend us
                      </h5>
                      <p className="text-body-text color-gray-600 mt-20 text-comment">
                        So yes, the alcohol (ethanol) in hand sanitizers can be
                        absorbed through the skin, but no, it would not cause
                        intoxication.
                      </p>
                      <div className="box-img-user">
                        <div className="img-user">
                          <img
                            src="/assets/imgs/page/homepage2/user-2.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Wade Warren
                        </h4>
                        <p className="text-body-text-md">Krusty Krab</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h5 className="text-heading-5 color-gray-900">
                        Our success stories
                      </h5>
                      <p className="text-body-text color-gray-600 mt-20 text-comment">
                        “It has been an absolute pleasure dealing with Scan
                        during the lockdown. Our church began to livestream our
                        services, and Scan had a great selection of
                        hardware....”
                      </p>
                      <div className="box-img-user">
                        <div className="img-user">
                          <img
                            src="/assets/imgs/page/homepage2/user-3.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Leslie Alexander
                        </h4>
                        <p className="text-body-text-md">
                          Biffco Enterprises Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 hover-up mb-20">
                      <h5 className="text-heading-5 color-gray-900">
                        This is simply unbelievable
                      </h5>
                      <p className="text-body-text color-gray-600 mt-20 text-comment">
                        “I was also lucky enough to read @Coding_Career early
                        and I was thoroughly blown away! It’s the book I wish I
                        had when I started my dev career.”
                      </p>
                      <div className="box-img-user">
                        <div className="img-user">
                          <img
                            src="/assets/imgs/page/homepage2/user-4.png"
                            alt="Builder Floor"
                          />
                        </div>
                        <h4 className="text-body-lead color-gray-900 mb-5">
                          Jenny Wilson
                        </h4>
                        <p className="text-body-text-md">Soylent Corp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12" />
              <div className="col-lg-8 col-sm-10 col-12 text-center">
                <h2 className="text-heading-1 color-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-body-lead-large color-gray-600 mt-20">
                  Aliquam a augue suscipit, luctus neque purus ipsum
                  <br className="d-lg-block d-none" />
                  neque dolor primis a libero tempus, blandit and
                  <br className="d-lg-block d-none" />
                  cursus varius and magnis sapien
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12" />
            </div>
          </div>
        </section>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <ul className="list-icons-2">
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      Can I see the demo before purchasing?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      Etiam amet mauris suscipit in odio integer congue metus
                      vitae arcu mollis blandit ultrice ligula egestas and magna
                      suscipit lectus magna suscipit luctus blandit vitae
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      Can I use your system on different devices?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      Etiam amet mauris suscipit in odio integer congue metus
                      vitae arcu mollis blandit ultrice ligula egestas and magna
                      suscipit lectus magna suscipit luctus blandit vitae
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      Can I import my sitemap to your system?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      An enim nullam tempor sapien gravida a donec ipsum enim an
                      porta justo integer at velna vitae auctor integer congue
                      undo magna at pretium purus pretium
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      Can I cancel my subscription at any time?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      An enim nullam tempor sapien gravida a donec ipsum enim an
                      porta justo integer at velna vitae auctor integer congue
                      undo magna at pretium purus pretium
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      How can I switch my subscription between essential, and
                      premium plan
                    </h3>
                    <p className="text-body-text color-gray-500">
                      Cubilia laoreet augue egestas and luctus donec curabite
                      diam vitae dapibus libero and quisque gravida donec and
                      neque.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      Is there an additional discount when paid annually?
                    </h3>
                    <p className="text-body-text color-gray-500">
                      Cubilia laoreet augue egestas and luctus donec curabite
                      diam vitae dapibus libero and quisque gravida donec and
                      neque. Blandit justo aliquam molestie nunc sapien
                    </p>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      I have an issue with my account
                    </h3>
                    <ul className="text-body-text">
                      <li>
                        Etiam amet mauris suscipit sit amet in odio. Integer
                        congue leo metus. Vitae arcu mollis blandit ultrice
                        ligula
                      </li>
                      <li>
                        An enim nullam tempor sapien gravida donec congue leo
                        metus. Vitae arcu mollis blandit integer at velna
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      What happens if I don’t renew my license after one year?
                    </h3>
                    <ul className="text-body-text">
                      <li>
                        Etiam amet mauris suscipit sit amet in odio. Integer
                        congue leo metus. Vitae arcu mollis blandit ultrice
                        ligula
                      </li>
                      <li>
                        An enim nullam tempor sapien gravida donec congue leo
                        metus. Vitae arcu mollis blandit integer at velna
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      Do you have a free trial?
                    </h3>
                    <p className="text-body-text color-gray-500" />
                    <ul className="text-body-text">
                      <li>Fringilla risus, luctus mauris orci auctor purus</li>
                      <li>
                        Quaerat sodales sapien euismod blandit purus and ipsum
                        primis in cubilia laoreet augue luctus
                      </li>
                    </ul>
                    <p />
                  </li>
                  <li>
                    <h3 className="text-heading-5 mb-10">
                      What kind of payment methods do you provide?
                    </h3>
                    <p className="text-body-text color-gray-500" />
                    <ul className="text-body-text">
                      <li>Fringilla risus, luctus mauris orci auctor purus</li>
                      <li>
                        Quaerat sodales sapien euismoda laoreet augue luctus
                      </li>
                    </ul>
                    <p />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box overflow-visible mb-100">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="bg-2 box-newsletter position-relative">
                  <div className="row">
                    <div className="col-lg-5 col-md-7">
                      <span className="text-body-capitalized color-gray-500 text-uppercase">
                        newsletter
                      </span>
                      <h4 className="text-heading-2 mb-10 mt-10">
                        Subscribe our newsletter
                      </h4>
                      <p className="text-body-text color-gray-500">
                        By clicking the button, you are agreeing with our
                      </p>
                      <Link href="/page-terms">
                        <a>Term &amp; Conditions</a>
                      </Link>

                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input
                            className="input-newsletter"
                            placeholder="Enter you mail .."
                          />
                          <button className="btn btn-send" />
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1">
                        <img
                          src="/assets/imgs/template/chart.png"
                          alt="Builder Floor"
                        />
                      </div>
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
        </section>
      </Layout>
    </>
  );
}

export default Pricing1;
