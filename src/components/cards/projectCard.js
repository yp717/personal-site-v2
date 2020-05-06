import React from 'react';
// import Button from '../button';
import Img from 'gatsby-image';
// category, project title, description, date, img url -> should store this in a json file and pull in with graphql query
// for now for making design let's just keep it static
// import Link from "gatsby";
// next we want to put an image in here but that should be pulled dynamically like the project cards on the other page with graphql

// we also want to give each blog a color which we can pass in with props to set the border color
const ProjectCard = ({ title, description, color, fluid }) => {
    return (
        <> 
        <div className={`content-card is-${color}-border padding-0`}>
            {/* <Link to={path} className="link" id="path"> */}
                <div className="container__row">
                    <div className="container__col-sm-12">
                        <h2 className="is-background-blue-text">{title}</h2>
                    </div>
                    <div className="post-list__thumbnail">
                        <Img fluid={fluid} />           
                    </div>
                    <div className="project-list__excerpt">
                        <p className="is-background-blue-text">{description}</p>
                    </div>
                </div>
            {/* </Link> */}
        </div>
        </>
    );
};

export default ProjectCard;