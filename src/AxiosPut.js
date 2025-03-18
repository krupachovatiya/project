import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosPut = () => {
    const [data, setData] = useState({
        title: '',
        body: ''
    })

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((resp) => {
            console.log(resp.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleUpdate = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {data})
        .then((response) => {
            console.log(response.data)
        })
    }

  return (
    <div>
      <h2>Axios Put Method</h2>
      <textarea placeholder='Title' name='title' onChange={handleChange}/>
      <br/><br/>
      <textarea placeholder='Body' name='body' onChange={handleChange}/>
      <br/><br/>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default AxiosPut
