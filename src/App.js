import React, { Component } from 'react';
// npm install --save axios
import axios from 'axios'
import './App.css';
import TicketsTable from './TicketsTable'
import TicketForm from './TicketForm'
import Search from './Search'
import Priority from './Priority'
import Pro from './Progress'
import Char from './Chart'

// import { BrowserRouter, Route, Link } from 'react-router-dom'
// import Home  from './components/Home.js'
// import About from './components/About.js'
// import Course from './components/Course.js'
// import Contact from './components/Contact.js'
// import UserList from './components/UserList'
// import UserShow from './components/UserShow'
// import Posts from './components/Posts'
// import PostShow from './components/PostShow'

// const Home = () => {
//   return(
//     <div>
//       <h1>Home Page</h1>
//       <p> Welcome to our website</p>
//     </div>
//   )
// }

// const About = ()=>{
//   return(
//     <div>
//       <h1>AboutUs Page</h1>
     
//     </div>
//   )
// }
// const Course = ()=>{
//   return(
//     <div>
//       <h1>Course Page</h1>
     
//     </div>
//   )
// }
// const Contact = ()=>{
//   return(
//     <div>
//       <h1>ContactUs Page</h1>
     
//     </div>
//   )
// }

// class App extends Component{
//   render(){
//     return(
//       <BrowserRouter>
//         <div>
//           <ul>
//             <li><Link to="/" > Home </Link></li>
//             <li><Link to="/about" > AboutUs </Link></li>
//             <li><Link to="/course" > Course </Link></li>
//             <li><Link to="/contact" > Contact</Link></li>
//             <li> <Link to="/users"> Users</Link></li>
//             <li> <Link to="/posts"> Posts</Link></li>
            

//           </ul>
//           <Route path="/" component = {Home} exact={true} />
//           <Route path="/about" component = {About}/>
//           <Route path="/course" component= {Course}/>
//           <Route path="/contact" component = {Contact}/>
//           <Route path="/users" component = {UserList} exact={true}/>
//           <Route path="/users/:id" component = {UserShow}/>
//           <Route path="/posts" component = {Posts} exact={true}/>
//           <Route path='/posts/:id' component = {PostShow}/>

//         </div>
//       </BrowserRouter>
      
//     )
//   }
// }




// export default App;


















class App extends Component {
  constructor(){
    super()
    this.state = {
      tickets: []
    }
  }
  // this is a LIFE CYCLE METHOD
  // componentWillMount()

  componentDidMount(){  // post render
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038')
    .then(response => {
      //console.log(response.data)
      //update state needs to be done via get state method
      // must always return a new object 
      // when the state value updates, the render method is called
      this.setState(() => ({tickets: response.data})) // setState taking function as argument 
    })
    .catch(err => {
      console.log(err)
    })
  }
  handleAddTicket  = (ticketData)=>{
    this.setState((prevState)=>({
      tickets: [...prevState.tickets, ticketData]
    }))
  }
  handleSearch  = (results)=>{
    this.setState((prevState)=>({
      tickets: results
    }))
  }
  handleHighs  = (res)=>{
    this.setState(()=>({
      tickets: res
    }))
  }
  handleMed  = (res)=>{
    this.setState(()=>({
      tickets: res
    }))
  }
  handleLow  = (res)=>{
    this.setState(()=>({
      tickets: res
    }))
  }
  handleAll  = (res)=>{
    this.setState(()=>({
      tickets: res
    }))
  }
  render() {
    return (
      <div>
        <div class="col-sm-4 text-left">
          <h1>Ticket Master</h1>
        </div><br/>
        <Search handleSearch={this.handleSearch}/>
        <div class="col-sm-4 text-left">
          <h3>List of Tickets - { this.state.tickets.length }</h3>
        </div>
        <Priority handleHighs={this.handleHighs} handleMed={this.handleMed} 
        handleLow={this.handleLow} handleAll = {this.handleAll}/>
         <br/><br/>
        <div class="container-fluid">
          <div class="col-sm-8 text-left"> 
            <TicketsTable tickets={this.state.tickets} />
            <br></br>
          </div>
          <div class="col-sm-4">
            <TicketForm handleAddTicket={this.handleAddTicket}/>
          </div>
        </div>
        <Pro percentage={this.state.percentage}/>
        <Char />
      </div>
    );
  }
}

export default App;
