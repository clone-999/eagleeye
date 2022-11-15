import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { filterData, getFilterValues } from '../utils/filterData';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import { AutoComplete } from 'antd';

const SearchFilters = ({ page }) => {
    const [filters] = useState(filterData);
    const [searchTerm, setSearchTerm] = useState('');
    const [locationData, setLocationData] = useState();
    const [showLocations, setShowLocations] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
    
        const values = getFilterValues(filterValues)
    
        values.forEach((item) => {
          if(item.value && filterValues?.[item.name]) {
            query[item.name] = item.value
          }
        })

        router.push({ pathname: '/search', query: query });
    
        /* if (page === '/search') {
            router.push({ pathname: page, query: query });
        } else{
            router.push({ pathname: path, query: query });
        } */
    };

    useEffect(() => {
        if (searchTerm !== '') {
          const fetchData = async () => {
            setLoading(true);
            const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
            const locates = [];
            data?.hits?.map((location) => {
                locates.push({label: location.name, value: [location.externalID, location.name]})
            });
            setLoading(false);
            setLocationData(locates);
          };
    
          fetchData();
        }
    }, [searchTerm]);


    return (
        <div className="tab-content search-fields-container search_area search_tabs" id="TabContent">
            <div className="tab-pane active" id="hotels" role="hotels" aria-labelledby="hotels-tab">
            
                <form id="hotels-search" method="post">
                    <div className="main_search contact-form-action">
                        <div className="row g-1">
                        <div className="col-md-4" style={{paddingBottom: 10}}>
                                <div className="input-wrapper">
                                    <span className="label-text">Search Location</span>
                                    <div className="form-group">
                                        <span className="la la-map-marker form-icon"></span>
                                        <div className="input-items">
                                            <AutoComplete
                                                value={searchTerm}
                                                options={locationData}
                                                className="city form-control"
                                                onSelect={(value) => {
                                                    setSearchTerm(value[1]);
                                                    searchProperties({ locationExternalIDs: value[0] });
                                                }}
                                                onChange={(value) => setSearchTerm(value)}
                                                placeholder="Find location"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {filters?.map((filter) => (
                                <div key={filter.queryName} className="col-md-2" style={{paddingBottom: 10}}>
                                    <div className="input-wrapper">
                                        <span className="label-text">{filter.queryName}</span>
                                        <div className="form-group">
                                            <span className="la la-map-marker form-icon"></span>
                                            <div className="input-items">
                                                <select name="city" className="city form-control" onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} required>
                                                    {filter?.items?.map((item) => (
                                                        <option value={item.value} key={item.value}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SearchFilters