import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Full-stack Developer" />
    <h1>Hello!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </>
)

export default IndexPage
