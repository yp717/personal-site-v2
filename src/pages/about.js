import React from 'react';
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
        <div className="container margin-t-5">
            <div className="container__col-sm-12">
                <h1 className="text-align-left is-background-blue-text margin-l-r-5">In <em>short</em></h1>
            </div>
            <div className="container__col-xs-12">
                <p className="text-align-left is-background-blue-text margin-l-r-5">
                I’m currently a third year MEng Electrical and Electornic Engineering student at Imperial College London <span role="img" aria-label="student graduate">👨🏼‍🎓</span>. I’m originally from Switzerland <span role="img" aria-label="swiss flag">🇨🇭</span>and currently live in London 🇬🇧.
                <br/><br/>
                I didn’t start coding at an early age. I had no idea what I wanted to do until I went to university and it’s been a crazy ride but I’m grateful to be where I am today. I recently accepted a software engineering internship at NextJump so I’m currently not looking for any new opportunities. That being said, I’m still always open to hearing about new ideas and excited to pursue new projects, learn, collaborate and build something awesome together. If that sounds like what you’re looking for reach out via social media to get in touch!
                <br/><br/>
                The tools I use daily in my work are HTML, CSS/SASS, JavaScript, Python, Tensorflow, and Git, but I have some experience with Express, MATLAB, SciKit, F#, and SQL. My current goal is to strengthen my programming fundamentals, improve my web development (vanilla JavaScript and React in particular) and machine learning. I also want to continue to build more personal projects for fun and become more familiar with the different tools and technology across the frontend and the backend. Currently, I'm most excited about the JAMstack ecoysystem.
                <br/><br/>
                When I'm not in front of a computer, I'm probably running or writing music. 
                </p>
            </div>            
            <div className="container__col-sm-12 margin-b-3">
                <h1 className="text-align-left is-background-blue-text margin-l-r-5 padding-t-2">The <em>long</em> version</h1>
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