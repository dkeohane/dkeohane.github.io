import React from 'react'
import PortfolioTile from './portfolio-tile'
import { useStaticQuery, graphql } from "gatsby"
import '../../styles/PortfolioTiles.css'

const Portfolio = (props) => {
  const data = useStaticQuery(graphql`
    query {
      qlg: file(relativePath: { eq: "qlg/cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lifecycle: file(relativePath: { eq: "lifecycle/cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      burgerThis: file(relativePath: { eq: "burger-this/cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`)
console.log(data.qlg)
  return (
    <React.Fragment>
      <h1 id="portfolio" style={headingStyle}>Personal Portfolio</h1>
      <div className="container">
        <div className="PortfolioTiles" style={portfolioGrid}>
          <PortfolioTile
            link="/qlg"
            image={data.qlg}
            title="QLG"
            category="Unity Game"
          />
          <PortfolioTile
            link="/lifecycle"
            image={data.lifecycle}
            title="Lifecycle"
            category="Unity Mobile Game"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const headingStyle = {
  background: '#FCE181',
  color: '#3D405B',
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'california-dealership',
  fontSize: '2rem'
}

const portfolioGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 200px)',
  gridGap: '40px', 
  gridAutoRows: 'minMax(100px, auto)',
  justifyContent: 'center',
  justifyItems: 'center',
  margin: '20px'
}

export default Portfolio;