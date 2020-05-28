import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Img from 'gatsby-image';
import { kebabCase } from 'lodash';

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
                {edges.map(({ node }) => {
                  const { title, date, tags } = node.frontmatter;
                  const { slug } = node.fields;
                  return (
                    <Link to={slug} className="margin-0 padding-0">
                      <div key={node.id} className="content-card is-white-bg margin-5-b is-deep-sky-blue-border">
                        <Link to={slug} className="margin-0">
                          <h2 className="post-tags">{title}</h2>
                        </Link>
                        <p className="is-background-blue-text" style={{paddingLeft: '12px'}}>{date}</p>
                        {tags ? (
                            <div>
                                {tags.map(tag => (
                                    <Link className="post-tags" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                ))}
                            </div>    
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>        
              <div className="col-xs-12 pad-5-r">
                <Link to="/tags">
                  <h2 className="post-tags" style={{paddingLeft: '12px'}}>All tags</h2>
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
            color
          }
        }
      }
    }
  }
`;