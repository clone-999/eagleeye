import React from 'react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Property from '../../components/Property';

const AgencyDetail = ({agencyListings}) => {
    const agencyDetail = agencyListings[0].agency;

    return (
        <>
            <section className="breadcrumb-area bread-bg-7">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="breadcrumb-content">
                                    <div className="section-heading">
                                        <div className="left-side-info rtl-align-right" style={{ color: '#fff' }}>
                                            <span>
                                            <strong style={{ textTransform: 'capitalize' }}>
                                                <h2 className="sec__title_list">{agencyDetail.name}</h2>
                                            </strong>
                                            </span>
                                            <div>
                                            <p><strong>Authorized From </strong>( {agencyDetail?.licenses[1]?.authority} )</p>
                                            <p><strong>License From</strong> {agencyDetail?.licenses[0]?.authority} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="breadcrumb-list">
                                    <ul className="list-items d-flex justify-content-end">
                                        <li>
                                            <img src={agencyDetail?.logo.url} alt="air-line-img" className="img-fluid" style={{
                                                width: '100%', 
                                                maxHeight: 100,
                                                margin: 'auto'
                                            }} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  

            <section>
                <div className="cd-main-content container mt-4">
                <div className='row'>
                            <div className="col-lg-12">
                                <div className="alert alert-success" role="alert">
                                    Property Listings for <strong style={{ textTransform: 'uppercase' }}>{agencyDetail.name}</strong>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-lg-12" id="markers">
                            <section data-ref="container" id="data">
                                <ul>
                                    {agencyListings.map((property) => <Property key={property.slug} property={property} />)}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/agencies/get-listings?agencySlug=${id}&hitsPerPage=6`);
    
    return {
      props: {
        agencyListings: data?.hits,
      },
    };
}

export default AgencyDetail