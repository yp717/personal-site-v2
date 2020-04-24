import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import SocialLinks from "../components/socialLinks";

const IndexPage = () => (  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
        <div className="hero-section" style={{paddingBottom: '150px'}}>
          <div className="container">
            <div className="container--fluid">
              <div className="col-sm-12" style={{paddingTop: '150px'}}>
                <p className="greeting-text">
                    Hi <span role="img" aria-label="wave">👋</span>, my name is
                </p>
              </div>
              <div className="col-sm-12">
                <h1 className="is-background-blue-text">Yannis Panagis</h1>
              </div>
              <div className="col-sm-12">
                <h2 className="hero-tagline-text">Engineer. Designer. Developer. Student.</h2>
              </div>
              <div className="col-sm-6">
                <h3 className="hero-description-text">I'm currently a third year Electrical and Electronic</h3>
                <h3 className="hero-description-text">Engineering Student @ Imperial College London</h3>
              </div>
              <div className="col-sm-12">
                <SocialLinks/>
              </div>    
              {/* <div className="col-sm-12">
                <Button buttonText="Get in touch" />
                <Button buttonText="Resume" />
              </div> */}
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="container" style={{marginTop: '40px'}}>
            <div className="container__row">
                {/* Section heading */}
                <div className="col-sm-8" style={{width: '50%'}}>
                  <h2>Latest Projects</h2>
                </div>
                {/* Categories */}
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                  <h3 className="text-align-center" style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>[ALL]</h3>
                </div>
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>  
                  <h3 style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>DESIGN</h3>
                </div>
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>  
                  <h3 style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>DEVELOPMENT</h3>
                </div>                  
                <div className="col-sm-2" style={{marginLeft: '2%', marginRight: '2%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>  
                  <h3 style={{fontWeight: 600, fontSize: '16px', lineHeight: '16px'}}>ENGINEERING</h3>
                </div>                  
            </div>
            <p>this is just a test. ok cool the font looks right</p>
          </div>
        </div>
  </Layout>
)

export default IndexPage
