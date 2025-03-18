import React, { Component } from "react";

class UserDelete extends Component
{
    constructor()
    {
        super()
        this.state = {
            age: 23
        }
    }

    componentWillUnmount()
    {
        
        console.log('componentWillUnmount')
    }

    render()
    {
        return(
            <div>
                <h1>React</h1>
                <p>{this.state.age}</p>
                <button onClick={() => {this.setState({age: null})}}>Delete</button>
            </div>
        )
    }
}

export default UserDelete