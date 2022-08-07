import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Holaaaa.</h1>
      <h2>I'm Ganesh , a front end developer living in Malaysia. I love Foooodddd and travel to explore the culture.</h2>
      <p>Need a Travel buddy ? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage
