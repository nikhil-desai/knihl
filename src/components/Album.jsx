import * as React from "react"
import PropTypes from "prop-types"


const Header = ({ name, sub, img }) => (
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
    <img src={img} width={220} alt="Album Artwork" />
    <h2>{name}</h2>
    <h6 style={{ marginTop: `-1em` }}>{sub}</h6>
    <div
      className="center"
      style={{
        backgroundColor: `black`,
        borderRadius: `10px`,
        padding: `.25em`,
      }}
    >
    </div>
  </div>
)

Header.propTypes = {
  name: PropTypes.string,
  sub: PropTypes.string,
  img: PropTypes.string,
}

Header.defaultProps = {
  name: `Title`,
  sub: `Subheading`,
  img: `Artwork`,
}

export default Header
