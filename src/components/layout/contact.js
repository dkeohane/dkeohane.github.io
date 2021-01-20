import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import CV from './../../../static/DKeohaneCV.pdf'
import Img from "gatsby-image"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      email: file(relativePath: { eq: "icons/email.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "icons/linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <h1 id="contact" style={headingStyle}>Let's talk!</h1>
      <div style={container}>
        <p style={contentStyle}>Would you like to work on something together? I'd love to hear from you!</p>
        <div className="navigation" style={Grid}>
          <a style={a} alt="email:keohane.dan@gmail.com" href='mailto:keohane.dan@gmail.com'>
            <Img fluid={data.email.childImageSharp.fluid}></Img>
          </a>
          <a style={a} href='https://www.linkedin.com/in/dkeohane/'>
            <Img fluid={data.linkedin.childImageSharp.fluid}></Img>
          </a>
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
  marginRight: 'auto'
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
  padding: '0px',
  fontFamily: 'Nunito',
  textDecoration: 'none'
}

const links = {
  color: '#d76229',
  textAlign: 'center',
  fontFamily: 'Nunito',
  textDecoration: 'none',
}


const Grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 200px)',
  gridAutoRows: 'minMax(30px, auto)',
  justifyContent: 'center',
  justifyItems: 'center',
  margin: '30px'
}

const a = {
  width: "40%"
}


export default Contact;