import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Container from 'react-bootstrap/Container';

import "animate.css/animate.min.css";
import 'bootstrap/dist/css/bootstrap.css';
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
        <Container fluid={true}>
          <main>{children}</main>
        </Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
