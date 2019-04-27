import React from 'react'
import axios from 'axios'
//import loadingGif from '../images/1.gif'

class UserShow extends React.Component {
    constructor(){
        super()
        this.state={
            user: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => this.setState(()=> ({ user: response.data, isLoaded:true })))
        
    }
    render(){
        return(
            <div>
                <h2> User Info </h2>
                {/* {this.state.isLoaded} ? (  */}
                    <div>
                        <label>Name -</label> {this.state.user.name} <br />
                        <label>Email -</label> {this.state.user.email} <br />
                        <label>City -</label> {this.state.user.address && this.state.user.address.city} <br />
                    </div>
                {/* ) : <p>loading...</p> */}
            </div>
        )
    }
}
export default UserShow