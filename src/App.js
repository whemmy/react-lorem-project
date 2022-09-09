import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
    if (amount < 1 || amount > data.length) {
      setText(data.slice(0, 1))
    }
  }

  return (
    <section>
      <h3 className="lorem-title">tired of boring ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          value={count}
          id="amount"
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p id="index">{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
