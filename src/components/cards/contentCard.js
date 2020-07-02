import React from 'react';

const ContentCard = ( {title, subheading, date, color, description} ) => {
    return (
        <>
            <div className={`col-xs-12 content-card pad-5-lr is-white-bg is-${color}-bg`}>
                <h2  className="is-white-text-fixed card-heading">{title} / {subheading}</h2>
                <h3 className="is-white-text-fixed card-date">{date}</h3>
                <p className="is-white-text-fixed card-body">{description}</p>
            </div>
        </>
    );
}

export default ContentCard;