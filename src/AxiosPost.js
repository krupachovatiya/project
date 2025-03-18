import axios from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {
  const [data, setData] = useState({
    title: '',
    body: ''
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSave = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {data})
    .then((resp) => {
      console.log(resp)
    })
  }

  return (
    <div>
      <h2>Axios Post Method</h2>
      <textarea placeholder='Title' name='title' value={data.title} onChange={handleChange}/>
      <br/><br/>
      <textarea placeholder='Body' name='body' value={data.body} onChange={handleChange}/>
      <br/><br/>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default AxiosPost
