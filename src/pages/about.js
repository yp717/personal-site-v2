import React from "react"
import Layout from "../components/layout";

const AboutPage = () => (
  <Layout>
    <div className="container hero-section" style={{paddingTop: '150px'}}>
      <div style={{ color: `teal` }}>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
      </div>
    </div>
  </Layout>  
);

export default AboutPage;