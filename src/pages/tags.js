// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import Layout from '../components/layout';
// import { DirectiveLocation } from 'graphql';
import SEO from '../components/seo';

const TagsPage = ({ data }) => {
    const allTags = data.allMarkdownRemark.group;
    return (
        <Layout>
            <SEO title="Tags" keywords={[`gatsby`, `application`, `react`, `portfolio`]}/>
            <div className="container">
                <div className="container__row">
                    <div className="container__col-sm-12 margin-l-r-5">
                        <h1>Tags</h1>
                        <p>The following is a list of all the tags on this site. Maybe now you can find what you were looking for 😉</p>
                    </div>
                </div>
                <div className="container__row">
                    <div className="container__col-sm-12 margin-l-r-5">
                        <ul>
                            {allTags.map(tag => (
                                <li key={tag.fieldValue}>
                                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                    {tag.fieldValue} ({tag.totalCount})
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
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