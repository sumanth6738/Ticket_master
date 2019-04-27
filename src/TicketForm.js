import React from 'react'
import axios from 'axios'

class TicketForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            department:'',
            priority:'',
            message: ''
        }

    }
    handleNameChange = (e) => {
        const name = e.target.value
        this.setState(()=>({name}))
    }
    handleDepartmentChange = (e) => {
        const department = e.target.value
        this.setState(()=>({department}))
    }
    handlePriorityChange = (e) => {
        const priority = e.target.value
        this.setState(()=>({priority}))
    }
    handleMessageChange = (e) => {
        const message = e.target.value
        this.setState(()=>({message}))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=1bc5efc886c07038',formData)
        .then(response =>{
            console.log(response.data)
            this.props.handleAddTicket(response.data)
            this.setState(() => ({
                name: '',
                department: '',
                priority: '',
                message: ''
            }))
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            
            <div align= "left">
             <fieldset>
                <legend>Add Ticket</legend>
                <form onSubmit={this.handleSubmit}>
    
                    <label> Name
                    <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                    </label><br/><br/>
                    <label> Department
                    <select value={this.state.department} onChange={this.handleDepartmentChange}>
                        <option> select </option>
                        <option value="Technical"> Technical </option>
                        <option vlaue='Sales'> Sales </option>
                        <option value='HR'> HR </option>
                    </select>
                    </label><br/><br/>
                    <label> Priority
                    <select value={this.state.priority} onChange={this.handlePriorityChange}>
                        <option> select </option>
                        <option value="High"> High </option>
                        <option vlaue='Medium'> Medium </option>
                        <option value='Low'> Low </option>
                    </select>
                    </label><br/><br/>
                    <label> Message
                    <textarea value={this.state.message} onChange={this.handleMessageChange}> </textarea>
                    </label><br/><br/>

                    <input type='submit' onChange={this.handleSubmit}/>  
                </form>
                </fieldset>
            
            </div>
        )
    }
}

export default TicketForm