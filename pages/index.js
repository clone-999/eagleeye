import { useState, useEffect } from "react";
import styles from './Index.module.css';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import TopAgencies from "../components/TopAgencies";
import PropertiesForRent from "../components/PropertiesForRent";
import PropertiesForSale from "../components/PropertiesForSale";
import SearchFilters from "../components/SearchFilters";

const Index = ({ propertiesForSale, propertiesForRent, topAgencies }) => {
  
    return (
      <>
        <section className="hero-wrapper">
          <div className="hero-box hero-bg active" data-bg="/assets/img/slider/bg1.jpg" style={{
            minHeight: 371,
            backgroundAttachment: 'fixed',
            backgroundImage: 'url(/assets/img/slider/bg1.jpg)',
            backgroundSize: 'contain'
          }}> 
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mx-auto responsive--column-l">

                  <div className="hero-content pb-4">
                    <div className="section-heading">
                      
                    </div>
                  </div>

                  <div className="section-tab fade-in glass" style={{minHeight: 167}}>
                    <ul className="nav nav-tabs listitems" id="Tab" role="tablist">
                      <li data-position="1" className="nav-item" role="presentation">
                        <button className="nav-link active" id="hotels-tab" data-bs-toggle="tab" data-bs-target="#hotels" type="button" role="tab" aria-controls="hotels" aria-selected="false" >
                          <span className="d-xl-none d-lg-none">
                            <i className="la la-hotel mx-1"></i>
                          </span>
                          <span className="d-none d-lg-block d-xl-block">
                            <i className="la la-hotel mx-1"></i>
                            Properties
                          </span>
                        </button>
                      </li>
                    </ul>

                    <SearchFilters page={'none'} />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-area info-bg padding-top-50px padding-bottom-50px text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="icon-box">
                  <div className="info-icon">
                      <i className="la la-bullhorn"></i>
                  </div>
                  <div className="info-content">
                      <h4 className="info__title">You'll never roam alone</h4>
                      <p className="info__desc">
                        Find best apartment services and book them instantly
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="icon-box">
                  <div className="info-icon">
                      <i className="la la-globe"></i>
                  </div>
                  <div className="info-content">
                      <h4 className="info__title">Travel to anytime, anywhere</h4>
                      <p className="info__desc">
                        No limits and boundaries for your next destination
                      </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="icon-box">
                  <div className="info-icon">
                      <i className="la la-thumbs-up"></i>
                  </div>
                  <div className="info-content">
                      <h4 className="info__title">Ease of mind, search filter and book</h4>
                      <p className="info__desc">
                        Let's help you find best travel deals and offers today
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TopAgencies topAgencies={topAgencies} />
        <PropertiesForRent propertiesForRent={propertiesForRent}/>
        <PropertiesForSale propertiesForSale={propertiesForSale} />
      </>
    );
  };

  export async function getStaticProps() {
    const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
    const topAgencies = await fetchApi(`${baseUrl}/agencies/list?query=dubai&hitsPerPage=9&page=0&lang=en`);
  
    return {
      props: {
        propertiesForSale: propertiesForSale?.hits,
        propertiesForRent: propertiesForRent?.hits,
        topAgencies: topAgencies?.hits
      },
    };
  }

  export default Index;