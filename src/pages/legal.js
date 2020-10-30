import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Legal = () => {
    return (
      <Layout>
        <SEO title="Legal" />
            <div className="container row margin-10-t margin-10-b">
                <div className="col-xs-12 pad-5-lr margin-4-b">
                    <h1 className="is-background-blue-text">Legal</h1>
                    <p className="is-background-blue-text">The following links outline this site's Legal policies and describes all disclaimers, its Cookie Policy, and Privacy Policy.</p>
                </div>
                <div className="col-xs-12 col-md-4 pad-5-lr">
                    <Link to="/legal/disclaimer">
                        <button className="button-style" style={{width: '100%'}}>
                            <p className="is-white-text-fixed">Disclaimer</p>
                        </button>
                    </Link>
                </div>
                <div className="col-xs-12 col-md-4 pad-5-lr">
                    <Link to="/legal/privacy-policy">
                        <button className="button-style" style={{width: '100%'}}>
                            <p className="is-white-text-fixed">Privacy Policy</p>
                        </button>
                    </Link>
                </div>
                <div className="col-xs-12 col-md-4 pad-5-lr">
                    <Link to="/legal/cookie-policy">
                        <button className="button-style" style={{width: '100%'}}>
                            <p className="is-white-text-fixed">Cookie Policy</p>
                        </button>
                    </Link>
                </div>
            </div>
    </Layout>
    )
}
  
export default Legal;