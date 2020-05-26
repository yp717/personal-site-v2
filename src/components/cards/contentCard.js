import React from 'react';

const ContentCard = ( {title, subheading, date, color, description} ) => {
    return (
        <>
            <div className={`col-xs-12 content-card pad-5-lr is-white-bg is-${color}-border`}>
                <h2  className="is-background-blue-text card-heading">{title} / {subheading}</h2>
                <h3 className="is-background-blue-text card-date">{date}</h3>
                <p className="is-background-blue-text card-body">{description}</p>
            </div>
        </>
    );
}

export default ContentCard;