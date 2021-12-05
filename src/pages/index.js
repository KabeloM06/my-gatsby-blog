import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <h1>Welcome to my weird journey</h1>
    <StaticImage
      src="../images/selfie.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>This blog will be me documenting my journey into tech. I will be talking about the projects I build, mistakes I make, and the fun I have.</p>
    <p>I called the blog Hills And Valleys because it is perfect metaphor for how this 
      journey has looked so far. There are stretches in my learning where everythin is rosey and I can do nothing wrong. WhereI am the KIng of the world. But those are ALWAYS followed by stretches where 
      I hit a brick wall and nothing I do seems to work. When all my code is trash.
    </p>
    <p>
      Now click on a blog title and see what my latest experiences have been
    </p>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      
    </p>
  </Layout>
)

export default IndexPage
