import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const ProjectPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={frontmatter.tags}/>
        <div className="container margin-bottom-5">
          <div className="container__row">
            <div className="container__col-sm-12">
              <h1 className="is-background-blue-text">{frontmatter.title}</h1>
              <span className="is-background-blue-text">{frontmatter.date}</span>
              {/* is there a way to do this without dangerously setting inner HTML */}
              <div  
                className="article"
                dangerouslySetInnerHTML={{ __html: html }} 
              />
              <h1>kaki</h1>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default ProjectPost;

export const projectPostQuery = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
        }
      }
    }
`;