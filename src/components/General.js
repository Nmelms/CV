import React from 'react'

class General extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='d-flex flex-column w-50 align-self-center bg-dark justify-content-center  vh-100 p-4'>
        <form onSubmit={this.props.handleSubmit}>
          <h1 className="text-white ">General</h1>
          <input 
            className='mt-2' 
            onChange={this.props.handleChange} 
            placeholder='enter your first name'
            id='firstName'>
          </input>
          <input 
            className='mt-2' 
            onChange={this.props.handleChange} 
            placeholder='enter your Last name'
            id='lastName'>
          </input>
          <input 
            className='mt-2' 
            onChange={this.props.handleChange} 
            placeholder='enter your email'
            id="email">
          </input>
          <input 
            className='mt-2' 
            onChange={this.props.handleChange} 
            placeholder='enter your phonenumber'
            id="phone">
          </input>

        <h1 className="text-white mt-2">Eduction</h1>
          <input 
            className='mt-2' 
            onChange={this.props.handleChange} 
            placeholder='enter your most recent schools name'
            id="schoolName">
          </input>
          <input 
            className='mt-2' 
            onChange={this.props.handleChange} 
            placeholder='field of study'
            id="field">
          </input>
          <input 
            className='mt-2' 
            onChange={this.props.handleChange} 
            placeholder='date of graduation'
            id="grad">
          </input>
          <h1 className="text-white mt-2">Practical Experience</h1>
          <div class="form-group">
            <label for="experience">Example textarea</label>
            <textarea onChange={this.props.handleChange} className="form-control" id="experience" rows="3"></textarea>
          </div>
          <button onSubmit={this.props.handeSubmit}className="btn-primary mt-2">
            Submit
          </button>



        </form>


        
      </div>        
    )
  }
}

export default General