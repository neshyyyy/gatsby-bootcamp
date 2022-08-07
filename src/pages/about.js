import React from 'react'
import { Link } from 'gatsby'
import Head from "../components/head"
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>“When I travel, there are no rules with my diet. I eat whatever looks good, But in small portions. food is such a rich part of the travel experience. There is no way I would cut that out!”
                Zoe McLellan</p>
            <p>This is my contact for more info.<Link to="/contact">Contact me.</Link></p>
        </Layout>

    )
}

export default AboutPage