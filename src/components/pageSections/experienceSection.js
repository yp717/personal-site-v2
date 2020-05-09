import React from 'react';
import ExperienceCard from '../cards/ExperienceCard';

const ExperienceSection = () => {
    return (
        <>
        <div className="container padding-top-bottom-3">
        <h2 className="is-background-blue-text margin-left-right-5">Experience<span role="img" aria-label="nerd">🤓</span></h2>
            <div className="container__row">
                {/* experience: Private Tutoring*/}
                <div
                    data-sal="flip-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="300"
                >
                    <ExperienceCard 
                        title="Private Tutoring"
                        subheading="Self-organised"
                        date ="June 2019 - Present"
                        description="Tutoring A-Level, GCSE and University students in Python, Computer Science concepts and Mathematics."
                    />
                </div>
                
                {/* experience: American Express*/}
                <div
                    data-sal="flip-left"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="300"
                >
                    <ExperienceCard 
                        title="Technology Summer Intern"
                        subheading="American Express"
                        date ="June 2019 - Aug 2019"
                        description="Designed, developed and put in production a fully functional research archive solution with ReactJS, GatsbyJS, ExpressJS, and python for the machine learning based backend. Participated in design sprints to determine product requirements, develop wireframes, prototype UX/UI designs"
                    />
                </div>

                {/* experience: Firetech Camp Tutor */}
                <div
                    data-sal="flip-down"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="300"
                >
                    <ExperienceCard 
                        title="Firetech Camp Tutor"
                        subheading="Firetech"
                        date ="June 2019 - ongoing"
                        description="Teaching courses to young students to explore coding, robotics, app design, making electronics and more during term-time"
                    />
                </div>

                <div
                    data-sal="flip-right"
                    data-sal-delay="300"
                    data-sal-duration="300"
                    data-sal-easing="ease"
                >
                    {/* experience: Corporate Investment Intern*/}
                    <ExperienceCard 
                        title="Corporate Investment Intern"
                        subheading="Investcorp B.S.C."
                        date ="June 2016 - Aug 2016"
                        description="Analysed corporate financial data to build models to examine companies and markets to determine investment viability for 10 potential acquisitions"
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default ExperienceSection;