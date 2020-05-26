import React from 'react';
import ContentCard from '../cards/contentCard';

const AchievementsSection = () => {
    return (
        <>
            <div className="container">
                <h2 className="is-background-blue-text pad-5-lr">Achievements<span role="img" aria-label="trophy">🏆</span></h2>
                <div className="row pad-5-lr pad-5-t">
                    {/* IC Hack winner */}
                    <ContentCard 
                        title="IC Hack winner"
                        subheading="Imperial College London"
                        date="Achievement Date"
                        color="green"
                        description="Collaborated to build and design a long-range, instant supermarket checkout system using UHF RFID in only 24 hours and won first place overall. The project integrated a JAVA based back-end with an SQL database, a web-app developed with Javascript, and a laser-cut and 3D-printed structural framework controlled by ultrasonic sensors, servos, an Arduino, and Raspberry Pi using Python and C++."
                    />
                    
                    {/* is-green-border */}

                    {/* Old Centralian Trust Scholarship */}
                    <ContentCard 
                        title="Old Centralian Trust Scholarship"
                        subheading="Imperial College London"
                        date ="Achievement Date"
                        description="Scholarship for summer exchange at Stanford University"
                        color="green"
                    />
                    
                    {/* Gulf Finance House Leadership Award */}
                    <ContentCard 
                        title="Gulf Finance House Leadership Award"
                        subheading="British School of Bahrain"
                        date ="Achievement Date"
                        color="green"
                        description="$5000 Scholarship for exemplary community impact, academic excellence and leadership"
                    />
                </div>
            </div>    
        </>
    );
}

export default AchievementsSection;