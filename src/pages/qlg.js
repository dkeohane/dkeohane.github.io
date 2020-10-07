// React / Gatsby
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

import melee_AOE_Gif from './../images/qlg/gifs/melee_aoe.gif'
import enemy_Normal_Gif from './../images/qlg/gifs/enemy_bomb.gif'
import enemy_Spider_Gif from './../images/qlg/gifs/enemy_bomb_spider.gif'

const QLG = () => {
  const data = useStaticQuery(graphql`
    query {
      mainmenu: file(relativePath: { eq: "qlg/mainmenu.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      level1: file(relativePath: { eq: "qlg/level1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      level2: file(relativePath: { eq: "qlg/level2.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(relativePath: { eq: "qlg/background.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chevron: file(relativePath: { eq: "icons/chevron.png" }) {
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
        <SEO title="QLG" />
        <h1 id="top" style={HeadingStyle}>QLG: Quantum Loop Gravity</h1>
        <div align="center">
          <iframe src="https://itch.io/embed/761596" height="167" width="552" frameborder="0" display="block" align="centre"><a href="https://dkeohane.itch.io/qlg">QLG by dkeohane</a></iframe>
        </div>
        <div style={container}>
          <div style={p}>
            <p>
              QLG is an action packed couch co-op top-down shooter for 2/4 players. Currently we have 2 characters with their own unique abilities and playstyles and 3 levels of progressing complexity.
            </p>
            <img src={enemy_Normal_Gif} />
          </div>
          <Img style={imageStyle} fluid={data.mainmenu.childImageSharp.fluid} />
        </div>
        <div style={container}>
          <Img style={imageStyle} fluid={data.level1.childImageSharp.fluid} />
          <p style={p}>
            QLG is an action packed couch co-op top-down shooter for 2/4 players. Currently we have 2 characters with their own unique abilities and playstyles and 3 levels of progressing complexity.
          </p>
        </div>
        <div style={container}>
          <p style={p}>
            QLG is an action packed couch co-op top-down shooter for 2/4 players. Currently we have 2 characters with their own unique abilities and playstyles and 3 levels of progressing complexity.
          </p>
          <Img style={imageStyle} fluid={data.level2.childImageSharp.fluid} />
        </div>
        <Link to="#top">
          <Img style={chevronStyle} fluid={data.chevron.childImageSharp.fluid} />
        </Link>
      </div>
    </Layout>
  )
}

const innerHeader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: `960px`,
  marginLeft: 'auto',
  marginRight: 'auto'
}

const leftAlign = {
  color: '#21A59B',
  textAlign: 'left',
  padding: '20px',
  fontFamily: 'Nunito'
}

const HeadingStyle = {
  color: '#21A59B',
  textAlign: 'center',
  padding: '100px',
  fontFamily: 'california-dealership',
  fontSize: '3rem',
  textShadow: `5px #3D405B`
}

const regularText = {
  color: '#21A59B',
  fontFamily: 'Nunito',
}

const p = {
  color: '#3D405B',
  fontFamily: 'Nunito',
  width: "40%",
  textAlign: 'center',
  margin: 'auto'
}

const imageStyle = {
  width: "50%"
}

const chevronStyle = {
  margin: 'auto',
  maxWidth: '5rem',
  maxHeight: '5rem'
}

export default QLG