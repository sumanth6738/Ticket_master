import React from "react";
import axios from 'axios'
import Progress from 'react-progressbar'
//var Pro = require('react-progressbar');

class Pro extends React.Component {
    constructor(){
        super()
        this.state = {
            result: [],
            comp: '',
            output: 'completed',
            completed: ''
            
        }
    }
    componentDidMount(){  // post render
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038')
        .then(response => {
         // console.log(response.data)
          //update state needs to be done via get state method
          // must always return a new object 
          // when the state value updates, the render method is called
          this.setState(() => ({result: response.data})) // setState taking function as argument 
         // console.log(this.state.result)
            if(this.state.result){
          this.state.comp = this.state.result.filter(data => data.status === this.state.output)
            }
            this.state.completed = this.state.comp.length / this.state.result.length *100
           // console.log( Math.round(this.state.completed))
        })
        
        .catch(err => {
          console.log(err)
        })
      }
    
    render(){
        return(
            <div id="progress">
            <h3>Progress: {this.state.completed}%</h3>
                <Progress completed={this.state.completed} />
                
            </div> 
        )
    }

}
export default Pro