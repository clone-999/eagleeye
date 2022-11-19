import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const Property = ({ property }) => {
    const [showNumber, setShowNumber] = useState(false);

    return (
        <li className="mix stars_3 hotels_amenities_" data-a="898" data-b="" id="apartment">
            <div className="card-item card-item-list marker-link row row-rtl item hotelslist">
                <div className="card-img">
                    <a href={`/property/${property.externalID}`} className="d-block">
                        <img src={property?.coverPhoto?.url} loading="lazy" className="main-img" alt="thumbnail"  data-expand="-20" />
                    </a>
                </div>

                <div className="card-body p-0">
                    <div className="row g-0">
                        <div className="col-8 px-4 p-3">
                            <h3 className="card-title">{property.title}</h3>
                            <p className="card-meta">
                                <i className="la la-map-marker"></i> 
                                {property.location[0].name}, {property.location[1].name}, {property.location[2].name}</p>
                            <a className="ellipsisFIX go-text-right mob-fs14" href={`/property/${property.externalID}`} onClick={ () => false } title="dubai"></a>

                            <div className="card-rating pt-0 pb-0">
                                <span className="review__text">
                                    {property.category.map((category) => <span key={category.slug}>{category.name}, </span>)}
                                </span>
                                <hr style={{ margin:'8 0', color: '#c6ccd3' }} />
                                <span className="rating__text">
                                    <span style={{
                                    border: 0.4, 
                                    solid: '#62a0ff', 
                                    padding: '6px 11px',
                                    borderRadius: 18, 
                                    marginRight: 8
                                    }}>{property.rooms}</span> 
                                    Bed Rooms
                                </span>
                            </div>
                        </div>

                        <div className="col-4 p-3" style={{
                            background: '#e4e8ef',
                            minHeight: 160, 
                            border: 1, 
                            solid: '#e2e7ec'
                            }}>
                            <div className="card-price">
                                <span className="price__from">Starting From</span>
                                <div className="clear"></div>
                                <div className="mb-0">
                                    <span className="price__num">
                                        <small>AED </small> 
                                        <strong> 
                                            <NumericFormat value={property.price} displayType={'text'} thousandSeparator={true} /> 
                                            <span className="prices"></span>
                                        </strong>
                                        <div className="clear"></div>
                                    </span>
                                </div>
                                <div className="clear"></div>
                                <p className="mb-1">{property?.rentFrequency} | {property?.agency?.name}</p>
                                <a href={`/property/${property.externalID}`} className="more_details effect mt-0 btn-block" data-style="zoom-in">Details<i className="la la-angle-right"></i>
                                </a>
                                
                                <button type="submit" id="submit" className="btn btn-success mt-2 btn-sm effect" data-style="zoom-in" onClick={() => setShowNumber(!showNumber)}><i className="mdi mdi-phone"></i>  {showNumber ? property?.phoneNumber?.mobile : "Call Agency"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Property