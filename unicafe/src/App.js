import React, { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  const StatisticLine = (props) => (

    <tr>
      <td>{props.text}</td>
      <td>{props.data}</td>
    </tr>

  )

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
      <>{good / (good + neutral + bad) * 100} %</>
    )
  }

  const Statistics = () => {
    if (good + neutral + bad === 0)
      return (
        <p>No feedback given</p>
      )
    else
      return (<>
        <h2>Statistics</h2>
        <table style={{ "justify-content": "left", "text-align": "left" }}>
          <StatisticLine text="Good" data={good} />
          <StatisticLine text="Neutral" data={neutral} />
          <StatisticLine text="Bad" data={bad} />
          <StatisticLine text="All" data={<Total />} />
          <StatisticLine text="Average" data={<Average />} />
          <StatisticLine text="Positive" data={<Positive />} />
        </table>
      </>)


  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => handleGood()} text="good" />
      <Button handleClick={() => handleNeutral()} text="neutral" />
      <Button handleClick={() => handleBad()} text="bad" />
      <Statistics />
    </div>
  )
}

export default App
