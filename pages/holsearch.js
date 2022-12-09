import { useState } from 'react';
import SearchFilters from '../components/SearchFilters';
import { airBaseUrl, airFetchApi, baseUrl, fetchApi } from '../utils/fetchApi';
import { SyncOutlined } from "@ant-design/icons";
import Property from '../components/Property';
import HolidaySearch from '../components/HolidaySearch';
import HolidayHomeRow from '../components/HolidayHomeRow';

const HolSearch = ({ holidayHomes, rquery }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <section className="breadcrumb-area bread-bg-7 hotels">
                <section className="container" style={{borderRadius:10, padding:'50px 0'}}>
                    <div className="container">
                        <h2 className="text-center" style={{color:'#fff'}}>Search Holiday Homes or Hotels</h2>
                        <br />
                        <div style={{padding:'50px 20'}} id="fadein">
                            <HolidaySearch setLoading={setLoading} loading={loading} rquery={rquery} />
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
                                    {holidayHomes.map((holidayHome) => <HolidayHomeRow key={holidayHome.hotel_id} holidayHome={holidayHome} />)}
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
  
    const data = await await airFetchApi(`${airBaseUrl}/v2/hotels/search?units=metric&adults_number=1&checkout_date=2022-12-12&filter_by_currency=AED&checkin_date=2022-12-11&locale=en-gb&dest_id=${query.dest_id}&order_by=popularity&dest_type=hotel&room_number=1&page_number=0&include_adjacency=true`);
  
    return {
      props: {
        holidayHomes: data?.result,
        rquery: query
      },
    };
}

export default HolSearch