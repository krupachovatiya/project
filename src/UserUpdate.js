import React, { Component } from "react";

class UserUpdate extends Component
{
    constructor()
    {
        super()
        this.state = {
            name: 'ewc'
        }
    }

    componentDidUpdate()
    {
        console.log('componentDidUpdate')
    }
    render()
    {
        return(
            <div>
                <h1>React</h1>
                <p>{this.state.name}</p>
                <button onClick={() => {this.setState({name: 'cw'})}}>Update</button>
            </div>
        )
    }
}

export default UserUpdate