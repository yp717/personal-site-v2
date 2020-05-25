import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ReactHtmlParser from "react-html-parser";

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={frontmatter.tags}/>
        <div className="container margin-b-5 margin-t-10">
          <div className="container__row">
            <div className="container__col-sm-12">
              <h1 className="is-background-blue-text">{frontmatter.title}</h1>
              <span className="is-background-blue-text">{frontmatter.date}</span>
              <div className="blog-text" style={{width: '90%'}}>
                {ReactHtmlParser(html)}
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default BlogPost;

export const blogPostQuery = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
`;