import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import LegoYannisFront from '../images/LEGOs/lego-yannis-front.svg';
import SocialLinks from "../components/socialLinks";
const IndexPage = () => (  
  <>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
  <Layout>
    <div className="container">
      <div className="container__col-sm-12 text-align-center">
          <div>
            <img 
              src={LegoYannisFront} 
              style={{height: '24vh'}} 
              alt="lego-icon-front"
            />
              <p className="is-greeting-blue-text greeting-text">
                Hi <span role="img" aria-label="wave">👋</span>, my name is
              </p>         
              <h1 className="is-background-blue-text margin-t-b-0" style={{fontSize: '2.8em', fontFamily: 'Lato-Bold'}}>Yannis Panagis</h1>
              <h2 className="hero-tagline-text is-background-blue-text text-align-center">Engineer. Designer. Developer. Student.</h2>
              <SocialLinks/>
          </div>
      </div>
    </div>
  </Layout>
  </>
);

export default IndexPage
