import React from 'react'


export default function User(props) {
    const { details } = props

    if (!details) {
        return <h3>Working fetching user&apos;s details...</h3>
    }

    return(
        <div className='user'>
            
            <h2>{details.id}</h2>
            <p>{details["first_name"]}</p>
            <p>{details.email}</p>
            <p>{details.password}</p>

        </div>
    )
}