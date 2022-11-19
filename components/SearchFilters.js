import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { filterData, getFilterValues } from '../utils/filterData';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import { AutoComplete } from 'antd';

const SearchFilters = ({ page, setLoading, loading, rquery }) => {
    const [filters] = useState(filterData);
    const [searchTerm, setSearchTerm] = useState('');
    const [locationData, setLocationData] = useState();
    const [showLocations, setShowLocations] = useState(false);
    const router = useRouter();
    const path = router.pathname;
    //const { query } = router;
    //console.log("rquery", rquery);

    const searchProperties = (filterValues) => {
        
        setLoading(true);
    
        const values = getFilterValues(filterValues);
    
        values.forEach((item) => {
          if(item.value && filterValues?.[item.name]) {
            rquery[item.name] = item.value
          }
        });

        setLoading(false);
    
        /* if (page === '/search') {
            router.push({ pathname: page, query: query });
        } else{
            router.push({ pathname: path, query: query });
        } */
    };

    const submitForm = (e) => {
        e.preventDefault();

        router.push({ pathname: '/search', query: rquery });
    }

    useEffect(() => {
        if (searchTerm !== '') {
          const fetchData = async () => {
            setLoading(true);
            const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
            const locates = [];
            data?.hits?.map((location) => {
                locates.push({label: location.name, value: [location.externalID, location.name]})
            });
            setLocationData(locates);
            setLoading(false);
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
                                                <select name="city" className="city form-control" onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} defaultValue={rquery[filter.queryName] ? rquery[filter.queryName] : ""} required>
                                                    <option value="" disabled></option>
                                                    {filter?.items?.map((item) => {
                                                        //console.log(rquery[filter.queryName]);
                                                        return (
                                                            <option value={item.value} key={item.value}>
                                                                {item.name}
                                                            </option>)
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="col-md-4" style={{paddingBottom: 10}}>
                                <div className="input-wrapper">
                                    <button type="submit" id="submit" className="btn btn-primary mt-2 effect" data-style="zoom-in" onClick={ submitForm }><i className="mdi mdi-search"></i> Submit </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SearchFilters