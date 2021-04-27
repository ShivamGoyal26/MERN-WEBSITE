import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom'

const About = () => {

    const [userData, setUserData] = useState(null)

    const history = useHistory()

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: 'GET',
                headers: {
                    // Accept: "application/json",
                    "Content-Type": "application/json"
                },
                // credentials: "include"
            })

            const data = await res.json();
            setUserData(data)

            if (!res.status == 200) {
                const error = new Error(res.error)
                throw error
            }
        } catch (error) {
            console.log(error)
            history.push('/login')
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    if (!userData) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
    return (
        <>
            <form method="GET">


                <label>User Id</label>
                <h4>
                    {userData._id}
                </h4>

                <label>Name</label>
                <h4>
                    {userData.name}
                </h4>

                <label>Email</label>
                <h4>
                    {userData.email}
                </h4>

                <label>Phone</label>
                <h4>
                    {userData.phone}
                </h4>

                <label>Work</label>
                <h4>
                    {userData.work}
                </h4>
            </form>
        </>
    )
}

export default About
