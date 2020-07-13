import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image"
import { kebabCase } from 'lodash';

const FeaturedCard = ( { id, slug, title, hero, date, tags, desc } ) => {
    return (
        <>
        <div className="col-xs-12 col-lg-6">
            <div key={id} className="content-card margin-5-b is-white-bg grow">
                <Link to={"/" + slug}>
                <Img 
                    fluid={hero}
                />     
                <h2 className=" is-background-blue-text margin-3-t">{title}</h2>
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
                </Link>
            </div>
        </div>   
        </>
    );
};

export default FeaturedCard;