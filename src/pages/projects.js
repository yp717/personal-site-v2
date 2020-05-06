import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Img from 'gatsby-image';
// import Button from '../components/button';
// import Link from "gatsby";
import ProjectCard from '../components/cards/projectCard';

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO
      title="Projects"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <div className="container">
      <h1 className="is-background-blue-text">Projects</h1>
      <div className="project-list">
        {data.allMarkdownRemark.edges.map(project => (
          <div key={project.node.id} className="project-list__item">
            <ProjectCard 
              title={project.node.frontmatter.title}
              description={project.node.frontmatter.description}
              color={project.node.frontmatter.color}
            //   fluid={project.node.frontmatter.thumbnailImage.childImageSharp.fluid}
            />
            {/* <h2>{project.node.frontmatter.title}</h2>
            <p>{project.node.excerpt}</p> */}
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default ProjectsPage;

export const projectsQuery = graphql`
  query ProjectIndex {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { posttype: { eq: "project" } } }
    ) {
      edges {
        node {
            id
            excerpt(pruneLength: 250)
            fields {
                slug
            }
            frontmatter {
                title
                tags
                description
                thumbnail {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                color
            }
        }
      }
    }
  }
`;