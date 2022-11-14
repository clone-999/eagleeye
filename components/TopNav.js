import React from 'react';
import Head from 'next/head';

const TopNav = () => {
  return (
    <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>

        <header className="header-area">
            <div className="header-top-bar padding-right-100px padding-left-100px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header-top-content">
                                <div className="header-left">
                                    <ul className="list-items">
                                        <li><a href="tel:9715667777"> <i className="la la-phone mr-1"></i> +9715667777</a></li>
                                        <li><a href="mailto:support@mobilies.io"><i className="la la-envelope mr-1"></i>support@mobilies.io</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="header-top-content">
                                <div className="header-right d-flex align-items-center justify-content-end">
                                    <a href="/register" className="theme-btn theme-btn-small">Sign Up</a>
                                    <a href="/login" className="theme-btn theme-btn-small theme-btn-transparent ml-1">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-menu-wrapper padding-right-100px padding-left-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="menu-wrapper">
                                <a href="#" className="down-button"><i className="la la-angle-down"></i></a>
                                <div className="logo">
                                    <a href="/" style={{borderRadius:5}}>
                                    <img className="imgheader" src="/assets/img/logo.png" alt="logo" />
                                    </a>
                                    <div className="menu-toggler">
                                        <i className="la la-bars"></i>
                                        <i className="la la-times"></i>
                                    </div>
                                </div>

                                <div className="main-menu-content">
                                    <nav>
                                        <ul>
                                            <li><a href="/" title="home">HOME</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default TopNav