import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
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
            <div className="container">
              <div className="container__row">
                <div className="container__col-sm-12 margin-l-r-5">
                  <h1 className="is-background-blue-text">{tagHeader}</h1>
                </div>
              </div>
                    {edges.map(({ node }) => {
                        const { title, date, tags, description, thumbnail } = node.frontmatter;
                        const { slug } = node.fields;
                        return (
                          <Link to={slug} className="margin-0 padding-0">
                              <div key={node.id} className={`container__row content-card card-link padding-0`} style={{width: '90%'}}>
                                <div className="container__col-sm-12 container__col-lg-4">
                                    <Img
                                        fluid={thumbnail.childImageSharp.fluid}
                                        style={{ maxHeight: 250 }}
                                    />
                                </div> 
                                <div className="container__col-sm-12 container__col-lg-6" style={{ padding: '2%'}}>
                                    <h2 style={{fontSize: '25px'}}className="is-background-blue-text">{title}</h2>
                                        <p className="is-background-blue-text">{date}</p>
                                        {tags ? (
                                            <div>
                                                {tags.map(tag => (
                                                    <Link className="post-tags margin-r-1" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                                ))}
                                            </div>    
                                        ) : null}
                                        {/* There needs to be a sass class here to correctly set the body text formatting */}
                                        <p className="is-background-blue-text" >{description}</p>
                                </div> 
                            </div>
                          </Link>
                        );
                    })}
                {/* <div className="container__row">
                  <div className="container__col-sm-12">
                    <Link to="/tags">
                      <h2>All tags
                      </h2>
                    </Link>    
                  </div>
                </div> */}
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