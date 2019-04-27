import React from "react";
import axios from 'axios'
import Chart from 'react-google-charts'
//var Pro = require('react-progressbar');

class Char extends React.Component {
    constructor(){
        super()
        this.state = {
            result: [],
            output: 'high',
            output1: 'medium',
            output2: 'low',
            comp: '',
            l:'',
            m: ''
            
        }
    }
    componentDidMount(){  // post render
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038')
        .then(response => {
          //console.log(response.data)
          
          this.setState(() => ({result: response.data})) // setState taking function as argument 
          // console.log(this.state.result)
            if(this.state.result){
          this.state.comp = this.state.result.filter(data => data.priority.toLowerCase() === this.state.output)
            }
          //   this.state.completed = this.state.comp.length / this.state.result.length *100
          // console.log(this.state.output)
          //  console.log(this.state.comp.length)
          if(this.state.result){
            this.state.m = this.state.result.filter(data => data.priority.toLowerCase() === this.state.output1)
          }
          if(this.state.result){
                this.state.l = this.state.result.filter(data => data.priority.toLowerCase() === this.state.output2)
          }
        })
        
        .catch(err => {
          console.log(err)
        })
      }
    
    render(){
        return(
            <div className={"my-pretty-chart-container"}>
            <h3>Priority Status:</h3>
            <Chart
              chartType="PieChart"
              data={[["Priority", "no of tickets"], [this.state.output, this.state.comp.length],[this.state.output1, this.state.m.length],
              [this.state.output2, this.state.l.length]]}
              width="80%"
              height="400px"
              legendToggle
            />
          </div>
        )
    }

}
export default Char