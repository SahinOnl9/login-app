import React, { Component } from 'react'
import loginService from '../../API/login-service';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    loginClicked = () => {
        const { username, password } = this.state;
        // console.log(username, '  ', password);
        loginService.login({ username, password })
        .then(() => this.props.history.push(`/welcome/${username}`))
    }
    render() {
        const { username, password } = this.state;
        return (
            <div>
                username: <input type="text" name="username" value={username} onChange={this.handleChange}/>
                password: <input type="password" name="password" value={password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked} >Login</button>
            </div>
        )
    }
}