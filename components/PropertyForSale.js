import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const PropertyForSale = ({ propertyForSale }) => {
    const [showNumber, setShowNumber] = useState(false);
    
    return (
        <div key={propertyForSale.slug} className="col-lg-4">
            <a href={`/property/${propertyForSale.externalID}`}>
                <div className="card-item destination-card">
                    <div className="card-img">
                        <img src={propertyForSale.coverPhoto.url} className="" style={{height: 250}} alt="destination-img" />
                        <span className="badge">{propertyForSale.location[0].name}</span>
                    </div>

                    <div className="card-body mb-1">
                        <span className="ratings d-flex align-items-center mr-1">
                            <span className="rating__text cw"> 
                                <button type="submit" id="submit" className="btn btn-success btn-sm effect" data-style="zoom-in" onClick={() => setShowNumber(!showNumber)}><i className="mdi mdi-phone"></i>  {showNumber ? propertyForSale?.phoneNumber?.mobile : "Call Agency"}</button>
                            </span>
                        </span>
                        <h3 className="card-title">{propertyForSale.title}</h3>
                        <div className="card-rating d-flex align-items-center">
                        </div>
                        <div className="card-price d-flex align-items-center justify-content-between">
                            <p className="tour__text"> </p>
                            <p style={{paddingBottom: 15}}>
                                <span className="price__from">Price </span>
                                <span className="price__num"><strong><NumericFormat value={propertyForSale.price} displayType={'text'} thousandSeparator={true} prefix={'AED '} /></strong></span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default PropertyForSale