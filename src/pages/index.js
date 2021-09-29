import * as React from "react"

// Images
import logoGIF from "../images/knihl.webp"
import toad from "../images/DontMessToad.webp"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Album from "../components/Album"

import "./index.css"

import AudioPlayer from "../components/AudioPlayer"

const capitalCrisis = [
  {
    title: "Arcade Affect",
    artist: "K'Nihl",
    audioSrc: "../music/Arcade Affect.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#444574",
  },
  {
    title: "Bad Bankers",
    artist: "K'Nihl",
    audioSrc: "../music/Bad Bankers.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#462945",
  },
  {
    title: "Capital Crisis",
    artist: "K'Nihl",
    audioSrc: "../music/Capital Crisis.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#484724",
  },
  {
    title: "Designed Despair",
    artist: "K'Nihl",
    audioSrc: "../music/Designed Despair.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#183746",
  },
  {
    title: "Everyone Eats",
    artist: "K'Nihl",
    audioSrc: "../music/Everyone Eats.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#698370",
  },
  {
    title: "Favored Fortune",
    artist: "K'Nihl",
    audioSrc: "../music/Favored Fortune.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#283756",
  },
  {
    title: "Grifting Giants",
    artist: "K'Nihl",
    audioSrc: "../music/Grifting Giants.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#674360",
  },
  {
    title: "Here's Help",
    artist: "K'Nihl",
    audioSrc: "../music/Here's Help.mp3",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#173743",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <img src={logoGIF} width={150} alt="Knihl Logo" className="logo" />
    <h1 style={{color:"#FFDD66", textAlign:"center"}}>Capital Crisis (EP)</h1>
    <p className="center" style={{color:"whitesmoke", textAlign:"center", paddingTop:"12px"}}>Capital Crisis can be found on all the streaming/download platforms!</p>
    <AudioPlayer tracks={capitalCrisis}/>
    
    <Album name="Don't Mess with the Toad" sub="A deep house album releasing early November. This will be the second EP from K'Nihl and will have 8-10 songs." img={toad} />

    <p className="center">
      <a href="https://opensea.io/collection/knihl">
        <button>
          <h3>My NFTs</h3>
        </button>
      </a>
    </p>
  </Layout>
)

export default IndexPage
