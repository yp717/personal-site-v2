import React from 'react';
import Timeline from '../timeline';
import { Emojione } from "react-emoji-render"

const EducationSection = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="is-background-blue-text pad-5-lr margin-5-t">Education <Emojione text="📚" /></h2>
                    <div className="col-xs-12">
                        <Timeline/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationSection;