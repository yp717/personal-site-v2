import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import SEO from '../components/seo';
import Layout from '../components/layout';
import ReactHtmlParser from "react-html-parser";

const ProjectPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout> 
      <SEO title={frontmatter.title} keywords={frontmatter.tags}/>
      <div className="container row margin-10-t margin-10-b">
        <div className="col-xs-12 pad-5-lr margin-4-b">          
          <Img fluid={frontmatter.hero.childImageSharp.fluid} />
        </div>
        <div className="col-xs-12 pad-5-lr">          
          <h1 className="is-background-blue-text">{frontmatter.title}</h1>
        </div>  
        <div className="col-xs-12 pad-5-lr margin-1-b">
          <span className="is-background-blue-text">{frontmatter.date}</span>
        </div>
        <div className="col-xs-12 pad-5-lr article">
          {ReactHtmlParser(html)}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPost;

export const projectPostQuery = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          thumbnail {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
          }
          hero {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }
    }
`;