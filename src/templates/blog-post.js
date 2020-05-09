import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={frontmatter.tags}/>
        <div className="container margin-b-12">
          <div className="container__col-sm-12 margin-l-r-5">
            <h1 className="is-background-blue-text">{frontmatter.title}</h1>
            <span className="is-background-blue-text">{frontmatter.date}</span>
            {/* is there a way to do this without dangerously setting inner HTML */}
            <div  
              className="blog-text"
              dangerouslySetInnerHTML={{ __html: html }} 
            />
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