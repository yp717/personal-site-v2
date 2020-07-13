import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"
import { kebabCase } from 'lodash';

import SEO from '../components/seo';
import Layout from '../components/layout';
import ReactHtmlParser from "react-html-parser";
import BuyMeCoffee from "../components/cards/buyMeCoffeeCard";

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const tags = frontmatter.tags;

  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={frontmatter.tags}/>
      <div className="container row margin-10-t margin-10-b">
        <div className="col-xs-12 pad-5-lr margin-4-b">          
          <Img fluid={frontmatter.hero.childImageSharp.fluid} />
        </div>      
        <div className="col-xs-12 pad-5-lr">          
          <h1 className="text-align-left is-background-blue-text">{frontmatter.title}</h1>
        </div>      
        <div className="col-xs-12 pad-5-lr margin-1-b">
          <span className="is-background-blue-text">{frontmatter.date}</span>
        </div>
        <div className="col-xs-12 pad-5-lr margin-1-b">
          {tags ? (
            <div className="margin-t-b-2">
                {tags.map(tag => (
                    <Link className="post-tags" to={`/tags/${kebabCase(tag)}/`}>
                        {tag}
                    </Link>
                ))}
            </div>    
          ) : null}
        </div>
        <div className="col-xs-12 pad-5-lr blog-text article">
          {ReactHtmlParser(html)}
        </div>
        <BuyMeCoffee/>
      </div>
      </Layout>
  );
};

export default BlogPost;

export const blogPostQuery = graphql`
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