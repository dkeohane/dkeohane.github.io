import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CodenameRabbit = () => {
  const data = useStaticQuery(graphql`
    query {
      main_menu: file(relativePath: { eq: "codename-rabbit/main_menu.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      <div style={{background: '#F4F1DE'}}>
        <SEO title="Codename-Rabbit" />
        <h1 id="top" style={HeadingStyle}>Codename-Rabbit</h1>
        <Img style={container} fluid={data.main_menu.childImageSharp.fluid} />
        <div style={container}>
        <p style={p}>
          Codename-Rabbit is a project currently in development. To see latest progress, check out our <a style={link} href="https://www.instagram.com/nod_and_smile_games/">Instagram</a> account.
        </p>
        </div>
        <Link to="#top">
            <Img style={chevronStyle} fluid={data.chevron.childImageSharp.fluid} />
        </Link>
      </div>
    </Layout>
  )
}

const HeadingStyle = {
  color: '#21A59B',
  textAlign: 'center',
  padding: '50px',
  fontFamily: 'Roboto',
  fontSize: '4rem'
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: `960px`,
  marginLeft: 'auto',
  marginRight: 'auto'
}

const imageStyle = {
  width: "50%"
}

const p = {
  color: '#3D405B',
  fontFamily: 'Nunito',
  width: "40%",
  textAlign: 'center',
  margin: 'auto'
}

const link = {
  color: '#d76229',
  textAlign: 'center',
  fontFamily: 'Nunito',
  textDecoration: 'none',
}

const chevronStyle = {
  margin: 'auto',
  maxWidth: '5rem',
  maxHeight: '5rem'
}

export default CodenameRabbit
