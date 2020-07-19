import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import Img from 'gatsby-image';
import SEO from "../components/seo";
// import { kebabCase } from 'lodash';
// import BuyMeCoffeeCard from '../components/cards/buyMeCoffeeCard';
import PostPreviewCard from '../components/cards/postPreviewCard';

const BlogPage = ( { data } ) => {
    const posts = data.allMarkdownRemark.edges;
    
    return (
        <Layout>
            <SEO title="Blog" keywords={[`gatsby`, `blog`, `instructional`, `tutorials`, `software engineering`, `coding`]}/>
            <div className="container row margin-10-t">
                <div className="col-xs-12 pad-5-lr margin-5-b">
                    <h1 className="text-align-left is-background-blue-text">Blog</h1>
                </div>
                <div className="col-xs-12 pad-5-lr">
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

export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
        edges {
            node {
                id
                excerpt(pruneLength: 250)
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    tags
                    description
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid_noBase64
                            }
                        }
                    }
                }
            }
        }
    }
  }
`;