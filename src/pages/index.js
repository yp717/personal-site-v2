import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/pageSections/heroSection";
import PageSection from "../components/pageSection";
import LatestProjejctsSection from "../components/pageSections/latestProjectsSection";

const IndexPage = () => (  
  <>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
  <Layout>
      <div className="container--fluid">
        <div className="container__row">
          <div className="container__col-sm-12" style={{paddingBottom: '150px'}}>
            {/* Hero Section */}
            <div className="hero-section">
              <PageSection>
                <HeroSection/>
              </PageSection>
            </div>
            {/* Latest Projects Section */}
            <div className="latest-projects-section">
              <PageSection>
                <LatestProjejctsSection/>
              </PageSection>
            </div>
          </div>
        </div>
      </div>
  </Layout>
  </>
);

export default IndexPage
