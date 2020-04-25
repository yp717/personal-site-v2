import React from 'react';
import SEO from "../components/seo";
import Layout from '../components/layout';
import SocialLinks from "../components/socialLinks";

const ContactPage = () => (
    <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />  
        <div className="container page-wrap" style={{paddingTop: '150px'}}>
            <div className="container__row" style={{display: "block"}}>
                <div className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12">
                    <h1 className="text-align-left">Hi <span role="img" aria-label="wave">👋</span> I'm Yannis Panagis</h1>
                </div>
                <div className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12 text-align-center">
                    <p className="text-align-left body-text">
                    I’m currently a third year Electrical and Electornic Engineering student at Imperial College London 👨🏼‍🎓. I’m originally from Switzerland 🇨🇭and currently live in London 🇬🇧. Outside of work, I spend my free time working in web development, teaching, running and writing music. If you’d like to know more about my music, check out my spotify!🎸
                    </p>
                </div>
                <div className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12">
                    <h2 className="text-align-left">Everyone hates writing an “about page”, right?!</h2>
                </div>
                <div className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12 text-align-center">
                    <p className="text-align-left body-text">
                    It’s hard to summarise yourself in a few words. Hopefully this site is at least a short introduction. My Linkedin profile is a great place to learn a bit more about me if that’s more what you’re looking for. Otherwise continue on below for a quick intro OR check out my digital Resume here (also available in print)🤓.
                    </p>
                </div>

                <div className="container__col-sm-12">
                    <h2 className="text-align-left">In short</h2>
                </div>
                <div className="container__col-sm-12 text-align-center">
                    <p className="text-align-left body-text">
                    I didn’t start coding at an early age. I had no idea what I wanted to do until I went to university and it’s been a crazy ride but I’m grateful to be where I am today. I recently accepted a software engineering internship at NextJump so I’m currently not looking for any new opportunities. That being said, I’m still always open to hearing about new ideas and excited to pursue new projects, learn, collaborate and build something awesome together. If that sounds like what you’re looking for head over to the contact page or reach out via any of the social links below!
                    </p>
                </div>
                <div className="container__col-sm-12">
                <SocialLinks/>
              </div>   
            </div>
        </div>
    </Layout>
);

export default ContactPage