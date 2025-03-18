import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosGet = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((resp) => {
            console.log('Result:', resp)
            setData(resp.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div>
      <h1>Axios Get Method</h1>
      <ul>
        {data.map(item => (
            <li key={item.id}>
                <h4>Title: {item.title}</h4>
                <p>Body: {item.body}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default AxiosGet
