import React, { Component } from 'react'

class Education extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="d-flex align-items-center flex-column vw-100 vh-100 bg-dark text-white">       
          <h1>{this.props.state.firstName} {this.props.state.lastName}</h1>        
          <h3>Email: {this.props.state.email}</h3>
          <h3>Phone: {this.props.state.phone}</h3>
          <h2>Eduction</h2>
          <h3>I graduted from {this.props.state.schoolName} in {this.props.state.grad}</h3>
          <h3>My field of study was {this.props.state.field}</h3>
          <h2>A little about me:</h2>
          <p>{this.props.state.experience}</p>
      
          <button onClick={this.props.handleEdit} className="btn-primary mt-2">
            EDIT
          </button>
      </div>
    )
  }
}
export default Education;