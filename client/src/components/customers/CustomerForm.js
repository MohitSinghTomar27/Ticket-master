import React from 'react'
import { connect } from 'react-redux'

class CustomerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name || '',
            email: props.email || '',
            mobile: props.mobile || ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            nameError: ''
        }
        if(this.state.name){
            this.props.handleSubmit(formData)
        } else {
            this.setState({ nameError : '* Field is required'})
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}  />
                    { this.state.nameError ? <p style= {{color : 'red'}}>{ this.state.nameError }</p> : '' }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    { this.state.nameError ? <p style= {{color : 'red'}}>{ this.state.nameError }</p> : '' }
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="mobile" className="form-control" id="mobile" placeholder="Mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    { this.state.nameError ? <p style= {{color : 'red'}}>{ this.state.nameError }</p> : '' }
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

export default connect()(CustomerForm)