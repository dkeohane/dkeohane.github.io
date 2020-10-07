import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BurgerThis = () => (
  <Layout>
    <SEO title="Burger This" />
    <h1 style={HeadingStyle}>Burger This</h1>
    <p align="center">
      <iframe src="https://itch.io/embed/23489" height="167" width="552" frameborder="0" display="block"><a href="https://dkeohane.itch.io/burger-this">Burger This by dkeohane</a></iframe>
    </p>
    <p style={p}>Burger This is a game I made entirely for Ludum Dare 32 in April 2015 using the Unity Game Engine.</p>
    <p style={p}>The theme for LD32 was An Unconventional Weapon.</p>
    <p style={p}>For Burger This, you play as a waiter in a restaurant, catering to customers with an infinite appetite. You must hurry to fulfil their orders in time, or their can be dire consequences!</p>
    <p style={p}>I completed the core idea and implementation of Burger This in one weekend for LD32. This was a great opportunity to learn Unity.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

const HeadingStyle = {
  color: '#004225',
  textAlign: 'center',
  padding: '30px',
  fontFamily: 'Nunito',
  fontSize: 'max-font-size'
}

const p = {
  color: '#004225',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Nunito'
}

export default BurgerThis
