import React from "react"
import { Link } from "react-router-dom"
import  {axiosWithAuth}  from "../utils/axiosWithAuth"
import { Card, CardContent, TextField, Button } from "@material-ui/core"
import Navbar from "../helperComponents/navbar"

export default class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handlerChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    Register = e => {
        e.preventDefault()

        axiosWithAuth()
            .post("/api/auth/register")
            .then(res => {
                window.localStorage.setItem("token", res.data.payload)

                this.props.history.push("/login")
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Navbar />
                <Card style={{ width: "40%", margin: "10% auto", textAlign: 'center' }}>
                    <h1>Register</h1>
                    <Link to="/login">Already have an Account? Login</Link>
                    <CardContent>
                        <form onSubmit={this.Register}>
                            <div>
                                <TextField
                                    required
                                    id="username"
                                    label="Create a username"
                                    defaultValue="username"
                                    variant="outlined"
                                    type="text"
                                    name="username"
                                    value={this.state.credentials.username}
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    required
                                    id="password"
                                    label="Create a password"
                                    defaultValue="password"
                                    variant="outlined"
                                    type="text"
                                    name="password"
                                    value={this.state.credentials.password}
                                    onChange={this.handlerChange}
                                />
                            </div>
                            <Button variant="outlined" color="primary">Register</Button>
                        </form>
                    </CardContent>
                </Card>

            </div>
        )
    }
}