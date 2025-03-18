import React, { useState } from 'react'

const PostApi = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = () => {
        // console.log({title, body});
        let data = {title, body}
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log('Result: ', result)
        })
    }

    return (
    <div>
        <h1>POST API Method</h1>
        <textarea placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br/><br/>
        <textarea placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)}/>
        <br/><br/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default PostApi