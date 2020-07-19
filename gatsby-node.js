const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPost = path.resolve(`src/templates/blog-post.js`);
    const projectPost = path.resolve(`src/templates/project-post.js`);
    const tagTemplate = path.resolve(`src/templates/tagTemplate.js`);
    const legalPage = path.resolve(`./src/templates/legalTemplate.js`)

    const result = await graphql(
        `
        {
            posts: allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
                filter: { frontmatter: { type: { eq: "blog" } } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            tags
                            type
                        }
                    }
                }
            }
            projects: allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
                filter: { frontmatter: { type: { eq: "project" } } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            tags
                            type
                        }
                    }
                }
            }
            legals: allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
                filter: { frontmatter: { type: { eq: "legal" } } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            type
                        }
                    }
                }
            }
        }
        `
    )

    if (result.errors) {
        throw result.errors
    }

    const posts = result.data.posts.edges
    const projects = result.data.projects.edges
    const legals = result.data.legals.edges

    // const postsPerPage = 5
    // const numPages = Math.ceil(posts.length / postsPerPage)
    // Array.from({ length: numPages }).forEach((_, i) => {
    //     createPage({
    //     path: i === 0 ? `/` : `/${i + 1}`,
    //     component: path.resolve("./src/templates/blog-list-template.js"),
    //     context: {
    //         limit: postsPerPage,
    //         skip: i * postsPerPage,
    //         numPages,
    //         currentPage: i + 1,
    //         slug: i === 0 ? `/` : `/${i + 1}`,
    //     },
    //     })
    // })

    // Create blog posts and legal posts - can add other post types here too
    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
        createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })

    projects.forEach((post, index) => {
        const previous = index === projects.length - 1 ? null : projects[index + 1].node
        const next = index === 0 ? null : projects[index - 1].node
        createPage({
            path: post.node.fields.slug,
            component: projectPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })

    legals.forEach(document => {
        createPage({
            path: document.node.fields.slug,
            component: legalPage,
            context: { slug: document.node.fields.slug },
        })
    })

    // Create Tags pages
    // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
        }
    })

    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
                tag,
            },
        });
    });
};

// sort of worked through up to hereeeee

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    // Blog Post Pages
    if (
        node.internal.type === `MarkdownRemark` &&
        node.frontmatter.type === "blog"
    ) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value: "blog/" + _.kebabCase(node.frontmatter.title),
        })
    }

    // Project Post Pages
    if (
        node.internal.type === `MarkdownRemark` &&
        node.frontmatter.type === "project"
    ) {
        createNodeField({
            node,
            name: `slug`,
            value: "project/" + _.kebabCase(node.frontmatter.title),
        })
    }
    
    // Legal Post Pages
    if (
        node.internal.type === `MarkdownRemark` &&
        node.frontmatter.type === "legal"
    ) {
        createNodeField({
            node,
            name: `slug`,
            value: "legal/" + _.kebabCase(node.frontmatter.title),
        })
    }
};