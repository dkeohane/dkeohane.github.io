import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/layout/main"
import Bio from '../components/layout/bio';
import Portfolio from '../components/layout/portfolio';
import Contact from '../components/layout/contact';

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      chevron: file(relativePath: { eq: "icons/chevron_site.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={bg}>
      <Main />
      <Bio />
      <Portfolio />
      <Contact />
      <Link to="/#top">
        <Img style={imageStyle} fluid={data.chevron.childImageSharp.fluid} />
      </Link>
      </div>
    </Layout>
  )
}

const bg = {
  background: '#F4F1DE'
}

const imageStyle = {
  margin: 'auto',
  maxWidth: '5rem',
  maxHeight: '5rem'
}

export default IndexPage
