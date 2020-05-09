import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import SEO from "../components/seo";
// import BuyMeCoffeeCard from '../components/cards/buyMeCoffeeCard';

const BlogPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Blog" keywords={[`gatsby`, `blog`, `instructional`, `tutorials`, `software engineering`, `coding`]}/>
            <div className="container margin-b-5">
                <div className="container__row">
                    <div className="container__col-sm-12">
                        <h1 className="is-background-blue-text margin-l-r-5">Blog</h1>
                    </div>
                </div>    
                    {posts.map(post => (
                        <Link to={post.node.fields.slug} className="margin-0 padding-0">
                            <div key={post.node.id} className={`container__row content-card card-link padding-0`} style={{width: '90%'}}>
                                <div className="container__col-sm-12 container__col-lg-5">
                                    <Img
                                        fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid}
                                        style={{ maxHeight: 250 }}
                                    />
                                </div> 
                                <div className="container__col-sm-12 container__col-lg-6" style={{ padding: '2%'}}>
                                    <h2 style={{fontSize: '25px'}}className="is-background-blue-text">{post.node.frontmatter.title}</h2>
                                        <p className="is-background-blue-text">{post.node.frontmatter.date}</p>
                                        {/* {post.node.frontmatter.tags ? (
                                            <div>
                                                {post.node.frontmatter.tags.map(tag => (
                                                    <Link className="post-tags margin-r-1" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                                ))}
                                            </div>    
                                        ) : null} */}
                                        {/* There needs to be a sass class here to correctly set the body text formatting */}
                                        <p className="is-background-blue-text" >{post.node.excerpt}</p>
                                </div> 
                            </div>   
                        </Link>     
                    ))}
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
        filter: { frontmatter: { posttype: { eq: "blog" } } }
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
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid_noBase64
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