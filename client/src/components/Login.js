import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom'

import { userContext } from '../App'

const Login = () => {

    const { state, dispatch } = useContext(userContext)

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        var data = { email, password }
        e.preventDefault()
        const response = await fetch('/signin', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })

        const newData = await response.json()

        if (response.status === 400 || !data) {
            alert("Invalid Credentials")
        } else {
            dispatch({ type: "USER", payload: true })
            alert("Login Sucessfull")
            history.push("/")
        }
    }
    return (
        <>
            <form method="POST">
                <div class="form-floating mb-3">
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                    <input type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div>
                    <input type="submit"
                        onClick={loginUser}
                        name="login" value="login" />
                </div>
            </form>
        </>

    )
}

export default Login
