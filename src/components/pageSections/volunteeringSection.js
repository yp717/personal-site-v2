import React from 'react';

const VolunteeringSection = () => {
    return (
        <>
            <div className="container" style={{paddingBottom: '5%', paddingTop: '5%'}}>
                <h2 className="is-background-blue-text section-heading-margin">Volunteering<span role="img" aria-label="rocket">🚀</span></h2>
                <div className="container__row">
                    {/* Academic Representative */}
                    <div className="container__col-sm-12 is-white-bg content-card is-java-green-border">
                        <h2 className="is-background-blue-text card-heading">Third Year Academic Representative</h2>
                        <h3 className="is-background-blue-text card-heading">Imperial College London</h3>
                        <h4 className="is-background-blue-text card-date">June 2019 - Aug 2020</h4>
                        <p className="is-background-blue-text card-body">
                        Collaborated with the deparment on improving the academic aspects of the student experience in the department.
                        </p>
                    </div>

                    {/* Departmental Representative */}
                    <div className="container__col-sm-12 is-white-bg content-card is-java-green-border">
                        <h2 className="is-background-blue-text card-heading">Departmental Representative</h2>
                        <h3 className="is-background-blue-text card-heading">Imperial College London</h3>
                        <h4 className="is-background-blue-text card-date">June 2018 - Aug 2019</h4>
                        <p className="is-background-blue-text card-body">
                        Identified issues, led initiatives and raised awareness on areas affecting student academics, health, financial concerns, rela- tionships, equality, diversity and personal safety at Imperial.
                        </p>
                    </div>

                    {/* Half Marathon */}
                    <div className="container__col-sm-12 is-white-bg content-card is-java-green-border">
                        <h2 className="is-background-blue-text card-heading">Half Marathon to raise money for Alzheimer’s Research and Treatment</h2>
                        <h3 className="is-background-blue-text card-heading">Alzheimer’s Society</h3>
                        <h4 className="is-background-blue-text card-date">Date still missing here</h4>
                        <p className="is-background-blue-text card-body">
                        Raised over £300 by running a half marathon for the Alzheimer’s society. I plan on running again this year too!
                        </p>
                    </div>

                    {/* Music Society Involvement */}
                    <div className="container__col-sm-12 is-white-bg content-card is-java-green-border">
                        <h2 className="is-background-blue-text card-heading">Music society involvement</h2>
                        <h3 className="is-background-blue-text card-heading">Imperial College London</h3>
                        <h4 className="is-background-blue-text card-date">June 2017 - Present</h4>
                        <p className="is-background-blue-text card-body">
                        Active member of Jazz & Rock Society, Events Manager at Guitar Society and Bass, Baritone & Tenor at the Scopes (A Capella group), Original compositions & performances for large and small venues (largest audience: 5000 people)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VolunteeringSection;