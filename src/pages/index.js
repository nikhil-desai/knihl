import * as React from "react"
import { Link } from "gatsby"

import logoGIF from "../images/knihl.webp"
import capital from "../images/CapitalCrisis.webp"
import toad from "../images/DontMessToad.webp"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./index.css"

import {
  SiApplemusic,
  SiSpotify,
  SiDeezer,
  SiTiktok,
  SiAmazon,
  SiTidal,
} from "react-icons/si"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <img
      src={logoGIF}
      width={150}
      alt="Knihl Logo"
      className="logo"
    />
    <h1>My Albums</h1>
    <div
      style={{
        margin: `2rem`,
        color: `white`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        fontSize: `1.75em`,
        backgroundColor: `black`,
        borderRadius: `25px`,
        padding: `1em`,
      }}
    >
      <img src={capital} width={220} alt="Knihl Logo" />
      <h2>Capital Crisis</h2>
      <h6 style={{marginTop: `-1em`}}>October 1st</h6>
      <div
        className="center"
        style={{
          backgroundColor: `black`,
          borderRadius: `10px`,
          padding: `.25em`,
        }}
      >
        <a href="#">
          <SiApplemusic />
        </a>
        {` `}
        <a href="#">
          <SiSpotify />
        </a>
        {` `}
        <a href="#">
          <SiDeezer />
        </a>
        {` `}
        <a href="#">
          <SiTiktok />
        </a>
        {` `}
        <a href="#">
          <SiAmazon />
        </a>
        {` `}
        <a href="#">
          <SiTidal />
        </a>
      </div>
    </div>
    <div
      style={{
        margin: `2rem`,
        color: `white`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        fontSize: `1.75em`,
        backgroundColor: `black`,
        borderRadius: `25px`,
        padding: `1em`,
      }}
    >
      <img src={toad} width={220} alt="Knihl Logo" />
      <h2>Don't Mess with the Toad</h2>
      <h6 style={{marginTop: `-1em`}}>Coming Soon</h6>
      <div
        className="center"
        style={{
          backgroundColor: `black`,
          borderRadius: `10px`,
          padding: `.25em`,
        }}
      >
        <a href="#">
          <SiApplemusic />
        </a>
        {` `}
        <a href="#">
          <SiSpotify />
        </a>
        {` `}
        <a href="#">
          <SiDeezer />
        </a>
        {` `}
        <a href="#">
          <SiTiktok />
        </a>
        {` `}
        <a href="#">
          <SiAmazon />
        </a>
        {` `}
        <a href="#">
          <SiTidal />
        </a>
      </div>
    </div>
    <p className="center">
      <a href="https://opensea.io/collection/knihl">
        <button><h3>My NFTs</h3></button>
      </a>
    </p>
  </Layout>
)

export default IndexPage
