import React from 'react';
import { graphql, Link } from 'gatsby';
import StringSimilarity from "string-similarity"
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ data, location }) => {
  const pages = data.allSitePage.nodes.map(({ path }) => path)
  const pathname = location.pathname
  const result = StringSimilarity.findBestMatch(pathname, pages).bestMatch

  return (
    <Layout>
    <SEO title="404: Not found" /> 
    <div className="container row margin-10-t margin-10-b">
      <div className="col-xs-12 pad-5-lr">
        <h1 className="text-align-center is-background-blue-text">We're um...having some technical difficulties</h1>
      </div>
      <div className="text-align-center col-xs-12 pad-5-lr margin-3-t">
        <img className="text-align-center" alt="angry lego smashes computer" src="https://media.giphy.com/media/ReImZejkBnqYU/giphy.gif"/>
      </div>
      <div className="col-xs-12 pad-5-lr margin-3-t">
        <p className="is-background-blue-text">The link to this mage might not exist or be out of date.</p>
      </div>
      <div className="col-xs-12 pad-5-lr margin-3-t">
        {result.rating > 0.6 && (
            <h3 className="is-background-blue-text margin-3-t margin-3-b">
              My LEGO minions tell me that you may have been looking for...{" "}
              <Link to={result.target} className="is-background-blue-text active underline bold">
                {result.target}
              </Link>
            </h3>
        )}
      </div>
      <div className="col-xs-12 pad-5-lr margin-3-t">
        <h3 className="is-background-blue-text margin-3-b">That wasn't what you were looking for?</h3>
        <h3 className="is-background-blue-text margin-3-b">Okay. Take a deep breath. I'll go contact the other LEGOs on the server. In the meantime, how about you go back to the ... {" "}
          <Link className="is-background-blue-text active underline bold" to="/">
            Home Page
          </Link>
        </h3>
      </div>
    </div>

    </Layout>
  );
}

export default NotFoundPage

export const pageQuery = graphql`
  {
    allSitePage(
      filter: { path: { nin: ["/dev-404-page", "/404", "/404.html"] } }
    ) {
      nodes {
        path
      }
    }
  }
`