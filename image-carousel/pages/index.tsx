/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];


const Home: NextPage = () => {
  const [current, setCurrent] = useState(0);
  
  function nextSide() {
    setCurrent(current === images.length -1 ? 0: current+1);
  }

  function preSide() {
    setCurrent(current === 0? images.length -1 : current -1)
  }

  return (
    <div>
      <h2> image carousel</h2>
      <div className="slider">
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className="left-arrow" onClick={preSide}>
           ⬅
        </div>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className='right-arrow' onClick={nextSide} >
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Home
