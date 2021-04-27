import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useHistory} from 'react-router-dom'

const Signup = () => {

    const history = useHistory()

    const [name, setName] = useState("545")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [work, setWork] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")


    const postData = async (e) => {
        var data = {name, email, phone, work, password, cpassword}
        e.preventDefault()
        const response = await fetch('/register', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })

        if(response.status === 422 || !data) {
            alert("Failed")
        } else {
            alert("Sucess")
            history.push("/login")
        }
    }

    return (
        <div style = {{padding: 20}}>
            <form 
            method="POST" className="register-form" id="register-form">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Type Something..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                    />
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Type Something..."
                    value={email}
                    onChange={(text) => {
                        setEmail(text.target.value)
                    }}
                    />
                    <label for="floatingPassword">Email</label>
                </div>

                <div class="form-floating">
                    <input type="number" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    value={phone}
                    onChange={(text) => {
                        setPhone(text.target.value)
                    }}
                    />
                    <label for="floatingPassword">Phone</label>
                </div>

                <div class="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    value={work}
                    onChange={(text) => {
                        setWork(text.target.value)
                    }}
                    />
                    <label for="floatingPassword">Work</label>
                </div>

                <div class="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    value={password}
                    onChange={(text) => {
                        setPassword(text.target.value)
                    }}
                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    value={cpassword}
                    onChange={(text) => {
                        setCpassword(text.target.value)
                    }}
                    />
                    <label for="floatingPassword">Confirm Password</label>
                </div>

                <div>
                    <input
                        onClick={postData}
                        type="submit" name="Signup" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Signup
