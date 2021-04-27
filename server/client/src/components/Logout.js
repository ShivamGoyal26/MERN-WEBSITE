import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { userContext } from '../App'

const Logout = () => {

    const { state, dispatch } = useContext(userContext)

    const history = useHistory()

    useEffect(() => {
        // useEffect does not support the async but it does the promises 
        fetch('/logout', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            dispatch({ type: "USER", payload: false })
            history.push("/login", { replace: true })
            if (!res.status == 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((error) => {
            alert("Unknow error occured!")
        })
    }, [])

    return (
        <>
            <h1>Loading...</h1>
        </>
    )
}

export default Logout
