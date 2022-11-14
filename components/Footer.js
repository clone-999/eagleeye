import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
        <section className="info-area info-bg padding-top-90px padding-bottom-20px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 responsive-column">
                        <a href="#" className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb text-color-2">
                                <i className="la la-phone"></i>
                            </div>
                            <div className="info-content pt-2">
                                <h4 className="info__title">Need Help? Contact us</h4>
                                <p className="info__desc">
                                    Our support team available 24/7
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 responsive-column">
                        <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                                <i className="la la-money"></i>
                            </div>
                            <div className="info-content pt-2">
                                <h4 className="info__title">Secure Payments</h4>
                                <p className="info__desc">
                                    Remarkable and 99.9% service uptime   
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 responsive-column">
                        <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                                <i className="la la-times"></i>
                            </div>
                            <div className="info-content pt-2">
                                <h4 className="info__title">Cancel Policy</h4>
                                <p className="info__desc">
                                    Cancellation made easy and automated
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="cta-area subscriber-area section-bg-2 padding-top-60px padding-bottom-60px">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-heading">
                            <h2 className="sec__title font-size-30 text-white">Subscribe to see Secret Deals</h2>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="subscriber-box">
                            <div className="contact-form-action">
                                <div className="input-box">
                                    <label className="label-text text-white">Enter email addresss</label>
                                    <div className="form-group mb-0">
                                        <span className="la la-envelope form-icon"></span>
                                        <form role="search" onSubmit={ () => false }></form>
                                        <input type="email" className="form-control sub_email" id="exampleInputEmail1" placeholder="Enter your email" />
                                        <button className="theme-btn theme-btn-small submit-btn sub_newsletter" id="email_subscribe">Subscribe</button>
                                        <span className="font-size-14 pt-1 text-white-50"><i className="la la-lock mr-1"></i>Don't worry your information is safe with us</span>
                                        <span className="font-size-14 pt-1">
                                        <a className="newstext" href="#">
                                            <div className="wow fadeIn subscriberesponse"></div>
                                        </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="footer-area section-bg padding-top-100px padding-bottom-30px">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="term-box footer-item">
                            <ul className="list-items list--items d-flex align-items-center">
                                All Rights Reserved by MOBILIES.IO
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-social-box text-right">
                            <ul className="social-profile">
                                <li><a href="#" target="_blank"><i className="lab la-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i className="lab la-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="lab la-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i className="lab la-whatsapp"></i></a></li>
                                <li><a href="#" target="_blank"><i className="lab la-google"></i></a></li>
                                <li><a href="#" target="_blank"><i className="lab la-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-block mt-4"></div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="copy-right-content d-flex align-items-center justify-content-end padding-top-30px">
                            <div className="font-size-15" style={{width:'100%'}}>
                                <div className="d-none d-md-block" style={{padding:0, position: 'relative' }}>
                                    <div className="container">
                                        <div className="text-center">
                                            Powered by &nbsp;<a href="#" target="_blank"> <img src="/assets/img/logo.png" style={{
                                                height:22,
                                                display: 'inline-block',
                                                webkitTransform: 'translateY(0px)',
                                                transform: 'translateY(0px)'
                                            }} height="22" alt="EAGLE EYE" /> <strong>&nbsp;EAGLE EYE</strong></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src="/assets/img/payment-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer