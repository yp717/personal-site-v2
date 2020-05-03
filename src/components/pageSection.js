import React from "react";

const PageSection = ({ children, title }) => {
    return (
        <>
        <div className="container padding-top-bottom-5">
            {children}
        </div>
        </>
    );
};

export default PageSection;