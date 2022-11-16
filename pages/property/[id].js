import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Image from 'next/image';
import nl2br from 'react-nl2br';

const PropertyDetail = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos, phoneNumber, location } }) => {

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

            <div className="container">
                <div className="single-content-item my-4">
                    <div className="row">
                        <div className="col-md-7">
                            <h3 className="title font-size-26">{title}
                            <div className="stars la la-star"></div>
                            </h3>

                            <div className="d-flex align-items-center pt-2">
                                <p className="mr-2">{location[0].name}, {location[1].name}, {location[2].name}</p>
                                <div className="Clear"></div>
                            </div>
                        </div>

                        <div className="col-md-2 bestvalue">
                            <p><NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'AED '} /></p>
                            <p><strong><small>&nbsp;Price</small></strong></p>

                        </div>

                        <div className="col-md-3">
                            <div className="review-summary text-center p-1">
                                <strong><h4 className="text-success"><strong>{agency.name}</strong><span> <i className="la la-thumbs-up"></i></span></h4></strong>
                                <img style={{width:50, background:'transparent' }} src={agency?.logo?.url} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="" style={{ borderRadius: 15, borderBlock: 'solid', overflow: 'hidden', overflowY: 'hidden !important', position: 'relative' }}>
                    <Carousel dotPosition={"right"} autoplay>
                        {photos.map((photo) => (
                            <div key={photo.id}>
                                <Image alt="Property Image" blurDataURL={photo.url} src={photo.url} width={1200} height={500} />
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
                                        <h3 className="title font-size-20">About {title}</h3>
                                        {nl2br(description)}
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
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
    return {
      props: {
        propertyDetails: data,
      },
    };
}

export default PropertyDetail