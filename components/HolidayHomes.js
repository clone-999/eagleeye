import React, { useState } from 'react';
import HolidayHome from './HolidayHome';

const HolidayHomes = ({ holidayHomes }) => {
  return (
    <section className="hotel-area section-bg section-padding overflow-hidden padding-right-100px padding-left-100px">
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-heading text-center">
                    <h2 className="sec__title line-height-55 bottom-line">Discover Holiday Homes & Hotels</h2>
                </div>
            </div>
        </div>

        <div className="row padding-top-50px">
          <div className="col-lg-12">
            <div className="hotel-card-wrap">
              <div className="hotel-card-carousel">
                <div className="row">
                  {holidayHomes.map((holidayHome) => <HolidayHome key={holidayHome.id} holidayHome={holidayHome} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HolidayHomes