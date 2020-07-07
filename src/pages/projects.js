import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import BuyMeCoffeeCard from '../components/cards/buyMeCoffeeCard';
// import ReadMoreButton from '../components/ReadMoreButton';
import PostPreviewCard from "../components/cards/postPreviewCard";

const ProjectsPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
    // is-deep-sky-blue-border
    <Layout>
        <SEO title="Projects" keywords={[`gatsby`, `application`, `react`, `portfolio`]}/>
        <div className="container row margin-10-tb">
            <div className="col-xs-12 pad-5-lr margin-5-b">
                <h1 className="text-align-left is-background-blue-text">Projects</h1>
            </div>
            <div className="pad-5-lr">
                {posts.map(post => (
                    <PostPreviewCard
                        id={post.node.id}
                        slug={post.node.fields.slug}
                        title={post.node.frontmatter.title}
                        thumbnail={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                        date={post.node.frontmatter.date}
                        tags={post.node.frontmatter.tags}
                        desc={post.node.frontmatter.description}
                    />    
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