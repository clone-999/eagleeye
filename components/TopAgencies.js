import React from 'react'

const TopAgencies = ({ topAgencies }) => {
  return (
    <section className="round-trip-flight section--padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading text-center">
                        <h2 className="sec__title line-height-55 bottom-line">Top Agencies</h2>
                    </div>
                </div>
            </div>

            <div className="row padding-top-50px">
                <div className="col-lg-12">
                    <div className="popular-round-trip-wrap padding-top-40px">
                        <div className="tab-content" id="myTabContent4">
                            <div className="tab-pane fade show active" id="new-york" role="tabpanel" aria-labelledby="new-york-tab">
                                <div className="row">
                                    {topAgencies.map((topAgency) => (
                                        <div key={topAgency.slug} className="col-lg-4 responsive-column">
                                            <a href={`/agency/${topAgency.slug}`}>
                                                <div className="deal-card">
                                                    <div className="row" style={{
                                                        display: 'flex', 
                                                        justifyContent: 'center',  
                                                        alignItems: 'center', 
                                                        width: '100%'
                                                    }}>
                                                        <div className="col-5" style={{
                                                            background: '#e4e8ef', 
                                                            height: '100%', 
                                                            alignItems: 'center', 
                                                            justifyContent: 'center', 
                                                            display: 'flex', 
                                                            borderRadius: 6
                                                        }}>
                                                            <div className="deal-title d-flex align-items-center">
                                                                <div className="clear"></div>
                                                                <img src={topAgency.logo.url} alt="air-line-img" className="img-fluid" style={{
                                                                    width: '80%', 
                                                                    maxHeight: 50,
                                                                    margin: 'auto'
                                                                }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-7">
                                                            <h6>{ topAgency.name }</h6>
                                                            <hr />
                                                            <h3 className="deal__title">Agents <i className="la la-arrow-right mx-2"></i> { topAgency.agentsCount }</h3>
                                                            <div className="deal-action-box d-flex align-items-center justify-content-between pt-1">
                                                                <div className="price-box d-flex align-items-center">
                                                                    <span className="price__from mr-1">Properties:</span> <span className="price__num">{topAgency.stats.adsCount}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="tab-content-info d-flex justify-content-between align-items-center">
                            <p className="font-size-15"><i className="la la-question-circle mr-1"></i>Average round-trip price per person, taxes and fees included.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopAgencies