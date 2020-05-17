import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import LegoYannisFront from '../images/LEGOs/lego-yannis-front.svg';
import ReactRotatingText from 'react-rotating-text';

// import SocialLinks from "../components/socialLinks";
const IndexPage = () => (  
  <>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />     
  <Layout style={{zIndex: '99'}}>
    <div className="container">
      <div className="container__col-sm-12 text-align-center">
          <div className="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div style={{zIndex: '99'}}>
            <img 
              src={LegoYannisFront} 
              style={{height: '24vh'}} 
              alt="lego-icon-front"
            />
              <p className="is-greeting-blue-text greeting-text">
                Hi, my name is
              </p>         
              <h1 className="is-background-blue-text margin-t-b-0" style={{ fontSize: '2.8em' }}>Yannis Panagis</h1>
              <h2 className="hero-tagline-text is-background-blue-text text-align-center">
                {/* <ReactRotatingText items={['Engineer.', 'Designer.', 'Developer.', 'Student.', 'Engineer. Designer. Developer. Student.']} style={{animationIterationCount: 1}} />  */}
                Engineer. Designer. Developer. Student.
                </h2>
            </div>
          </div>
      </div>
    </div>
  </Layout>
  </>
);

export default IndexPage
