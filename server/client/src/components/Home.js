import React, { useEffect, useState } from 'react'

const Home = () => {

    const [name, setName] = useState("")
    const [loading, setLoading] = useState(true)

    const userContact = async () => {
        try {
            const res = await fetch('/getData', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await res.json();
            setName(data.name)
            setLoading(false)

            if (!res.status == 200) {
                const error = new Error(res.error)
                throw error
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        userContact();
    }, [])

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (name.length == 0) {
        return (
            <div>
                <p className="pt-5">WELCOME</p>
                <h1>We Are The MERN Developer</h1>
            </div>
        )
    }


    return (
        <div>
            <p className="pt-5">WELCOME <p>{name}</p></p>
            <h1>Happy to see you here</h1>
        </div>
    )
}

export default Home
