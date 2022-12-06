import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { airBaseUrl, airFetchApi } from '../../utils/fetchApi';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Image from 'next/image';
import nl2br from 'react-nl2br';

const HolidayHomeDetail = ({ holidayHomeDetails: { maxrate, currencycode, address, city, name, country, checkin, checkout }, payFeatures, photos, description, reviewScores, facilities }) => {

    return (
        <section className="tour-detail-area padding-bottom-90px">
            <div className="single-content-navbar-wrap menu section-bg" id="single-content-navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content-nav" id="single-content-nav">
                                <ul>
                                    <li><a data-scroll="photos" href="#photos" className="scroll-link active">Apartment Photos</a></li>
                                    <li><a data-scroll="description" href="#description" className="scroll-link">Description</a></li>
                                    <li><a data-scroll="amenities" href="#amenities" className="scroll-link">Amenities</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" id='photos'>
                <div className="single-content-item my-4">
                    <div className="row">
                        <div className="col-md-7">
                            <h3 className="title font-size-26">{name} &nbsp;&nbsp;
                                <br />
                                Check In: {checkin.from} - {checkin.to} & Check Out: {checkout.from} - {checkout.to}
                            </h3>

                            <div className="d-flex align-items-center pt-2">
                                <p className="mr-2">{address}, {city}, {country}</p>
                                <div className="Clear"></div>
                            </div>
                        </div>

                        <div className="col-md-2 bestvalue" style={{ fontSize: 16 }}>
                            <p><small>Max Rate</small></p>
                            <p><strong>&nbsp;<NumericFormat value={maxrate} displayType={'text'} thousandSeparator={true} prefix={currencycode} /> Per Night</strong></p>
                        </div>

                        <div className="col-md-3">
                            
                            <div className="review-summary text-center p-1">
                                <strong><h4 className="text-success"><strong>Bookable: {payFeatures[0].bookable ? "YES" : "NO"}</strong><span> <i className="la la-thumbs-up"></i></span></h4></strong>
                                Payable: {payFeatures[0].payable ? "YES" : "NO"}
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="" style={{ borderRadius: 15, borderBlock: 'solid', overflow: 'hidden', overflowY: 'hidden !important', position: 'relative' }}>
                    <Carousel dotPosition={"right"} autoplay>
                        {photos.map((photo) => (
                            <div key={photo.photo_id}>
                                <Image alt="Property Image" blurDataURL={photo.url_1440} src={photo.url_1440} width={1200} height={500} />
                            </div>
                        ))}
                    </Carousel>
                </div>

            </div>

            <div className="single-content-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content-wrap padding-top-10px">
                                <div id="description" className="page-scroll">
                                    <div className="section-block"></div>
                                    <div className="single-content-item padding-top-30px padding-bottom-10px">
                                        <h3 className="title font-size-20">About {name}</h3>
                                        {description?.description ? nl2br(description?.description) : ""}

                                        <h3 className="title font-size-16">Important Info</h3>
                                        {description?.extra_lines?.imp_info ? nl2br(description?.extra_lines?.imp_info) : ""}
                                    </div>
                                    <div className="section-block"></div>
                                </div>
                            </div>

                            <div id="availability" className="page-scroll">
                                <div className="section-heading mt-3 mb-3">
                                    <h3 className="sec__title_left left-line">Review Summary</h3>
                                </div>

                                <br />

                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Score</th>
                                                    <th>Count</th>
                                                    <th>Between</th>
                                                    <th>To</th>
                                                    <th>Percentage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reviewScores?.score_percentage?.map((review, index) => (
                                                    <tr key={index}>
                                                        <td>{review.score_word}</td>
                                                        <td>{review.count}</td>
                                                        <td>{review.score_start}</td>
                                                        <td>{review.score_end}</td>
                                                        <td>{review.percent}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-content-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-content-wrap padding-top-10px">
                                <div id="amenities" className="page-scroll">
                                    <div className="single-content-item padding-top-40px padding-bottom-20px">
                                        <h3 className="title font-size-20">Facilities</h3>
                                        <div className="amenities-feature-item pt-4">
                                            <div className="row">
                                                
                                            {facilities?.map((facility, index) => (
                                                <div key={index} className="col-lg-4 responsive-column">
                                                    <div className="single-tour-feature d-flex align-items-center mb-3">
                                                        <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                                            
                                                            <i className="la la-check"></i>
                                                            
                                                            
                                                        </div>
                                                        <div className="single-feature-titles">
                                                            <h3 className="title font-size-15 font-weight-medium">{facility.facility_name}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section-block"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const data = await airFetchApi(`${airBaseUrl}/v1/hotels/data?hotel_id=${id}&locale=en-gb`);
    const payFeaturesData = await airFetchApi(`${airBaseUrl}/v1/hotels/payment-features?hotel_id=${id}&locale=en-gb`);
    const photosData = await airFetchApi(`${airBaseUrl}/v1/hotels/photos?hotel_id=${id}&locale=en-gb`);
    const descriptionData = await airFetchApi(`${airBaseUrl}/v1/hotels/description?hotel_id=${id}&locale=en-gb`);
    const reviewScoresData = await airFetchApi(`${airBaseUrl}/v1/hotels/review-scores?hotel_id=${id}&locale=en-gb`);
    const facilitiesData = await airFetchApi(`${airBaseUrl}/v1/hotels/facilities?hotel_id=${id}&locale=en-gb`);
    
    return {
      props: {
        holidayHomeDetails: data,
        payFeatures: payFeaturesData,
        photos: photosData,
        description: descriptionData,
        reviewScores: reviewScoresData,
        facilities: facilitiesData
      },
    };
}

export default HolidayHomeDetail