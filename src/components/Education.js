import React from 'react'

class Eduction extends React.Component{
  constructor(){
    super()
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.id]: e.target.value     
    })
  }

  render(){
    return(
      <div className="col-6 mt-5">
        <form>
          <input type="text" placeHolder="enter highschool">
          </input>
        </form>
      </div>
    )
  }
}
export default Eduction;