import React, { useState } from 'react';
import ExperienceTile from './experience-tile'
import { useStaticQuery, graphql } from "gatsby"
import CV from './../../../static/DKeohaneCV.pdf'

const Experience = (props) => {
  const data = useStaticQuery(graphql`
    query {
      demonware: file(relativePath: { eq: "studios/DEMONWARE_NAMED_STACKED_BLACK.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ubiAnnecy: file(relativePath: { eq: "studios/Ubisoft Annecy_LOGO BLACK.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ubiReflections: file(relativePath: { eq: "studios/REFLECTIONS_STACKED_BLACK.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)
  return (
    <React.Fragment>
      <h1 id="experience" style={headingStyle}>Experience</h1>
      <div style={container}>
        <p style={contentStyle}>I've been fortunate to work in some fantastic workplaces in my career.</p>
        <p style={contentStyle}> <a href={CV} style={links}>Click here for my CV</a> </p>
      </div>
      <div className="container">
        <div className="ExperienceTiles" style={experienceList}>
          <ExperienceTile image={data.demonware} title="Demonware" category="April 2017 – May 2020"/>
          <ExperienceTile image={data.ubiAnnecy} title="Ubisoft Annecy" category="September 2015 – February 2017" />
          <ExperienceTile image={data.ubiReflections} title="Ubisoft Reflections" category="July 2014 – September 2015"/>
        </div>
      </div>
    </React.Fragment>
  )
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  maxWidth: `600px`,
  marginLeft: 'auto',
  marginRight: 'auto',
}

const headingStyle = {
  background: '#FCE181',
  color: '#3D405B',
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'california-dealership',
  fontSize: '2rem'
}

const contentStyle = {
  color: '#3D405B',
  textAlign: 'center',
  padding: '5px',
  fontFamily: 'Nunito',
  textDecoration: 'none'
}

const experienceList = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 200px)',
  gridGap: '40px', 
  gridAutoRows: 'minMax(100px, auto)',
  justifyContent: 'center',
  justifyItems: 'center',
  margin: '40px'
}

const links = {
  color: '#d76229',
  textAlign: 'center',
  fontFamily: 'Nunito',
  textDecoration: 'none',
}

export default Experience;