import React, { Component } from 'react'

class User extends Component
{
    constructor()
    {
        super()
        this.state= {
            name: 'abc'
        }
    }

    componentDidMount() 
    {
        console.log('componentDidMount')
    }

    render()
    {
        return(
            <div>
                <h1>React</h1>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default User