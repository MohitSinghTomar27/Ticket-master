import React from 'react'
import { connect } from 'react-redux'

class CustomerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name || '',
            email: props.email || '',
            mobile: props.mobile || '',
            nameError:"",
            emailError:"",
            mobileError:""
        }
    }
    validate = () => {
        let nameError=""
        let emailError=""
        let mobileError=""
        if(!this.state.name){
            nameError='Name Field is Required !!'
        }
        if(!this.state.email){
            emailError='Email Field is Required !!'
        }
        if(!this.state.mobile){
            mobileError='Name Field is Required !!'
        }
        if(nameError|| emailError || mobileError){
            this.setState({nameError, emailError, mobileError})
            return false
        }
        return true
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validate()

        if(isValid){
            const formData = {
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
        
            }
            this.props.handleSubmit(formData)
        }

      }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}  />
                    <div style = {{color:'red'}}>{this.state.nameError} </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <div style = {{color:'red'}}>{this.state.emailError} </div>

                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="mobile" className="form-control" id="mobile" placeholder="Mobile" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    <div style = {{color:'red'}}>{this.state.mobileError} </div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

export default connect()(CustomerForm)