import React from "react"
import { graphql } from "gatsby"
// import _ from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactHtmlParser from "react-html-parser";

const LegalTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        location={location}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="container row margin-10-t margin-10-b">
        <div className="col-xs-12 pad-5-lr">
          <h1 className="text-align-left is-background-blue-text">{frontmatter.title}</h1>
        </div>
        <div className="col-xs-12 pad-5-lr margin-4-b">
          <h3 className="is-background-blue-text">{frontmatter.date}</h3>
        </div>
        <div className="col-xs-12 pad-5-lr blog-text article">
          {ReactHtmlParser(html)}
        </div>
      </div>
    </Layout>
  )
}

export default LegalTemplate

export const pageQuery = graphql`
  query LegalBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title        
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
