import React from 'react';

const Banner = () => {
  return (
    <section className="hotel-area section-bg section-padding overflow-hidden padding-right-100px padding-left-100px">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">

                <div style={{backgroundColor: '#145DA0', borderRadius: 20}}>
                    <div className="container">
                        <div className="row align-items-center g-0">
                            <div className="col-xl-6 col-lg-6 col-md-12 padding-top-20px padding-bottom-20px">
                                <div>
                                <h1 className="text-white display-4 fw-bold pe-lg-8">Holiday Homes &amp; Coming soon for agents
                                </h1>
                                <p className="text-white-50 mb-4 lead">
                                    An opportunity has emerged for agents and home owners alike to list their apartments to generate revenue for themselves.
                                </p>
                                <a href="#" className="btn btn-dark">View opportunities</a>
                                </div>
                            </div>
                            <div className=" col-xl-6 col-lg-6 col-md-12 text-lg-end text-center pt-6">
                                <img src="../assets/img/hero-img.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner