import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Img from 'gatsby-image';
// import Button from '../components/button';
import ProjectCard from '../components/cards/projectCard';

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <h1>Projects</h1>
    <div className="project-list">
      {data.allProjectsJson.edges.map(project => (
        <div key={project.node.id} className="project-list__item">
          <ProjectCard 
            title={project.node.title}
            description={project.node.description}
            fluid={project.node.thumbnailImage.childImageSharp.fluid}
            url={project.node.url}
          />
        </div>
      ))}
    </div>
  </Layout>
);

export default ProjectsPage;

export const projectsQuery = graphql`
  query {
    allProjectsJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date
          description
          url
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;