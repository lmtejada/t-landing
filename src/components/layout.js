import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.css';

import Navigation from "../components/navigation";
import "../sass/layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation />
        <div
          className="margin-top-16"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <footer className="footer" align="center">
          © {new Date().getFullYear()} Tisa Technology
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
