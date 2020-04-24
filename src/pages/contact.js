import React from 'react';
import SEO from "../components/seo";
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';

const ContactPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
        <div className="container" style={{paddingTop: '150px'}}>
            <div className="container__row" style={{display: "block"}}>
                <div className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12 text-align-center">
                    <h2 className="text-align-center">Get in touch. <span role="img" aria-label="down-arrow">👇</span></h2>
                </div>
                <div className="container__col-lg-12 container__col-md-12 container__col-sm-12 container__col-xs-12 text-align-center">
                    <p className="text-align-center">
                        Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!
                    </p>
                </div>
                <ContactForm/>
            </div>
        </div>
    </Layout>
);

export default ContactPage