import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <h1>Not Found</h1>
            <NavLink to="/">Back To HomePage</NavLink>
        </>
    )
}

export default Error
