import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FishTank = () => {
  const data = useStaticQuery(graphql`
    query {
      main_menu: file(relativePath: { eq: "fishtank/main_menu.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screen1: file(relativePath: { eq: "fishtank/screen1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screen2: file(relativePath: { eq: "fishtank/screen2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screen3: file(relativePath: { eq: "fishtank/screen3.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      end: file(relativePath: { eq: "fishtank/end.png" }) {
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
        <SEO title="FishTank" />
        <h1 id="top" style={HeadingStyle}>FishTank</h1>
        <Img style={container} fluid={data.main_menu.childImageSharp.fluid} />
        <div style={container}>
          <div style={p}>
            <p>
            FishTank is a web and mobile game created in Unity. I worked on Programming and Game Design while <a style={link} href="https://www.instagram.com/ludogavillet/">Ludo</a> produced all Art assets.
            </p>
            <p>
            We made the game one weekend when we wanted to participate in some form of a gamejam.
            </p>
          </div>
          <Img style={imageStyle} fluid={data.screen1.childImageSharp.fluid} />
        </div>
        <div style={container}>
          <Img style={imageStyle} fluid={data.screen2.childImageSharp.fluid} />
          <div style={p}>
            <p>
            We wanted to create a calm, relaxing game based around a sea theme with a simple mechanic. 
            </p>
            <p>
            The message behind the game is to keep our oceans free of toxic materials.
            </p>
          </div>
        </div>
        <div style={container}>
          <div style={p}>
            <p>
            FishTank is playable on <a style={link} href="https://dkeohane.itch.io/fishtank">itch.io</a>. I've also put together an Android build.
            </p>
          </div>
          <Img style={imageStyle} fluid={data.screen3.childImageSharp.fluid} />
        </div>
        <Img style={container} fluid={data.end.childImageSharp.fluid} />
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
  fontFamily: 'Bitterbrush',
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

export default FishTank
