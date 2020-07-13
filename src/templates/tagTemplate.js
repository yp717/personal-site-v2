import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Img from 'gatsby-image';
// import { kebabCase } from 'lodash';
import PostPreviewCard from '../components/cards/postPreviewCard';

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`; 
  
    return (
        <Layout>
          <SEO 
            title={tag} 
            keywords={[`gatsby`, `application`, `react`, `portfolio`]}
          />
            <div className="container row margin-10-t margin-10-b">
              <div className="col-xs-12 pad-5-lr margin-5-b">          
                <h1 className="is-background-blue-text">{tagHeader}</h1>
              </div>
              <div className="col-xs-12 pad-5-lr margin-5-b">          
                {
                  edges.map(({ node }) => (
                    <PostPreviewCard 
                      id={node.id}
                      slug={node.frontmatter.slug}
                      title={node.frontmatter.title}
                      thumbnail={node.frontmatter.thumbnail.childImageSharp.fluid}
                      date={node.frontmatter.date}
                      tags={node.frontmatter.tags}
                      desc={node.frontmatter.description}
                    />
                  )
                )}
              </div>        
              <div className="pad-5-lr">
                <Link to="/tags">
                  <h2 className="is-background-blue-text active underline">
                    All tags
                  </h2>
                </Link>    
              </div>
            </div>
        </Layout>
    );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            description
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        }
      }
    }
  }
`;