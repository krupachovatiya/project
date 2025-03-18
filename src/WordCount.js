import React, {useState, useEffect} from 'react'

const WordCount = () => {
  const [word, setWord] = useState('')
  const [count, setCount] = useState(0)
  const [saved, setSaved] = useState('')
  const [saveWord, setSaveWord] = useState('')

  const handleChange = (e) => {
    setWord(e.target.value)
    setCount(e.target.value.split(' ').filter(word => word ).length)
  }

  useEffect(() => {
    console.log('word', word)
    if (!word) {
      return
    }

    const timer = setTimeout(() => { 
      setSaved('Saved')
      setSaveWord(word)

      setTimeout(() => {
        setSaved('')
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer)

  }, [word])

   
  return (
    <div className='main'>
      <h1>Word Count</h1>
      <input type='text' value={word} onChange={handleChange}/>
      <p>Count: {count}</p>
      <p>{saved}</p>
      <p>save Word: {saveWord}</p>
    </div>
  )
}

export default WordCount
