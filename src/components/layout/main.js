import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

//function Main() {
const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      GB: file(relativePath: { eq: "icons/GB_site.png" }) {
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
      <div style={container}>
        <p style={contentStyle}>Nice to meet you! I'm Dan. I'm an Irish Back-end and Game Developer living in Annecy, France. If you'd like to work together, <Link style={links} to="/#contact">let's talk!</Link></p>
        <div>
          <Img style={controllerStyle} fluid={data.GB.childImageSharp.fluid} />
          <p style={subTextStyle}>My name's Dan. I make games</p>
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

const links = {
  color: '#d76229',
  textAlign: 'center',
  fontFamily: 'Nunito',
  textDecoration: 'none',
}

const contentStyle = {
  color: '#3D405B',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Nunito'
}

const controllerStyle = {
  margin: 'auto',
  maxWidth: '15%',
}

const subTextStyle = {
  color: '#3D405B',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Nunito',
  fontSize: 'fit-width'
}

export default Main;