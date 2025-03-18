import React, { useEffect, useState } from 'react'

const GetApi = () => {
  const [data, setData] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
      result.json().then((resp) => {
        // console.log('result', resp);
        setData(resp)
      })
    })
  }

    useEffect(() => {
     getData()
    }, [])

  return (
    <div>
      <h2>GET API Method</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h4>userId: {item.userId}</h4>
            <h4>Id: {item.id}</h4>
            <h4>Title: {item.title}</h4>
            <p>Body: {item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GetApi
