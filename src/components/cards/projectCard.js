import React from 'react';
import Button from '../button';
import Img from 'gatsby-image';
// category, project title, description, date, img url -> should store this in a json file and pull in with graphql query
// for now for making design let's just keep it static
import Link from "gatsby";
// next we want to put an image in here but that should be pulled dynamically like the project cards on the other page with graphql

// we also want to give each blog a color which we can pass in with props to set the border color
const ProjectCard = ({ title, description, fluid, url }) => {
    return (
        <>
        {/* <div className="pad-5-b">
            <Link to={path} className="link " id="path">
            <div className="grow row">
                <div className="col-xs-12 pad-2-t ">
                <Img
                    fluid={coverimg.childImageSharp.fluid}
                    className="shadow"
                    style={{ maxHeight: 250 }}
                />
                </div>
                <div className="col-xs-12 pad-6-t is-grey">
                <h1 className="margin-3-b margin-0-t">{title}</h1>
                <h3 className="margin-0-t">{desc}</h3>
                <p className="margin-0-t is-special-blue">{skills.join(", ")}</p>
                </div>
            </div>
            </Link>
        </div> */}
        
        <div className="padding-3 is-green-border">
            {/* <Link to={path} className="link" id="path"> */}
                <div className="container__row">
                    <div className="container__col-sm-12">
                        <h2 className="is-background-blue-text">{title}</h2>
                    </div>
                    <div className="container__col-sm-12">
                        <h3 className="is-background-blue-text">{url}</h3> 
                    </div>
                    <div className="post-list__thumbnail">
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
            {/* </Link> */}
        </div>
        </>
    );
};

export default ProjectCard;