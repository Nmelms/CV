import './App.css';
import General from './components/General.js'
import Education from './components/Education.js'
import React, { useState, useEffect } from 'react'
import Test from './components/Test.js'
import { render } from '@testing-library/react';

const App = () => {
  const [state, setState] = useState({
    currentPage:'General',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    schoolName: '',
    field: '',
    grad: '',
    experience: '',
  })

  let handleChange = (e) => {
    e.preventDefault()
    setState({...state, [e.target.id]: e.target.value})
  }

  let handleSubmit = () => {
    setState({...state, currentPage: 'Education'})
  }

  let handleEdit = () => {
    setState({...state, currentPage: 'General'})
  }
  return(
    state.currentPage === 'General' ? 
      <div className="d-flex bg-secondary justify-content-center">
        <General state={state} handleSubmit={handleSubmit} handleChange={handleChange}/>
      </div>
       : 
      <div className="d-flex">
        <Education handleEdit={handleEdit} state={state}/>
      </div>
  )
}


export default App;
