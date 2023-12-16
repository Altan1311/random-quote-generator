import { useState, useEffect } from 'react'
import './App.css'

import colors from './colors'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'


function App() {
  const [color, setColor] = useState("orange")
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    getRandomColor()

    getRandomQuote()
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = color
    console.log(color)
  }, [color]);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)

    setColor(colors[randomIndex])
  }

  const getRandomQuote = async () => {
    try{
      const res = await fetch('https://dummyjson.com/quotes/random')
      const json = await res.json()
      console.log(json)
      
      setQuote(json.quote)
      setAuthor(json.author)
    }catch(err){
      console.log(err)
    }
  }

  const newQuote = () => {
    getRandomColor()

    getRandomQuote()
  }

  return (
    <>
      <div id="quote-box">
        <div id="text" style={{color: color}}>
          <FontAwesomeIcon icon={faQuoteLeft} />
          {quote}
        </div>
        <div id="author" style={{color: color}}>
          - {author}
        </div>
        <div id="footer">
          <div id="social">
            <button type="button" className="button" style={{background: color}}>
              
              <div className="hover">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </button>
            <button type="button" className="button" style={{background: color}}>
              <div className="hover">
                <FontAwesomeIcon icon={faTumblr} />
              </div>
            </button>
          </div>

          <div>
            <button type="button" className="button" onClick={newQuote} style={{background: color}}>
              <div className="hover">
                New quote
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="attribution">
        by Altan Alaca
      </div>
    </>
  )
}

export default App
