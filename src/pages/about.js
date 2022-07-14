import React from 'react'
import { Link } from 'gatsby'
import Head from "../components/head"
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>im currently learning front end develpoment.</p>
            <p>This is my contact for more info.<Link to="/contact">Contact me.</Link></p>
        </Layout>

    )
}

export default AboutPage