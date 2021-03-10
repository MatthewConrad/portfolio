import * as React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>
      Sorry, but that page doesn't exist! Why don't you go back to{" "}
      <Link to="/">my portfolio</Link>?
    </p>
  </>
)

export default NotFoundPage
