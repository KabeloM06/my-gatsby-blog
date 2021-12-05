import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About me</h1>
    <p>This is story all about how my life got flipped, turned upside down. I'd like to take a minute</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
