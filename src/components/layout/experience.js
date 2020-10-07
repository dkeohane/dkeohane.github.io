import React from 'react'

function Experience() {
  return (
    <React.Fragment>
      <h1 id="experience" style={headingStyle}>Experience!</h1>
    </React.Fragment>
  )
}

const headingStyle = {
  background: '#004225',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'Nunito',
  fontSize: 'max-font-size'
}

const contentStyle = {
  color: '#004225',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Nunito',
  textDecoration: 'none'
}

export default Experience;