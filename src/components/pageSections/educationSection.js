import React from 'react';
import Timeline from '../timeline';

const EducationSection = () => {
    return (
        <>
            <div className="container" style={{paddingTop: '3%'}}>
                <h2 className="is-background-blue-text">Education</h2>
                <div className="container__row">                
                    <Timeline/>
                </div>
            </div>
        </>
    );
}

export default EducationSection;