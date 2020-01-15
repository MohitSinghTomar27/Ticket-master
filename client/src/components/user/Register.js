import React from 'react'
import { connect } from 'react-redux'
import { startRegisterUser } from '../../actions/user'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.dispatch(startRegisterUser(formData, this.props))
    }
    render(){
        return (
            <div className="justify-content-md-center container">
                <form className="form-signin mt-5" onSubmit={this.handleSubmit}>
                    
                    <h1 className="h1 mb-3 font-weight-normal text-center">Register</h1>

                    <input type="text" className="form-control mb-3" placeholder="Username"  name="username" value={this.state.username} onChange={this.handleChange}/>

                    <input type="text" className="form-control mb-3" placeholder="Email"  name="email" value={this.state.email} onChange={this.handleChange}/>

                    <input type="password" className="form-control mb-3" placeholder="password"  name="password" value={this.state.password} onChange={this.handleChange}/>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default connect()(Register)