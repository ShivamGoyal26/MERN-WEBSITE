import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom'

const About = () => {

    const history = useHistory()

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            })

            const data = await res.json();
            console.log("Thsi is the data inb the about us page", data)

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
    return (
        <>
            <form method="GET">


                <label>User Id</label>
                <p>
                    557483920396789
           </p>

                <label>Name</label>
                <p>
                    Shivam Goyal
           </p>

                <label>Email</label>
                <p>
                    officialshivamgoyal@gmail.com
           </p>

                <label>Phone</label>
                <p>
                    9876543215
           </p>

                <label>Work</label>
                <p>
                    Assassination
           </p>
            </form>
        </>
    )
}

export default About
