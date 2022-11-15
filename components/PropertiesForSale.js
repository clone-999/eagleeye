import React from 'react';
import { NumericFormat } from 'react-number-format';
import PropertyForSale from './PropertyForSale';

const PropertiesForSale = ({ propertiesForSale }) => {
  return (
    <section className="destination-area section--padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <div className="section-heading">
                        <h2 className="sec__title_left left-line" style={{fontSize: 22}}>Featured Properties For Sale</h2>
                    </div>
                </div>
            </div>

            <div className="row padding-top-50px">
                {propertiesForSale.map((propertyForSale) => <PropertyForSale key={propertyForSale.slug} propertyForSale={propertyForSale} />)}
            </div>
        </div>
    </section>
  )
}

export default PropertiesForSale