import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/pageSections/heroSection";
import PageSection from "../components/pageSection";
import LatestProjejctsSection from "../components/pageSections/latestProjectsSection";
import LegoSection from "../components/pageSections/legoSection";
import LegoYannisFront from '../images/LEGOs/lego-yannis-front.svg';
import SocialLinks from "../components/socialLinks";
const IndexPage = () => (  
  <>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
  <Layout>
      <div className="container--fluid">
        <div className="container__row">
          <div className="container__col-sm-12">
            <div className="hero-section is-very-light-grey-bg text-align-center">
              <div className="absolute-center">
                <img src={LegoYannisFront} alt="lego-icon-front" className="home-page-img"/>
                  <p className="is-greeting-blue-text greeting-text">
                    Hi <span role="img" aria-label="wave">👋</span>, my name is
                  </p>         
                  <h1 className="is-background-blue-text">Yannis Panagis</h1>
                  <h2 className="hero-tagline-text is-background-blue-text text-align-center">Engineer. Designer. Developer. Student.</h2>
                  <SocialLinks/>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
  </>
);

export default IndexPage
