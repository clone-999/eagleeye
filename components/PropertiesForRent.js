import React from 'react';
import { NumericFormat } from 'react-number-format';

const PropertiesForRent = ({ propertiesForRent }) => {
  return (
    <section className="hotel-area section-bg section-padding overflow-hidden padding-right-100px padding-left-100px">
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <h2 className="sec__title line-height-55 bottom-line">Featured Properties For Rent</h2>
                </div>
            </div>
        </div>

        <div className="row padding-top-50px">
          <div className="col-lg-12">
            <div className="hotel-card-wrap">
              <div className="hotel-card-carousel">
                <div className="row">
                  {propertiesForRent.map((propertyForRent) => (
                    <div key={propertyForRent.slug} className="col-4" style={{marginBottom: 30}}>
                      <div className="card-item mb-0">
                        <div className="card-img">
                            <a href="#" className="d-block">
                              <img src={ propertyForRent.coverPhoto.url } className="" alt="hotel-img" style={{height: 200}} />
                            </a>
                          <span className="badge">{propertyForRent.rentFrequency} </span>
                        </div>

                        <div className="card-body">
                            <h3 className="card-title"><a href="#">{propertyForRent.title}</a></h3>
                            <p className="card-meta">{ propertyForRent.location[0].name }</p>
                            <div className="card-rating">
                              <span className="badge text-white">
                                <div className="la la-star-o"></div>
                              </span>
                            </div>
                            <div className="card-price d-flex align-items-center justify-content-between">
                                  <p>
                                    <span className="price__num">
                                      <NumericFormat value={propertyForRent.price} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                                    </span>
                                    <span className="price__text">Price</span>
                                  </p>
                                <a href="#" className="btn-text">Details <i className="la la-angle-right"></i></a>
                            </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertiesForRent