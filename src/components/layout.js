/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import Header from "./header"
//<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
import "./layout.css"

import { SiTiktok, SiYoutube, SiInstagram, SiSoundcloud } from "react-icons/si"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `3rem`,
            color: `white`,
          }}
        >
          <div className="center">
            <a href="https://www.tiktok.com/@k.nihl">
              <SiTiktok />
            </a>
            {` `}
            <a href="https://www.youtube.com/channel/UCcwN4SmDP_-34wuVR-gOpLw">
              <SiYoutube />
            </a>
            {` `}
            <a href="https://www.instagram.com/k.nihl/">
              <SiInstagram />
            </a>
            {` `}
            <a href="https://soundcloud.com/k_nihl">
              <SiSoundcloud />
            </a>
          </div>
          <div className="center">
            © {new Date().getFullYear()}
            {` `} <a href="https://www.nikhildesigns.com">Nikhil Designs</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
