import React from 'react'
import axios from 'axios'
//import loadingGif from '../images/1.gif'

class PostShow extends React.Component {
    constructor(){
        super()
        this.state={
            post: [],
            comments:[],
            isLoaded: false
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then(response => this.setState(()=> ({ post: response.data, isLoaded:true })))

        // const postId = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
        .then(response => this.setState(()=> ({ comments: response.data, isLoaded:true })))

        
    }
    render(){
        return(
            <div>
                <h2> Comments </h2>
                {/* {this.state.isLoaded} ? (  */}
                    <div>
                    <label>Postid-</label> {this.state.comments.postId}<br />
                        <label>Email-</label> {this.state.comments.email}<br />
                        <label>Body -</label> {this.state.comments.body} <br />
                        
                    </div>
                {/* ) : <p>loading...</p> */}
            </div>
        )
    }
}
export default PostShow