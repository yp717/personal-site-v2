import React from 'react';
import { Emojione } from "react-emoji-render"

import SEO from "../components/seo";
import Layout from '../components/layout';
import AchievementsSection from "../components/pageSections/achievementSection";
import EducationSection from "../components/pageSections/educationSection";
import ExperienceSection from "../components/pageSections/experienceSection";
import SkillsSection from "../components/pageSections/skillsSection";
import VolunteeringSection from "../components/pageSections/volunteeringSection";

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />  
        <div className="container row margin-10-t">
            <div className="col-sm-12 pad-5-lr">
                <h1 className="text-align-left is-background-blue-text">In <em>short</em></h1>
            </div>
            <div className="col-sm-12 pad-5-lr">
                <p className="text-align-left is-background-blue-text margin-4-t margin-4-b">
                    I’m currently a third year MEng Electrical and Electronic Engineering student at Imperial College London. I’m originally from Switzerland <Emojione text="🇨🇭" /> and currently live in London <Emojione text="🇬🇧" />.
                </p>
                <p className="text-align-left is-background-blue-text margin-4-b">
                    The tools I use daily in my work are HTML, CSS/SASS, JavaScript, Python, Tensorflow, and Git, but I have some experience with Express, MATLAB, SciKit, F#, and SQL. My current goal is to strengthen my programming fundamentals, improve my web development (vanilla JavaScript and React in particular) and machine learning. I also want to continue to build more personal projects for fun and become more familiar with the different tools and technology across the frontend and the backend. Currently, I'm most excited about the JAM stack eco-system.
                </p>
                <p className="text-align-left is-background-blue-text">
                    When I'm not in front of a computer, I'm probably running or writing music. 
                </p>
            </div>  
            <div className="col-sm-12 pad-5-lr margin-5-t">
                <h1 className="text-align-left is-background-blue-text">The <em>long</em> version</h1>
            </div>
        </div>
        
        <EducationSection/> 
        <ExperienceSection/>
        <SkillsSection/>
        <AchievementsSection/> 
        <VolunteeringSection/>         
    </Layout>
);

export default AboutPage;