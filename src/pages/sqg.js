// React / Gatsby
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

import main_menu_GIF from './../images/sqg/gifs/main_menu.gif'

import GIF1 from './../images/sqg/gifs/GIF1.gif'
import GIF2 from './../images/sqg/gifs/GIF2.gif'
import GIF3 from './../images/sqg/gifs/GIF3.gif'
import GIF4 from './../images/sqg/gifs/GIF4.gif'
import hulk_smash_GIF from './../images/sqg/gifs/GIF5.gif'

import melee_AOE_Gif from './../images/sqg/gifs/melee_aoe.gif'
import enemy_Normal_Gif from './../images/sqg/gifs/enemy_bomb.gif'
import enemy_Spider_Gif from './../images/sqg/gifs/enemy_bomb_spider.gif'

const SQG = () => {
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
      <div style={{background: '#F4F1DE'}}>
        <SEO title="SQG" />
        <h1 id="top" style={HeadingStyle}>SQG: Super Quantum Gravity</h1>
        <div style={mediaContent}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1Z-JATcllfA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        {/* INTRO */}
        <div style={container}>
          <div style={p}>
            <p>
              SQG is an action packed couch co-op top-down shooter for 2/4 players. Currently we have 2 characters with their own unique abilities and playstyles and 3 levels of progressing complexity.
            </p>
            <img src={enemy_Normal_Gif} />
          </div>
          <img style={imageStyle} src={main_menu_GIF} />
        </div>

        <div style={container}>
          <img style={imageStyle} src={GIF1} />
          <p style={p}>
            Myself and a friend worked on the game in our spare time for over a year. He produced all art assets, while I focused on development.
          </p>
        </div>

        <div style={container}>
          <p style={p}>
            SQG was written in C# in the Unity Engine. We use Git as our version control, and have a demo of the game hosted on <a style={link} href="https://dkeohane.itch.io/sqg">itch.io</a>
          </p>
          <img style={imageStyle} src={GIF2} />
        </div>


        <div style={container}>
          <img style={imageStyle} src={GIF3} />
          <p style={p}>
            Each character has a standard attack, two abilities and one special ability.
          </p>
        </div>

        {/* MELEE */}
        <div style={container}>
          <div style={p}>
            <p>
              Watch out for the melee special!!
            </p>
            <img src={melee_AOE_Gif} style={imageStyle}/>
          </div>
          <img style={imageStyle} src={hulk_smash_GIF} />
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
  fontFamily: 'california-dealership',
  fontSize: '3rem',
  textShadow: `5px #3D405B`
}

const mediaContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: `960px`,
  margin: 'auto',
  align: "center"
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: `960px`,
  marginLeft: 'auto',
  marginRight: 'auto',
  align: "center",
  padding: "5px"
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


const imageStyle = {
  width: "50%",
  margin: 'auto'
}

const chevronStyle = {
  margin: 'auto',
  maxWidth: '5rem',
  maxHeight: '5rem'
}

export default SQG