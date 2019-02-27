import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.css';

import Navigation from "../components/navigation/navigation";
import Container from 'react-bootstrap/Container';
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
        <Container>
          <main>{children}</main>
        </Container>
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
