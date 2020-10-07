import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LifeCycle = () => {
  const data = useStaticQuery(graphql`
    query {
      finish: file(relativePath: { eq: "lifecycle/finish.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      obstacle: file(relativePath: { eq: "lifecycle/obstacle.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      withfriend: file(relativePath: { eq: "lifecycle/withfriend.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
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
        <SEO title="LifeCycle" />
        <h1 id="top" style={HeadingStyle}>LifeCycle</h1>
        <div style={container}>
          <div style={p}>
            <p>
            I created LifeCycle in 4 days with my girlfriend as part of a gamejam we held at home during Covid-19. We wanted to do something creative with our week off, and thought it could be a fun project to work on together.
            </p>
          </div>
          <Img style={imageStyle} fluid={data.withfriend.childImageSharp.fluid} />
        </div>
        <div style={container}>
          <Img style={imageStyle} fluid={data.obstacle.childImageSharp.fluid} />
          <p style={p}>
          LifeCycle is a mobile game created in Unity. I worked on Programming and Game Design. Art assets + animations were done by my girlfriend, and we sourced royalty free game music online.
          </p>
        </div>
        <div style={container}>
          <div style={p}>
            <p>
            LifeCycle is inspired by games like Thomas was Alone, where the player must make their characters work together to overcome obstacles. We felt this message, paired with the playful music and artstyle, was well suited for a childrens game.
            </p>
          </div>
          <Img style={imageStyle} fluid={data.finish.childImageSharp.fluid} />
        </div>
        <Link to="#top">
            <Img style={chevronStyle} fluid={data.chevron.childImageSharp.fluid} />
        </Link>
      </div>
    </Layout>
  )
}

const HeadingStyle = {
  color: '#d76229',
  textAlign: 'center',
  padding: '50px',
  fontFamily: 'OrangeJuice',
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

const chevronStyle = {
  margin: 'auto',
  maxWidth: '5rem',
  maxHeight: '5rem'
}

export default LifeCycle
