import React from 'react'
import "./Banner.scss"

const Banner = (props) => {
    const{ image , title , desc} = props
  return (
    <main className="banner">
        <div className="image">
            <img src={image} alt="Loading" />
        </div>
        <div className="banner-text">
            <h1>{title}</h1>
            <p>{desc}</p>
            <button>Know More</button>
        </div>
    </main>
  )
}

export default Banner