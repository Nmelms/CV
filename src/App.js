import './App.css';
import General from './components/General.js'
import Education from './components/Education.js'
import React from 'react'

class App extends React.Component {
  constructor(){
       super()
        this.state = {
          currentPage: 'General',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          schoolName: '',
          field: '',
          grad: '',
          experience: '',

    }  
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value     
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      currentPage: 'Education'
    })
  }

  render(){
    let display
    if(this.state.currentPage === 'General'){
      display = <General handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    }else{
      display = <Education/>
    }
    return (
      <div className="App bg-secondary d-flex justify-content-center container-fluid ">
          {display}
            
      </div>
    )
  }

}

export default App;
