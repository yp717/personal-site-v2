import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import FeaturedCard from '../components/cards/featuredCard';

const RecentProjects = () => {
    const data = useStaticQuery(graphql`
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
                            description
                            hero {
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
    `)

    const posts = data.allMarkdownRemark.edges;

    return (
        <>
        {posts.slice(0, 2).map(post => (
            <FeaturedCard 
                id={post.node.id}
                slug={post.node.fields.slug}
                title={post.node.frontmatter.title}
                hero={post.node.frontmatter.hero.childImageSharp.fluid}
                date={post.node.frontmatter.date}
                tags={post.node.frontmatter.tags}
                desc={post.node.frontmatter.description}
            />    
        ))}
        </>
    );
}

export default RecentProjects;