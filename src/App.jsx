import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color.js'

function App() {

    //Función para calcular el indice random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

   //Extraemos el elemento según el indice random
  const indexRandom = quotes[getIndexRandom(quotes)]
  const indexColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(indexRandom)
  const [randomColor, setrandomColor] = useState(indexColor)

  //Función para calcular tanto el quote como el color random
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setrandomColor(color[getIndexRandom(color)])
}

  return (
    <div style={{ backgroundColor: randomColor }} className="App">
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
