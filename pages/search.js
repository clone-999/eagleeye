import { useState } from 'react';
import { useRouter } from 'next/router';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import { NumericFormat } from 'react-number-format';

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <>
            <section className="breadcrumb-area bread-bg-7 hotels">
                <section className="container" style={{borderRadius:10, padding:'50px 0'}}>
                    <div className="container">
                        <h2 className="text-center" style={{color:'#fff'}}>Search Your Dream Apartment</h2>
                        <br />
                        <div style={{padding:'50px 20'}} id="fadein">
                            <SearchFilters page={'none'} />
                        </div>
                    </div>
                </section>
            </section>

            <section>
                <div className="cd-main-content container mt-4">
                    <div className="row">
                        <div className="col-lg-12" id="markers">
                            <section data-ref="container" id="data">
                                <ul>
                                    {properties.map((property) => (
                                        <li key={property.slug} className="mix stars_3 hotels_amenities_" data-a="898" data-b="" id="apartment">
                                            <div className="card-item card-item-list marker-link row row-rtl item hotelslist">
                                                <div className="card-img">
                                                    <a href="#" className="d-block">
                                                        <img src={property.coverPhoto.url} loading="lazy" className="main-img" alt="thumbnail"  data-expand="-20" />
                                                    </a>
                                                </div>

                                                <div className="card-body p-0">
                                                    <div className="row g-0">
                                                        <div className="col-8 px-4 p-3">
                                                            <h3 className="card-title">{property.title}</h3>
                                                            <p className="card-meta">
                                                                <i className="la la-map-marker"></i> 
                                                                {property.location[0].name}, {property.location[1].name}, {property.location[2].name}</p>
                                                            <a className="ellipsisFIX go-text-right mob-fs14" href="#" onClick={ () => false } title="dubai"></a>

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
                                                                <p className="mb-1">{property?.rentFrequency}</p>
                                                                <a href="#" className="more_details effect mt-0 btn-block" data-style="zoom-in">Details<i className="la la-angle-right"></i>
                                                                </a>
                                                                <span className="badge badge-success mt-2 btn-block">{property.agency.name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
}

export default Search