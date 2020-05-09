import React from 'react';
import Timeline from '../timeline';

const EducationSection = () => {
    return (
        <>
            <div className="container">
                <h2 className="is-background-blue-text margin-l-r-5">Education<span role="img" aria-label="books">📚</span></h2>
                <div className="container__row">                
                    <Timeline/>
                </div>
            </div>
        </>
    );
}

export default EducationSection;