import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import SEO from "../components/seo";
import { kebabCase } from 'lodash';
// import BuyMeCoffeeCard from '../components/cards/buyMeCoffeeCard';

const BlogPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Blog" keywords={[`gatsby`, `blog`, `instructional`, `tutorials`, `software engineering`, `coding`]}/>
            <div className="container margin-b-5 margin-t-5">
                <div className="container__row">
                    <div className="container__col-sm-12" style={{width: '90%'}}>
                        <h1 className="is-background-blue-text margin-l-r-5">Blog</h1>
                    </div>
                </div>    
                    {posts.map(post => (
                        <div key={post.node.id} className={`container__row content-card padding-0`} style={{width: '90%'}}>
                        <div className="container__col-sm-12 is-deep-sky-blue-border" style={{ padding: '2%', borderRadius: '4px', width: '100%'}}>
                        <Link to={post.node.fields.slug} className="margin-0 padding-0">
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
                    </div>       
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