import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

const HolidayHome = ({holidayHome}) => {
    const [showNumber, setShowNumber] = useState(false);

    return (
        <div className="col-4" style={{marginBottom: 30}}>
            <div className="card-item mb-0">
                <div className="card-img">
                    <a href={`/holidayhome/${holidayHome.hotel_id}`} className="d-block">
                        <img src={ holidayHome?.main_photo_url.replace("square60", "square960") } className="" alt="hotel-img" style={{height: 200}} />
                    </a>
                    <span className="badge">{holidayHome.accommodation_type_name} </span>
                </div>

                <div className="card-body">
                    <h3 className="card-title"><a href={`/holidayhome/${holidayHome.hotel_id}`}>{holidayHome.hotel_name}</a></h3>
                    <p className="card-meta">{ holidayHome.city }, {holidayHome.distances[0].text}</p>
                    <div className="card-rating">
                        
                    </div>
                    <div className="card-price d-flex align-items-center justify-content-between">
                        <p>
                        <span className="price__num">
                            <NumericFormat value={holidayHome.min_total_price} displayType={'text'} thousandSeparator={true} prefix={holidayHome.currency_code} />
                        </span>
                        <span className="price__text">Price</span>
                        </p>
                        <a href={`/holidayhome/${holidayHome.hotel_id}`} className="btn-text">Details <i className="la la-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HolidayHome