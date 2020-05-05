import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
        <div className="container margin-bottom-12">
          <div className="container__col-sm-12 margin-left-right-5">
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

export default PostTemplate;

export const pageQuery = graphql`
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