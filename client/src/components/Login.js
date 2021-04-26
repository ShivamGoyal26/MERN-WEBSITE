import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Login = () => {
    return (
        <>
            <div class="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>

            <div>
                <input type="submit" name="login" value="login" />
            </div>
        </>
    )
}

export default Login
