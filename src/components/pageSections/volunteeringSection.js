import React from 'react';
import ContentCard from '../cards/contentCard';
import Volunteering from '../../data/volunteering.json';

const VolunteeringSection = () => {
    return (    
        <div className="container padding-t-b-5 margin-10-b">
            <h2 className="is-background-blue-text pad-5-lr  margin-5-t">Volunteering<span role="img" aria-label="rocket">🚀</span></h2>
            <div className="row pad-5-lr pad-5-t">
                {
                    Volunteering.map((activity) => (
                        <ContentCard 
                            title={activity.title}
                            subheading={activity.subheading}
                            date ={activity.date}
                            color={activity.color}
                            description={activity.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default VolunteeringSection;