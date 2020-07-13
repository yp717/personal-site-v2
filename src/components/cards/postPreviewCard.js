import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image"
import { kebabCase } from 'lodash';

const PostPreviewCard = ( { id, slug, title, thumbnail, date, tags, desc } ) => {
    return (
        <>
        <Link to={"/" + slug}>
        <div key={id} className="container row content-card margin-5-b is-white-bg grow">
            
                <div className="col-xs-12 col-lg-6">
                    <Img 
                        fluid={thumbnail}
                    />
                </div>
                <div className="col-xs-12 col-lg-6">
                    <h2 className=" is-background-blue-text pad-2-t">{title}</h2>
                    <p className="is-background-blue-text">{date}</p>
                    {tags ? (
                        <div className="margin-t-b-2">
                            {tags.map(tag => (
                                <Link className="post-tags" to={`/tags/${kebabCase(tag)}/`}>
                                    {tag}
                                </Link>
                            ))}
                        </div>    
                    ) : null}
                    <div>
                        <p className="is-background-blue-text">{desc}</p>
                    </div>
                </div>
        </div>   
        </Link>
        </>
    );
};

export default PostPreviewCard;