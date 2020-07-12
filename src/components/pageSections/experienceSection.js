import React from 'react';
import ContentCard from '../cards/contentCard';
import Experience from '../../data/experience.json';

const ExperienceSection = () => {
    return (
        <>
        <div className="container">
        <h2 className="is-background-blue-text pad-5-lr">Experience<span role="img" aria-label="nerd">🤓</span></h2>
            <div className="row pad-5-lr pad-5-t">
                {
                    Experience.map((experience) => (
                        <ContentCard 
                            title={experience.title}
                            subheading={experience.subheading}
                            date={experience.date}
                            color={experience.color}
                            description={experience.description}
                        />
                    ))
                }
            </div>
        </div>
        </>
    );
}

export default ExperienceSection;