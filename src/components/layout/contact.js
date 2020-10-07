import React from 'react'

function Contact() {
  return (
    <React.Fragment>
      <h1 id="contact" style={headingStyle}>Let's talk!</h1>
      <div style={container}>
        <p style={contentStyle}>Would you like to work on something together? I'd love to hear from you!</p>
        <p style={contentStyle}>email:<a style={contentStyle} href="mailto:keohane.dan@gmail.com">keohane.dan@gmail.com</a></p>
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
  padding: '10px',
  fontFamily: 'Nunito',
  textDecoration: 'none'
}

export default Contact;