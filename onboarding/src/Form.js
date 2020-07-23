import React from 'react'

export default function Form(props) {

    const { values, submit, inputChange, checkboxChange, errors,} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <div className='form-group'>
                <h2>Add a user</h2>
            </div>

            <label>Name&nbsp;
                <input 
                    value={values.first_name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>
            <div>{errors.name}</div>

            <label>Email&nbsp;
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>
            <div>{errors.email}</div>

            <label>Password
                <input 
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                />
            </label>

            <label>Terms of Service
                <input 
                    type='checkbox'
                    name='terms'
                    checked={values.checked === true}
                    onChange={onCheckboxChange}
                />
            </label>

            <button disabled={!values.name || !values.email || !values.password || !values.terms}>Sumbit</button>


        </form>
        
      
       
    )
}