import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const PropertyForRent = ({propertyForRent}) => {
    const [showNumber, setShowNumber] = useState(false);

    return (
        <div className="col-4" style={{marginBottom: 30}}>
            <div className="card-item mb-0">
                <div className="card-img">
                    <a href={`/property/${propertyForRent.externalID}`} className="d-block">
                        <img src={ propertyForRent?.coverPhoto?.url } className="" alt="hotel-img" style={{height: 200}} />
                    </a>
                    <span className="badge">{propertyForRent.rentFrequency} </span>
                </div>

                <div className="card-body">
                    <h3 className="card-title"><a href={`/property/${propertyForRent.externalID}`}>{propertyForRent.title}</a></h3>
                    <p className="card-meta">{ propertyForRent.location[0].name }</p>
                    <div className="card-rating">
                        <button type="submit" id="submit" class="btn btn-success btn-sm effect" data-style="zoom-in" onClick={() => setShowNumber(!showNumber)}><i class="mdi mdi-phone"></i>  {showNumber ? propertyForRent?.phoneNumber?.mobile : "Call Agency"}</button>
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                        <span className="price__num">
                            <NumericFormat value={propertyForRent.price} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                        </span>
                        <span className="price__text">Price</span>
                        </p>
                        <a href={`/property/${propertyForRent.externalID}`} className="btn-text">Details <i className="la la-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyForRent