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
        <div className="container">
            <div className="container__col-sm-12">
                <h2 className="text-align-left is-background-blue-text margin-left-right-5">In <em>short</em></h2>
            </div>
            <div className="container__col-xs-12">
                <p className="text-align-left is-background-blue-text margin-left-right-5">
                I’m currently a third year Electrical and Electornic Engineering student at Imperial College London <span role="img" aria-label="student graduate">👨🏼‍🎓</span>. I’m originally from Switzerland <span role="img" aria-label="swiss flag">🇨🇭</span>and currently live in London 🇬🇧. Outside of work, I spend my free time working in web development, teaching, running and writing music. If you’d like to know more about my music, check out my spotify! <span role="img" aria-label="guitar">🎸</span>
                <br/><br/>
                I didn’t start coding at an early age. I had no idea what I wanted to do until I went to university and it’s been a crazy ride but I’m grateful to be where I am today. I recently accepted a software engineering internship at NextJump so I’m currently not looking for any new opportunities. That being said, I’m still always open to hearing about new ideas and excited to pursue new projects, learn, collaborate and build something awesome together. If that sounds like what you’re looking for head over to the contact page or reach out via social media to get in touch!
                </p>
            </div>            
            <div className="container__col-sm-12 margin-bottom-3">
                <h2 className="text-align-left is-background-blue-text margin-left-right-5 padding-top-2">The <em>long</em> version</h2>
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