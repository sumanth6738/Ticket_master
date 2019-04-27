import React from 'react'
import axios from 'axios'

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            query: '',
            results: []
        }
    }

  getInfo = (e) => {
    axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038`)
    .then(response =>{
        //console.log(this.state.query)
        //console.log(response.data)
        this.setState({
        results: response.data.filter(data => data.name.toLowerCase() === this.state.query)
       
    })
    this.props.handleSearch(this.state.results)
    })  
  }

  handleInputChange = (e) => {
      e.preventDefault()
    this.setState({
      query: this.search.value
     
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
        <div align="center">
      <form >
        <input
          placeholder="Search for..." id="myInput"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
      </div>
    )
  }
}

export default Search