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
        <div className="container margin-bottom-5">
            <div className="container__col-sm-12">
                <h1 className="is-background-blue-text margin-left-right-5">Projects</h1>
                {posts.map(post => (
                    <div key={post.node.id} className={`content-card is-${post.node.frontmatter.color}-border padding-0`}>
                        <Link to={post.node.fields.slug}>
                            {/* <Img
                            fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}
                            /> */}
                            <Img
                                fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                                style={{ maxHeight: 250 }}
                            />
                            <h2 style={{fontSize: '25px'}}className="is-background-blue-text">{post.node.frontmatter.title}</h2>
                            <p className="is-background-blue-text">{post.node.frontmatter.date}</p>
                            {post.node.frontmatter.tags ? (
                                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                                    {post.node.frontmatter.tags.map(tag => (
                                        <Link className="post-tags margin-right-1" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                    ))}
                                </div>    
                            ) : null}
                            <div className="post-list__excerpt is-background-blue-text">{post.node.excerpt}</div>
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