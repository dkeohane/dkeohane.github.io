import React from 'react'

function Bio() {
  return (
    <React.Fragment>
      <h1 style={headingStyle}>Bio</h1>
      <div style={container}>
        <p style={contentStyle}>Hi! I'm Dan, an Irish Software Engineer living in France. My goal is to create compelling games and robust services.</p>
        <p style={contentStyle}>I've worked professionally on a number of AAA titles, and develop my own games as a hobby.</p>
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
export default Bio;