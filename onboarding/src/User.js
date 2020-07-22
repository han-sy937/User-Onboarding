import React from 'react'


export default function User({ details }) {
    if (!details) {
        return <h3>Working fetching user&apos;s details...</h3>
    }

    return(
        <div className='user'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>

        </div>
    )
}