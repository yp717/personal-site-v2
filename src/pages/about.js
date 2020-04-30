import React from 'react';
import SEO from "../components/seo";
import Layout from '../components/layout';
import AchievementsSection from "../components/pageSections/achievementSection";
import EducationSection from "../components/pageSections/educationSection";
import ExperienceSection from "../components/pageSections/experienceSection";
import SkillsSection from "../components/pageSections/skillsSection";
import VolunteeringSection from "../components/pageSections/volunteeringSection";
import PageSection from "../components/pageSection";
// import FadeInSection from "../components/animations/fadeInSection";
import LegoSection from "../components/pageSections/legoSection";

const ContactPage = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />  
        <div className="container">
            <div className="container__row">
                
                <div className="container__col-sm-12" style={{paddingBottom: '20px'}}>
                    <h2 className="text-align-left is-background-blue-text">I've got a diverse set of software interests</h2>
                </div>
                <div className="container__col-sm-12" style={{paddingBottom: '20px'}}>
                    <LegoSection/>            
                </div>
                <div className="container__col-sm-12" style={{paddingBottom: '20px'}}>
                    <h1 className="text-align-left is-background-blue-text">Hi <span role="img" aria-label="wave">👋</span> I'm Yannis Panagis</h1>
                </div>
                <div className="container__col-sm-12">
                    <h2 className="text-align-left is-background-blue-text">Everyone hates writing an “about page”, right?!</h2>
                </div>
                <div className="container__col-sm-12 text-align-center">
                    <p className="text-align-left body-text is-background-blue-text">
                    It’s hard to summarise yourself in a few words. Hopefully this site is at least a short introduction. My Linkedin profile is a great place to learn a bit more about me if that’s more what you’re looking for. Otherwise continue on below for a quick intro OR keep going and check out my digital Resume below (also available in print).🤓
                    <br/>
                    <br/>
                    </p>
                </div>
                <div className="container__col-sm-12">
                    <h2 className="text-align-left is-background-blue-text">In <em>short</em></h2>
                </div>
                <div className="container__col-xs-12 text-align-center">
                    <p className="text-align-left body-text is-background-blue-text">
                    I’m currently a third year Electrical and Electornic Engineering student at Imperial College London 👨🏼‍🎓. I’m originally from Switzerland 🇨🇭and currently live in London 🇬🇧. Outside of work, I spend my free time working in web development, teaching, running and writing music. If you’d like to know more about my music, check out my spotify!🎸
                    <br/><br/>
                    I didn’t start coding at an early age. I had no idea what I wanted to do until I went to university and it’s been a crazy ride but I’m grateful to be where I am today. I recently accepted a software engineering internship at NextJump so I’m currently not looking for any new opportunities. That being said, I’m still always open to hearing about new ideas and excited to pursue new projects, learn, collaborate and build something awesome together. If that sounds like what you’re looking for head over to the contact page or reach out via any of the social links below!
                    </p>
                </div>
            </div>
        </div>

        <EducationSection/>
        <ExperienceSection/>
        <SkillsSection/>
        <AchievementsSection/> 
        <VolunteeringSection/>         
    </Layout>
);

export default ContactPage