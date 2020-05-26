import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import ProjectCard from '../components/cards/projectCard';
// import Img from 'gatsby-image';
import { kebabCase } from 'lodash';
// import BuyMeCoffeeCard from '../components/cards/buyMeCoffeeCard';
// import ReadMoreButton from '../components/ReadMoreButton';

const ProjectsPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
    // is-deep-sky-blue-border
    <Layout>
        <SEO title="Projects" keywords={[`gatsby`, `application`, `react`, `portfolio`]}/>
        <div className="container row margin-10-t">
            <div className="col-xs-12 pad-5-lr margin-5-b">
                <h1 className="text-align-left is-background-blue-text">Projects</h1>
            </div>
            <div className="col-xs-12 pad-5-lr">
                {posts.map(post => (
                    <div key={post.node.id} className="content-card is-white-bg margin-5-b is-deep-sky-blue-border">
                        <Link to={post.node.fields.slug} className="margin-0">
                            <h2 
                                style={{fontSize: '25px'}} 
                                className="post-tags"
                            >
                                {post.node.frontmatter.title}
                            </h2>
                        </Link>
                        <p className="is-background-blue-text" style={{paddingLeft: '12px'}}>{post.node.frontmatter.date}</p>
                        {post.node.frontmatter.tags ? (
                            <div className="margin-t-b-2">
                                {post.node.frontmatter.tags.map(tag => (
                                    <Link className="post-tags margin-r-2" to={`/tags/${kebabCase(tag)}/`}>
                                        {tag}
                                    </Link>
                                ))}
                            </div>    
                        ) : null}
                    </div>   
                ))}
            </div>
        </div>
        {/* <BuyMeCoffeeCard/> */}
    </Layout>
    );
};

export default ProjectsPage;

export const projectsQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "project" } } }
    ) {
      edges {
        node {
            id
            excerpt(pruneLength: 150)
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