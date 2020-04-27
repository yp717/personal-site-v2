import React from 'react';
import Button from '../button';
import Img from 'gatsby-image';
// category, project title, description, date, img url -> should store this in a json file and pull in with graphql query
// for now for making design let's just keep it static

// next we want to put an image in here but that should be pulled dynamically like the project cards on the other page with graphql
const ProjectCard = ({ title, description, fluid, url }) => {
    return (
        <>
        <div className="col-sm-12 project-card">
            <h3 className="is-background-blue-text">{title}</h3>
            <h2 className="is-background-blue-text">{url}</h2> 
            <div className="project-list__thumbnail">
                <Img fluid={fluid} />           
            </div>

            <div className="project-list__excerpt">
                <p className="is-background-blue-text">{description}</p>
            </div>
            <div className="project-list__content">
                <a href={url}>
                <Button buttonText="Visit the Website" />
                </a>
            </div>
        </div>
        </>
    );
};

export default ProjectCard;