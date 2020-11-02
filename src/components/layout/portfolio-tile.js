import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

function PortfolioTile(props) {
  return (
    <div className="project" style={container}>
      <Link to={props.link} style={tileLink}>
        <div className="project-image" style={projectImage}>
          <Img fluid={props.image.childImageSharp.fluid} />
        </div>
        <div style={{padding: `5px 0px`}}>
          <div className="project-title" style={projectTitle}>{props.title}</div>
          <div className="project-category" style={projectCategory}>{props.category}</div>
        </div>
      </Link>
    </div>
  )
}

const container = {
  width: "75%",
  margin: "auto"
}

const tileLink = {
  display: 'block',
  color: '#3D405B',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: 'california-dealership',
}

const projectImage = {
  padding: `0.2rem 0.2rem`,
  width: "100%",
}

const projectTitle = {
  fontSize: '1.75rem',
  
}

const projectCategory = {
  fontSize: '1rem',
}

export default PortfolioTile