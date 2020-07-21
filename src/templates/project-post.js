import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { kebabCase } from 'lodash';
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Img from "gatsby-image"
import SEO from '../components/seo';
import Layout from '../components/layout';
import ReactHtmlParser from "react-html-parser";
import BuyMeCoffee from "../components/cards/buyMeCoffeeCard";

const ProjectPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { previous, next } = pageContext
  const tags = frontmatter.tags;

  return (
    <Layout> 
      <SEO 
        title={post.frontmatter.title}
        location={location}
        description={post.frontmatter.description || post.excerpt}
        image={
          "https://yannispanagis.com" +
          post.frontmatter.hero.childImageSharp.fluid.src
        } 
        keywords={frontmatter.tags}
      />
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
        <div className="col-xs-12 pad-5-lr article">
          {ReactHtmlParser(html)}
        </div>
        <BuyMeCoffee/>
        <div className="col-xs-12 col-md-6 text-align-left pad-5-lr">
          {previous && (
            <button
              onClick={() => {
                trackCustomEvent({
                  category: "Explore from post",
                  action: "Click",
                  label: "previous",
                })
                navigate('/' + previous.fields.slug)
              }}
              style={{outline: 'none'}}
            >
              <p className="is-background-blue-text text-align-left article-nav-links grow">← {previous.frontmatter.title}</p>
            </button>
          )}
        </div>
        <div className="col-xs-12 col-md-6 pad-5-lr text-align-right">
          {next && (
            <button
              onClick={() => {
                trackCustomEvent({
                  category: "Explore from post",
                  action: "Click",
                  label: "next",
                })
                navigate('/' + next.fields.slug)
              }}
              style={{outline: 'none'}}
            >
              <p className="is-background-blue-text text-align-right article-nav-links grow">{next.frontmatter.title} →</p>
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPost;

export const projectPostQuery = graphql`
    query ProjectBySlug($slug: String!) {
      site {
        siteMetadata {
          title
        }
      }
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