import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Part = () => {
    const map1 = course.parts.map(part => <p>{part.name} {part.exercises}</p>)
    return (
      <div>
        {map1}
      </div>
    )
  }

  const Total = () => {
    return (
      <>Total: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</>
    )
  }

  const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    )
  }



  const Content = () => {
    return (
      <div>
        <Part />
      </div>
    )
  }




  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total />
    </div>
  )
}

export default App
