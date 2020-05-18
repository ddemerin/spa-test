import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  console.log(name)

  const updateName = (e) => {
    e.preventDefault()
    const key = e.target.name
    console.log(key)
    const value = e.target.value
    console.log(value)
    setName(value)
  }

  return (
    <>
      <h1>Enter your name below!</h1>
      <form>
        <input
          type="text"
          placeholder="Your Name Here"
          name="Name"
          onChange={updateName}
        />
        <button onClick={updateName}>Submit</button>
        {{ updateName } ? <h2>{`Welcome ${name}!`}</h2> : <></>}
      </form>
    </>
  )
}

export default App
