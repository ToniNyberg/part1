import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  const Total = () => {
    return (
      <>{good + neutral + bad}</>
    )
  }


  const Average = () => {
    return (
      <>{(good - bad) / (good + neutral + bad)}</>
    )
  }

  const Positive = () => {
    return (
      <>{good / (good + neutral + bad) * 100}</>
    )
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>bad</button>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All <Total /></p>
      <p>Average <Average /></p>
      <p>Positive <Positive /> </p>
    </div>
  )
}

export default App
