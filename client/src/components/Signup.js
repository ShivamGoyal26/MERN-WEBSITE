import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {useHistory} from 'react-router-dom'

const Signup = () => {

    const history = useHistory()

    // const [name, setName] = useState("545")
    // const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    // const [work, setWork] = useState("")
    // const [password, setPassword] = useState("")
    // const [cpassword, setCpassword] = useState("")

    const data = {
        name: "root",
        email: "root2@gmail.com",
        phone: "7894561232",
        work: "Rooter",
        password: '123',
        cpassword: '123'
    }

    const postData = async (e) => {
        e.preventDefault()
        const response = await fetch('/register', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })

        const newData = await response.json()

        if(newData.status === 422 || !data) {
            alert("Failed")
        } else {
            alert("Sucess")
            history.push("/login")
        }
    }

    return (
        <>
            <form method="POST" className="register-form" id="register-form">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Type Something..."
                    // value={name}
                    // onChange={setName}

                    />
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Type Something..."
                    // value={email}
                    // onChange={(text) => {
                    //     setEmail(text)
                    // }}
                    />
                    <label for="floatingPassword">Email</label>
                </div>

                <div class="form-floating">
                    <input type="number" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    // value={phone}
                    // onChange={(text) => {
                    //     setPhone(text)
                    // }}
                    />
                    <label for="floatingPassword">Phone</label>
                </div>

                <div class="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    // value={work}
                    // onChange={(text) => {
                    //     setWork(text)
                    // }}
                    />
                    <label for="floatingPassword">Work</label>
                </div>

                <div class="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    // value={password}
                    // onChange={(text) => {
                    //     setPassword(text)
                    // }}
                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Type Something..."
                    // value={cpassword}
                    // onChange={(text) => {
                    //     setCpassword(text)
                    // }}
                    />
                    <label for="floatingPassword">Confirm Password</label>
                </div>

                <div>
                    <input
                        onClick={postData}
                        type="submit" name="Signup" value="Register" />
                </div>
            </form>
        </>
    )
}

export default Signup
