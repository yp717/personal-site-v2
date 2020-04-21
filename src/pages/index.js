import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";
import SocialLinks from "../components/socialLinks";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />  
        <div className="container--fluid">
          <div className="col-sm-12">
            <p style={{marginTop: '100px'}}>Hi, my name is</p>
          </div>
          <div className="col-sm-12">
            <h1>Yannis Panagis</h1>
          </div>
          <div className="col-sm-12">
            <h1>I build things for the web.</h1>
          </div>
          <div className="col-sm-12">
            <p>I'm currently a third year Electrical and Electronic Engineering Student @ Imperial College London</p>
          </div>
          <div className="col-sm-12">
            <SocialLinks/>
          </div>    
          <div className="col-sm-12">
            <Button buttonText="Get in touch" />
            <Button buttonText="Resume" />
          </div>
        </div>
  </Layout>
)

export default IndexPage
