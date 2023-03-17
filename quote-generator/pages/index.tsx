import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [quotes, setQuotes] = useState([{}])
  const [quote,  setQuote] = useState({})

  useEffect(()=> {
    fetch("https://type.fit/api/quotes")
    .then((res)=> res.json())
    .then((json) =>{
      setQuote(json[0] || '')
      setQuotes(json || [])
    })
  }, [])
  

  function getRandomQuote(quotes: {text:string, author:string}[]):{text:string, author:string} {
    const index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
  }
  
  function getNewQuote() {
    setQuote(getRandomQuote(quotes))
  }

  return (
    <main>
      <h1> Quote Generator</h1>
      <section>
        <button onClick={getNewQuote}> get new Quote</button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </main>
  )
}




export default Home
