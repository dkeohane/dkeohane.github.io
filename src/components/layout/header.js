import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
    dan: file(relativePath: { eq: "icons/dan.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <header style={{backgroundColor: `#81B29A`}}>
      <div className="container" style={container}>
        <div className="inner-header" style={innerHeader}>
          <div className="logo" style={logo}>
              <Link to="/" style={logoText}>
                <Img style={logoImage}fluid={data.dan.childImageSharp.fluid} />
                DAN
              </Link>
          </div>
          <div className="navigation" style={ul}>
            <nav>
              <Link style={links} to="/#contact">contact</Link>
              <Link style={links} to="/#portfolio">Portfolio</Link>
              <a style={links} href="https://dkeohane.itch.io/">itch.io</a>
              <a style={links} href="https://github.com/dkeohane">github</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const container = {
  margin: '0 auto',
  backgroundColor: `#81B29A`,
  padding: `1.2rem 1.2rem`,
  maxWidth: `600px`,
}

const innerHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px'
}

const logo = {
  margin: '0 20px',
  verticalAlign: 'middle'
}

const logoText = {
  fontWeight: '700',
  textDecoration: 'none',
  letterSpacing: '1.5px',
  color: 'white',
  fontFamily: 'Permanent Marker'
}

const logoImage = {

}

const links = {
  display: 'block',
  float: 'right',
  fontFamily: 'california-dealership',
  fontWeight: 'bold',
  backgroundColor: '#81B29A',
  color: '#3D405B',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '1.4rem',
  margin: '0 20px'
}


const ul = {
  listStyleType: 'none',
  overflow: 'hidden',
  backgroundColor: '333',
  display: 'flex',
  justifyContent: 'space-between'
}

export default Header
