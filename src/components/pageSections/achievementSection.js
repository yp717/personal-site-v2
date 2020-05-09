import React from 'react';

const AchievementsSection = () => {
    return (
        <>
            <div className="container padding-t-b-2">
                <h2 className="is-background-blue-text margin-l-r-5">Achievements<span role="img" aria-label="trophy">🏆</span></h2>
                <div className="container__row">
                    {/* IC Hack winner */}
                    <div className="container__col-sm-12 is-white-bg content-card is-green-border">
                        <h2 className="is-background-blue-text">IC Hack winner</h2>
                        <h3 className="is-background-blue-text">Achievement Date</h3>
                        <p className="is-background-blue-text">
                        Collaborated to build and design a long-range, instant supermarket checkout system using UHF RFID in only 24 hours and won first place overall. The project integrated a JAVA based back-end with an SQL database, a web-app developed with Javascript, and a laser-cut and 3D-printed structural framework controlled by ultrasonic sensors, servos, an Arduino, and Raspberry Pi using Python and C++.
                        </p>
                    </div>

                    {/* Old Centralian Trust Scholarship */}
                    <div className="container__col-sm-12 is-white-bg content-card is-green-border">
                        <h2 className="is-background-blue-text">Old Centralian Trust Scholarship</h2>
                        <h3 className="is-background-blue-text">Achievement Date</h3>
                        <p className="is-background-blue-text">
                        Scholarship for summer exchange at Stanford University
                        </p>
                    </div>

                    {/* Gulf Finance House Leadership Award */}
                    <div className="container__col-sm-12 is-white-bg content-card is-green-border">
                        <h2 className="is-background-blue-text">Gulf Finance House Leadership Award</h2>
                        <h3 className="is-background-blue-text">Achievement Date</h3>
                        <p className="is-background-blue-text">
                        $5000 Scholarship for exemplary community impact, academic excellence and leadership
                        </p>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default AchievementsSection;