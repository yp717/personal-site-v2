import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import ProjectCard from '../components/cards/projectCard';
import Img from 'gatsby-image';
import { kebabCase } from 'lodash';

const ProjectsPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
    <Layout>
        <SEO
        title="Projects"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
        />
        <div className="container--fluid margin-bottom-5">
            <div className="container__row">
                <div className="container__col-sm-12">
                    <h1 className="is-background-blue-text margin-left-right-5">Projects</h1>
                </div>
            </div>        
            <div className="container__row">
                {posts.map(post => (
                    <div key={post.node.id}>
                        <Link to={post.node.fields.slug}>
                            <div className="container__col-sm-6">
                                <Img
                                    fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                                    style={{ width: 300, height: 250, objectFit: "cover" }}
                                />
                            </div>
                            <div className="container__col-sm-6">
                                <h2 style={{fontSize: '25px'}}className="is-background-blue-text">{post.node.frontmatter.title}</h2>
                                <p className="is-background-blue-text">{post.node.frontmatter.date}</p>
                                {post.node.frontmatter.tags ? (
                                    <div>
                                        {post.node.frontmatter.tags.map(tag => (
                                            <Link className="post-tags margin-right-1" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                        ))}
                                    </div>    
                                ) : null}
                                <div className="is-background-blue-text">{post.node.excerpt}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
    </div>
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
            excerpt(pruneLength: 250)
            fields {
                slug
            }
            frontmatter {
                title
                tags
                description
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