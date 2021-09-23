// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import logoGIF from "../images/knihl.webp"
import "./index.css"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Non-Fungible Tokens" />
    <img
      src={logoGIF}
      width={150}
      alt="Knihl Logo"
      className="logo"
    />
    <h1>My NFTs</h1>
    <p className="center">
      <Link to="/">
        <button><h3>Take Me Home</h3></button>
      </Link>
    </p>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
