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
    audioSrc: "https://www.dropbox.com/s/s204ue4xpt0bjiu/Arcade%20Affect.mp3?raw=1",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#444574",
  },
  {
    title: "Bad Bankers",
    artist: "K'Nihl",
    audioSrc: "https://www.dropbox.com/s/k0mmiw9lyw9442j/Bad%20Bankers.mp3?raw=1",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#462945",
  },
  {
    title: "Capital Crisis",
    artist: "K'Nihl",
    audioSrc: "https://www.dropbox.com/s/borjgtztj8wdiet/Capital%20Crisis.mp3?raw=1",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#484724",
  },
  {
    title: "Designed Despair",
    artist: "K'Nihl",
    audioSrc: "https://www.dropbox.com/s/pg88nvo5z9b89ki/Designed%20Despair.mp3?raw=1",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#183746",
  },
  {
    title: "Everyone Eats",
    artist: "K'Nihl",
    audioSrc: "https://www.dropbox.com/s/wcm42k56qa2tyv5/Everyone%20Eats.mp3?raw=1",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#698370",
  },
  {
    title: "Favored Fortune",
    artist: "K'Nihl",
    audioSrc: "https://www.dropbox.com/s/rg0xdufpwb0l1zk/Favored%20Fortune.mp3?raw=1",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#283756",
  },
  {
    title: "Grifting Giants",
    artist: "K'Nihl",
    audioSrc: "https://www.dropbox.com/s/pwhwycyb7577ypc/Grifting%20Giants.mp3?raw=1",
    image: "https://lh3.googleusercontent.com/BNQDTX7LJeWfEKtBOlpYN3QZk7nDh_aewVLnjzlQNnphjY_Oa9mlkSQl8L3VP5fuH_Y1Qz5cJsIE1AeSJQ_f6p3R-Eqes-yLjtCuhgI=w600",
    color: "#674360",
  },
  {
    title: "Here's Help",
    artist: "K'Nihl",
    audioSrc: "https://www.dropbox.com/s/k378hd9u16hsjuz/Here%27s%20Help.mp3?raw=1",
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
