import React from 'react'
import axios from 'axios'

class Priority extends React.Component {
    constructor(){
        super()
        this.state = {
            btn: "high",
            btn1: "medium",
            btn2: "low",
            res: []
        }
    }
    getInfo = (e) => {
        e.preventDefault()
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038`)
        .then(response =>{
            // console.log(this.state.query)
            // console.log(response.data)
            this.setState({
            res: response.data.filter(data => data.priority.toLowerCase() === this.state.btn)
        })
        this.props.handleHighs(this.state.res)
        console.log(this.state.res)
        })  
      }
      getInfo1 = (e) => {
        e.preventDefault()
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038`)
        .then(response =>{
            // console.log(this.state.query)
            // console.log(response.data)
            this.setState({
            res: response.data.filter(data => data.priority.toLowerCase() === this.state.btn1)
        })
        this.props.handleMed(this.state.res)
        console.log(this.state.res)
        })  
      }
      getInfo2 = (e) => {
        e.preventDefault()
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038`)
        .then(response =>{
            // console.log(this.state.query)
            // console.log(response.data)
            this.setState({
            res: response.data.filter(data => data.priority.toLowerCase() === this.state.btn2)
        })
        this.props.handleLow(this.state.res)
        console.log(this.state.res)
        })  
      }
      getInfo3 = (e) => {
        e.preventDefault()
        axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038`)
        .then(response =>{
            // console.log(this.state.query)
            // console.log(response.data)
            this.setState({
            res: response.data
        })
        this.props.handleAll(this.state.res)
        console.log(this.state.res)
        })  
      }

  

  render() {
    return (
        <div align="center" class="btn-group">
        <button class="button" onClick={this.getInfo3} >All</button>
       <button class="button" onClick={this.getInfo} >High</button>
       <button class="button" onClick={this.getInfo1}>Medium</button>
       <button class="button" onClick={this.getInfo2}>Low</button>
      </div>
      
    )
  }
}

export default Priority