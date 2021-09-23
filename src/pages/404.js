import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import logoGIF from "../images/404.webp"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <img
      src={logoGIF}
      width={150}
      alt="Knihl 404"
      style={{
        marginBottom: `1.45rem`,
        borderRadius: `0 0 1.75em 1.75em`,
      }}
    />
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <h2> Sorry, this page does not exist.</h2>
    </div>
    <br />
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <Link to="/">
        <button>Let Me Take You Back!</button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
