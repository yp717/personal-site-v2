import React from "react";

const PageSection = ({ children, title }) => {
    return (
        <>
        <div className="container" style={{ paddingBottom: "5%", paddingTop: "5%"}}>
            {children}
        </div>
        </>
    );
};

export default PageSection;