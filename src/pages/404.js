import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" /> 
    <div className="container row margin-10-t margin-10-b">
      <div className="col-xs-12 pad-5-lr margin-10-b">
        <h1 className="text-align-center is-background-blue-text">We're um...having some technical difficulties</h1>
      </div>
      <div className="text-align-center col-xs-12 col-sm-12 pad-5-lr margin-5-b">
        <img className="text-align-center" style={{width: '100%'}} alt="angry lego smashes computer" src="https://media.giphy.com/media/ReImZejkBnqYU/giphy.gif"/>
      </div>
      <div className="col-xs-12 pad-5-lr">
        <p className="is-background-blue-text">The link to this mage might not exist or be out of date... let's keep it together</p>
      </div>
      <div className="col-xs-12 pad-5-lr">
        <p className="is-background-blue-text">Take a deep breath. I'll go contact the other legos on the server. In the meantime, how about you go back to the <Link className="link" to="/">home page</Link>?</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage;