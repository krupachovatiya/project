import React, { useEffect, useState } from 'react'

const PutApi = () => {
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        id: null,
        title: '',
        body: ''
    })

    const putData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
        result.json().then((resp) => {
          // console.log('result:', resp)
          setData(resp)
          setFormData({
            id: resp[0].id,
            title: resp[0].title,
            body: resp[0].body
          })
        })
      })
    }

    useEffect(() => {
     putData()
    }, [])

    const editData = (uniId) => {
        // console.log(data[uniId - 1])
        let userData = (data[uniId - 1])
        setFormData({
            id: userData.id,
            title: userData.title,
            body: userData.body
        })
    }

    const handleUpdate = () => {
      let id = formData.id
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },  
        body: JSON.stringify(formData)
      }).then((result) => {
        result.json().then((resp) => {
          console.log('Result:' , resp)
        })
      })
    }

  return (
    <div>
        <h2>PUT API Method</h2>
        <div>
            <textarea placeholder='Title' value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/>
            <br/><br/>
            <textarea placeholder='Body' value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})}/>
            <br/><br/>
            <button onClick={handleUpdate}>Update</button>
        </div>
        <ul>
        {data.map(item => (
          <li key={item.id}>
            <h4>userId: {item.id}</h4>
            <h5>Title: {item.title}</h5>
            <p>Body: {item.body}</p>
            <button onClick={() => editData(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PutApi