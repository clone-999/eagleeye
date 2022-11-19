import { useState } from 'react';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import { SyncOutlined } from "@ant-design/icons";
import Property from '../components/Property';

const Search = ({ properties, rquery }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <section className="breadcrumb-area bread-bg-7 hotels">
                <section className="container" style={{borderRadius:10, padding:'50px 0'}}>
                    <div className="container">
                        <h2 className="text-center" style={{color:'#fff'}}>Search Your Dream Apartment</h2>
                        <br />
                        <div style={{padding:'50px 20'}} id="fadein">
                            <SearchFilters page={'none'} setLoading={setLoading} loading={loading} rquery={rquery} />
                        </div>
                    </div>
                </section>
            </section>

            {loading && 
                <section>
                    <div className="cd-main-content container mt-4">
                        <div className="row text-center">
                            <div className="col-md-12 pb-5">
                                <div className="d-flex justify-content-center p-5">
                                    <SyncOutlined spin className="display-1 text-danger p-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}

                {!loading && <section>
                <div className="cd-main-content container mt-4">
                    <div className="row">
                        <div className="col-lg-12" id="markers">
                            <section data-ref="container" id="data">
                                <ul>
                                    {properties.map((property) => <Property key={property.slug} property={property} />)}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            }
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
        rquery: query
      },
    };
}

export default Search