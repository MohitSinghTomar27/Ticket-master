import React from 'react'
import { connect } from 'react-redux'

class DepartmentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name || '',
            nameError : ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            nameError: ''
        }

        if(this.state.name) {
            this.props.handleSubmit(formData)
        } else {
            this.setState({ nameError: '* Filed is required!'})
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
                    <input type="text" className="form-control" id="name" placeholder="Department" name="name" value={this.state.name} onChange={this.handleChange} />
                    { this.state.nameError ? <p style = {{color : 'red'}}>{ this.state.nameError }</p> : '' }
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

export default connect()(DepartmentForm)