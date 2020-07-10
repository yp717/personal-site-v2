import React from 'react';
import ContentCard from '../cards/contentCard';

const VolunteeringSection = () => {
    return (
        <>
            <div className="container padding-t-b-5 margin-10-b">
                <h2 className="is-background-blue-text pad-5-lr  margin-5-t">Volunteering<span role="img" aria-label="rocket">🚀</span></h2>
                <div className="row pad-5-lr pad-5-t">
                    {/* Academic Representative */}
                    <ContentCard 
                        title="Third Year Academic Representative"
                        subheading="Imperial College London"
                        date ="June 2019 - August 2020"
                        color="java-green"
                        description="Collaborated with the deparment on improving the academic aspects of the student experience in the department."
                    />
                
                    {/* Departmental Representative */}
                    <ContentCard 
                        title="Departmental Representative"
                        subheading="Imperial College London"
                        date ="June 2018 - August 2019"
                        color="java-green"
                        description="Identified issues, led initiatives and raised awareness on areas affecting student academics, health, financial concerns, rela- tionships, equality, diversity and personal safety at Imperial."
                    />

                    {/* Half Marathon */}
                    <ContentCard 
                        title="Half Marathon to raise money for Alzheimer’s Research and Treatment"
                        subheading="Alzheimer’s Society"
                        date ="October 2018"
                        color="java-green"
                        description="Raised over £300 by running a half marathon for the Alzheimer’s society. I plan on running again this year too!"
                    />

                    {/* Music Society Involvement */}
                    <ContentCard 
                        title="Music society involvement"
                        subheading="Imperial College London"
                        date="June 2017 - Present"
                        color="java-green"
                        description="Active member of Jazz & Rock Society, Events Manager at Guitar Society and Bass, Baritone & Tenor at the Scopes (A Capella group), Original compositions & performances for large and small venues (largest audience: 5000 people)"
                    />
                </div>
            </div>
        </>
    );
}

export default VolunteeringSection;