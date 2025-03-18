import React, { useEffect, useState } from 'react'

const DeleteApi = () => {
  const [data, setData] = useState([])

  const deleteData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
      result.json().then((resp) => {
        // console.log('result', resp);
        setData(resp)
      })
    })
  }

    useEffect(() => {
      deleteData()
    }, [])

    const handleDelete = (id) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      }).then((result) => {
        result.json().then((resp) => {
          console.log('result:' , resp)
        })
      })
    }

  return (
    <div>
      <h2>DELETE API Method</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h4>userId: {item.id}</h4>
            <h5>Title: {item.title}</h5>
            <p>Body: {item.body}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DeleteApi
