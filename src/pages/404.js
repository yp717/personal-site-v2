import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12 text-align-center margin-left-right-2">
          <h2 className="text-align-center">We're um...having some technical difficulties</h2>
        </div>
      </div>
      <div className="container__row">
        <div className="container__col-sm-12 margin-left-right-2 text-align-center">
          <img className="text-align-center" style={{width: '50vw'}} alt="angry lego smashes computer" src="https://media.giphy.com/media/ReImZejkBnqYU/giphy.gif"/>
        </div>  
      </div>
      <div className="container__row">
        <div className="container__col-sm-12 text-align-center">
          <p>The link to this mage might not exist or be out of date... let's keep it together</p>
        </div>
      </div>
      <div className="container__row">
        <div className="container__col-sm-12 text-align-center">
          <p>Take a deep breath. I'll go contact the other legos on the server. In the meantime, how about you go back to the <Link to="/">home page</Link>?</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
