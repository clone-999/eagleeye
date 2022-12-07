import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const HolidayHomeRow = ({ holidayHome }) => {
    const [showNumber, setShowNumber] = useState(false);

    return (
        <li className="mix stars_3 hotels_amenities_" data-a="898" data-b="" id="apartment">
            <div className="card-item card-item-list marker-link row row-rtl item hotelslist">
                <div className="card-img">
                    <a href={`/holidayhome/${holidayHome.hotel_id}`} className="d-block">
                        <img src={ holidayHome?.main_photo_url.replace("square60", "square960") } loading="lazy" className="main-img" alt="thumbnail"  data-expand="-20" />
                    </a>
                </div>

                <div className="card-body p-0">
                    <div className="row g-0">
                        <div className="col-8 px-4 p-3">
                            <h3 className="card-title">{holidayHome.hotel_name}</h3>
                            <p className="card-meta">
                                <i className="la la-map-marker"></i> 
                                { holidayHome.city }, {holidayHome.distances[0].text}</p>
                            <a className="ellipsisFIX go-text-right mob-fs14" href={`/holidayhome/${holidayHome.hotel_id}`} onClick={ () => false } title="dubai"></a>

                            <div className="card-rating pt-0 pb-0">
                                <span className="review__text">
                                    {holidayHome.unit_configuration_label.replace(/(<([^>]+)>)/ig, '')}
                                </span>
                                <hr style={{ margin:'8 0', color: '#c6ccd3' }} />
                                <span className="rating__text">
                                    <span style={{
                                    border: 0.4, 
                                    solid: '#62a0ff', 
                                    padding: '6px 11px',
                                    borderRadius: 18, 
                                    marginRight: 8
                                    }}>{holidayHome.review_score_word}</span> 
                                    : <strong>Reviews</strong>
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
                                            <NumericFormat value={holidayHome?.price_breakdown?.all_inclusive_price} displayType={'text'} thousandSeparator={true} /> 
                                            <span className="prices"></span>
                                        </strong>
                                        <div className="clear"></div>
                                    </span>
                                </div>
                                <div className="clear"></div>
                                <p className="mb-1">Check In: {holidayHome.checkin.from} - {holidayHome.checkin.until} & Check Out: {holidayHome.checkout.from} - {holidayHome.checkout.until}</p>
                                <a href={`/holidayhome/${holidayHome.hotel_id}`} className="more_details effect mt-0 btn-block" data-style="zoom-in">Details<i className="la la-angle-right"></i>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default HolidayHomeRow