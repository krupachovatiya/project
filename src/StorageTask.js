import React, { useEffect, useState } from 'react'

const StorageTask = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    const localName = localStorage.getItem('name')
    if (localName) {
      setName(localName)
    } 
    const localEmail = localStorage.getItem('email')
    if (localEmail) {
      setEmail(localEmail)
    }
  }, [])

  const saveLocal = () => {
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
  }

  const saveSession = () => {
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('email', email)
  }

  const clearLocal = () => {
    localStorage.removeItem('name')
    setName('')
    localStorage.removeItem('email')
    setEmail('')
  }

  const clearSession = () => {
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('email')
  }


  return (
      <div>
        <h2>Storage Form</h2>
        <input type='text' placeholder='Name' value={name} onChange={handleChangeName}/>
        <br/><br/>
        <input type='email' placeholder='Email' value={email} onChange={handleChangeEmail}/>
        <br/><br/>
        <button onClick={saveLocal}>Save to Local</button>
        <button onClick={saveSession}>Save to Session</button>
        <br/><br/>
        <button onClick={clearLocal}>Clear Local</button>
        <button onClick={clearSession}>Clear Session</button>

      </div>
  )
}

export default StorageTask
