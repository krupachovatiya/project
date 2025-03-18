import axios from 'axios'
import React, { useEffect } from 'react'

const AxiosDelete = () => {


    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((resp) => {
            console.log(resp.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then((resp) => {
            alert('data deleted')
            console.log(resp.data)
        })
    }

  return (
    <div>
      <h2>Axios Delete Method</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default AxiosDelete
