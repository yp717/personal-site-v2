import React from 'react';

const ExperienceCard = ( {title, subheading, date, description} ) => {
    return (
        <>
            <div className="container__col-sm-12 content-card is-red-orange-border">
                <h2  className="is-background-blue-text card-heading">{title} / {subheading}</h2>
                <h3 className="is-background-blue-text card-date">{date}</h3>
                <p className="is-background-blue-text card-body">{description}</p>
            </div>
        </>
    );
}

export default ExperienceCard;