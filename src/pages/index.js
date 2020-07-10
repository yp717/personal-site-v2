import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import LegoYannisFront from '../images/LEGOs/lego-yannis-front.svg';
// import ReactRotatingText from 'react-rotating-text';

const IndexPage = () => (  
  <>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />     
  <Layout style={{zIndex: '99'}}>
    <div className="row container margin-30-t">
      <div className="col-xs-12 text-align-center pad-10-lr">
          <div style={{zIndex: '99'}}>
            {/* <LegoSection/> */}
            <img 
              src={LegoYannisFront} 
              style={{height: '24vh', width: '100%'}} 
              alt="lego-icon-front"
            />
              <p className="is-java-green-text greeting-text text-align-center">
                Hi, my name is
              </p>         
              <h1 className="is-background-blue-text text-align-center" style={{ fontSize: '2.8em' }}>Yannis Panagis</h1>
              <h2 className="hero-tagline-text is-background-blue-text text-align-center">
                {/* <ReactRotatingText items={['Engineer.', 'Designer.', 'Developer.', 'Student.']} style={{animationIterationCount: 1}} />  */}
                Engineer. Designer. Developer. Student.
                </h2>
            </div>
          {/* </div> */}
      </div>
    </div>
  </Layout>
  </>
);

export default IndexPage;
