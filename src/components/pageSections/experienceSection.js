import React from 'react';
import ContentCard from '../cards/contentCard';

const ExperienceSection = () => {
    return (
        <>
        <div className="container">
        <h2 className="is-background-blue-text pad-5-lr">Experience<span role="img" aria-label="nerd">🤓</span></h2>
            <div className="row pad-5-lr pad-5-t">
                {/* experience: Private Tutoring*/}
                <ContentCard 
                    title="Private Tutoring"
                    subheading="Self-organised"
                    date ="June 2019 - Present"
                    color="red-orange"
                    description="Tutoring A-Level, GCSE and University students in Python, Computer Science concepts, Mathematics and English Literature."
                />
                 
                {/* experience: American Express*/}
                <ContentCard 
                    title="Technology Summer Intern"
                    subheading="American Express"
                    date ="June 2019 - August 2019"
                    color="red-orange"
                    description="Designed, developed and put in production a fully functional research archive solution with ReactJS, GatsbyJS, ExpressJS, and python for the machine learning based backend. Participated in design sprints to determine product requirements, develop wireframes, prototype UX/UI designs"
                />

                {/* experience: Firetech Camp Tutor */}
                <ContentCard 
                    title="Firetech Camp Tutor"
                    subheading="Firetech"
                    date ="June 2019 - Present"
                    color="red-orange"
                    description="Teaching courses to young students to explore coding, robotics, app design, making electronics and more during term-time"
                />

                {/* experience: Corporate Investment Intern*/}
                <ContentCard 
                    title="Corporate Investment Intern"
                    subheading="Investcorp B.S.C."
                    date ="June 2016 - August 2016"
                    color="red-orange"
                    description="Analysed corporate financial data to build models to examine companies and markets to determine investment viability for 10 potential acquisitions"
                />
            </div>
        </div>
        </>
    );
}

export default ExperienceSection;