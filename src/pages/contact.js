import React from 'react';
import SEO from "../components/seo";
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';

const ContactPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
        <div className="container padding-top-10">
            <div className="container__row">
                <div className="container__col-sm-12 text-align-center margin-left-right-5">
                    <h2 className="text-align-center is-background-blue-text">Get in touch. <span role="img" aria-label="down-arrow">👇</span></h2>
                </div>
                <div className="container__col-sm-12 text-align-center margin-left-right-5">
                    <p className="text-align-center is-background-blue-text">
                        Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!
                    </p>
                </div>
                <ContactForm/>
            </div>
        </div>
    </Layout>
);

export default ContactPage;