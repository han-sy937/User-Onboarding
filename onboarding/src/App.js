import React, { useState, useEffect } from 'react';
import Form from './Form'
import formSchema from './formSchema'
import User from './User'
import axios from 'axios'
import * as yup from 'yup'
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formError, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      setUsers(res.data)
      
    })
    .catch(err => {
      console.log('error')
    })
  }

  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
        // console.log(setUsers)
      })
      .catch(err => {
        console.log('error')
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formError,
          [name]: '',
        })
      })

      .catch(err => {
        setFormErrors({
          ...formError,
          [name]: err.errors[0],
        })
      })

      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      [name]: isChecked,
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }  

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])  

  return (
    <div className="container">

      <header><h1>User Log In </h1></header>

      <Form 
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={formError}
      />

      {
        users.data.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        }, [])

        
      }

    </div>
  );
}

export default App;
