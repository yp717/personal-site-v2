// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import { Emojione } from "react-emoji-render"

import Layout from '../components/layout';
import SEO from '../components/seo';

const TagsPage = ({ data }) => {
    const allTags = data.allMarkdownRemark.group;
    return (
        <Layout>
            <SEO title="Tags" keywords={[`gatsby`, `application`, `react`, `portfolio`]}/>
            <div className="container row margin-10-t margin-10-b">
                <div className="col-xs-12 pad-5-lr margin-5-b">                             
                    <h1 className="is-background-blue-text margin-2-b">Tags</h1>
                    <p className="is-background-blue-text">The following is a list of all the tags on this site. Maybe now you can find what you were looking for <Emojione text="😉"/></p>
                </div>
                <div className="col-xs-12 pad-5-lr margin-5-b">          
                    {allTags.map(tag => (
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            <p className="skill-link">{tag.fieldValue} ({tag.totalCount})</p>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default TagsPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;