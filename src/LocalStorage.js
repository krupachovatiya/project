import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    const [notes, setNotes] = useState('')

    useEffect(() => {
        const savedNotes = localStorage.getItem('userNote')
        if (savedNotes) {
            setNotes(savedNotes)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('userNote', notes)
    }, [notes])


  return (
    <div>
      <h2>Notes</h2>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)}/>
    </div>
  )
}

export default LocalStorage
