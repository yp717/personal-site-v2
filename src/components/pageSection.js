import React from "react";

const PageSection = ({ children, title }) => {
    return (
        <>
        <div className="container padding-t-b-5">
            {children}
        </div>
        </>
    );
};

export default PageSection;