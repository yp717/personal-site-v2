import React from 'react';
import ContentCard from '../cards/contentCard';
import Achievements from '../../data/achievements.json';

const AchievementsSection = () => {
    return (
        <>
            <div className="container">
                <h2 className="is-background-blue-text pad-5-lr margin-5-t">Achievements<span role="img" aria-label="trophy">🏆</span></h2>
                <div className="row pad-5-lr pad-5-t">
                    {
                        Achievements.map((achievement) => (
                            <ContentCard 
                                title={achievement.title}
                                subheading={achievement.subheading}
                                date ={achievement.date}
                                color={achievement.color}
                                description={achievement.description}
                            />
                        ))
                    }
                </div>
            </div>    
        </>
    );
}

export default AchievementsSection;