/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const postTemplate = path.resolve(`src/templates/blog-post.js`);
    const projectTemplate = path.resolve(`src/templates/project-post.js`);
    const tagTemplate = path.resolve(`src/templates/tagTemplate.js`);

    return graphql(`
        {
            allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                            posttype
                        }
                    }
                }
            }
        }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        // Create blog posts and project posts
        posts.forEach(edge => {
            if (edge.node.frontmatter.posttype === "project") {
              createPage({
                path: edge.node.fields.slug,
                component: projectTemplate,
                context: { slug: edge.node.fields.slug }
              });
            } else {
              createPage({
                path: edge.node.fields.slug,
                component: postTemplate,
                context: { slug: edge.node.fields.slug }
              });
            }
          });

        // Create Tags pages
        // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });

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
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        if (node.frontmatter.posttype === "project") {
        createNodeField({
            node,
            name: `slug`,
            value: "projects/" + node.frontmatter.title.trim().split(" ").join("-"),
        });
        }
        if (node.frontmatter.posttype === "blog") {
            createNodeField({
                node,
                name: `slug`,
                value: "blog/" + node.frontmatter.title.trim().split(" ").join("-"),
            });
        }
    }
};