import React from 'react';
import Timeline from '../timeline';

const EducationSection = () => {
    return (
        <>
            <div className="container" style={{paddingTop: '5%'}}>
                <h1 className="is-background-blue-text">Education</h1>
                <div className="container__row">                
                    <Timeline/>
                </div>
            </div>
        </>
    );
}

export default EducationSection;