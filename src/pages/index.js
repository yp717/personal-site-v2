import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/pageSections/heroSection";
import PageSection from "../components/pageSection";
import LatestProjejctsSection from "../components/pageSections/latestProjectsSection";
import LegoSection from "../components/pageSections/legoSection";

const IndexPage = () => (  
  <>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
  <Layout>
      <div className="container--fluid">
        <div className="container__row">
          <div className="container__col-sm-12">
            {/* Hero Section */}
            <div className="hero-section is-very-light-grey-bg">
              <PageSection>
                <HeroSection/>
              </PageSection>
            </div>
            {/* Latest Projects Section */}
            <LegoSection/>
            {/* <div className="latest-projects-section is-white-bg"> */}
                {/* <LatestProjejctsSection/> */}
            {/* </div> */}
          </div>
        </div>
      </div>
  </Layout>
  </>
);

export default IndexPage
