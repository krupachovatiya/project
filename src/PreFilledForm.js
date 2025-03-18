import React, { useEffect, useState } from 'react'

const PreFilledForm = () => {
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
      result.json().then((resp) => {
        // console.log('result', resp);
        setData(resp)
        setFormData({
            title: resp[0].title,
            body: resp[0].body
        })
      })
    })
    }, [])

    const editData = (uniId) => {
        // console.log(data[uniId - 1])

        let userData = (data[uniId - 1])
        setFormData({
            title: userData.title,
            body: userData.body
        })
    }

  return (
    <div>
        <h2>Pre-Filled Form</h2>
        <div>
            <textarea placeholder='Title' value={formData.title}/>
            <br/><br/>
            <textarea placeholder='Body' value={formData.body}/>
            <br/><br/>
            <button>Update</button>
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

export default PreFilledForm