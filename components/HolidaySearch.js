import React, {useState, useEffect} from 'react';
import { AutoComplete } from 'antd';
import { airBaseUrl, airFetchApi } from '../utils/fetchApi';
import { useRouter } from 'next/router';

const HolidaySearch = ({setLoading, loading, rquery}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [locationData, setLocationData] = useState([]);
    const [destinationId, setDestinationId] = useState();
    const router = useRouter();

    useEffect(() => {
        if (searchTerm !== '') {
            const fetchData = async () => {
                try {
                    const data = await airFetchApi(`${airBaseUrl}/v1/hotels/locations?name=${searchTerm}&locale=en-gb`);
                    const locates = [];
                    data?.map((location) => {
                        locates.push({label: location.label, value: [location.dest_id, location.label]})
                    });
                    setLocationData(locates);
                } catch(error){
                    //
                }
            };
    
            fetchData();
        }
    }, [searchTerm]);

    const submitSearch = (e) => {
        e.preventDefault();
        router.push(`/holsearch?dest_id=${destinationId}`);
    }

    return (
        <div className="tab-content search-fields-container search_area search_tabs" id="TabContent">
            <div className="tab-pane active" id="hotels" role="hotels" aria-labelledby="hotels-tab">
                <form id="hotels-search" method="post">
                    <div className="main_search contact-form-action">
                        <div className="row g-1">
                            <div className="col-md-8" style={{paddingBottom: 10, paddingTop: 5}}>
                                <div className="input-wrapper">
                                    <span className="label-text">Search Holiday Home or Hotel</span>
                                    <div className="form-group">
                                        <span className="la la-map-marker form-icon"></span>
                                        <div className="input-items">
                                            <AutoComplete
                                                value={searchTerm}
                                                options={locationData}
                                                className="city form-control"
                                                onSelect={(value) => {
                                                    setSearchTerm(value[1]);
                                                    setDestinationId(value[0])
                                                }}
                                                onChange={(value) => setSearchTerm(value)}
                                                placeholder="Find holiday home or hotel"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4" style={{paddingBottom: 10, paddingTop: 25}}>
                                <div className="input-wrapper">
                                    <button type="submit" className="btn btn-primary mt-2 effect" data-style="zoom-in" onClick={ submitSearch }><i className="mdi mdi-search"></i> Search </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HolidaySearch