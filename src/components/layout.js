import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"

import Header from "./header"
import Footer from "./footer"
import "../styles/global.scss";
import { Emojione } from "react-emoji-render";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <>
      {/* <Helmet>
      should have a helmet here with extra information
      </Helmet> */}
      <div id="page-container">
        <CookieConsent
          location="bottom"
          buttonText="Yes please."
          acceptOnScroll={true}
          cookieName="YP_CONSENT_COOKIE"
          style={{ background: "#1EB6FF" }}
          buttonStyle={{
            color: "#1EB6FF",
            fontSize: "13px",
            background: "#fff",
            fontFamily: "lato",
            borderRadius: 3,
            padding: 10,
          }}
        >
          <h4 className="margin-0">
            This website uses cookies to enhance your user experience. Munch Munch <Emojione text="🍪" />
          </h4>
        </CookieConsent>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <main className="is-very-light-grey-bg">{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
