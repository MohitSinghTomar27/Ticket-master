import React from 'react'
import { connect } from 'react-redux'

class TicketForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            code: props.code || '',
            customer: props.customer ? props.customer._id : '',
            department: props.department ? props.department._id : '',
            employee: props.employee ? props.employee._id : '',
            priority: props.priority || '',
            message: props.message || '', 
            codeError:"",
            customerError:"",
            departmentError:"",
            employeeError:"",
            priorityError:"",
            messageError:""
        }
    }
    validate = () => {
        let codeError =""
        let customerError = ""
        let departmentError = ""
        let employeeError = ""
        let priorityError = ""
        let messageError = ""
        if(!this.state.code){
            codeError= '*Code Field is Required'
        }
        if(!this.state.customer){
            customerError= '*Customer Field is Required'
        }
        if(!this.state.department){
            departmentError= '*Department Field is Required'
        }
        if(!this.state.employee){
            employeeError= '*Employee Field is Required'
        }
        if(!this.state.message){
            messageError= '*Message Field is Required'
        }
        if(!this.state.priority){
            priorityError= '*Priority Field is Required'
        }
        if(codeError || customerError || departmentError || employeeError || messageError || priorityError){
            this.setState({codeError, customerError, departmentError, employeeError,messageError,priorityError})
            return false
        }
        return true
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validate()

        if(isValid){
            const formData = {
                code: this.state.code,
                customer: this.state.customer,
                department: this.state.department,
                employee: this.state.employee,
                priority: this.state.priority,
                message: this.state.message
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
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="code">Code</label>
                    <input type="text" className="form-control" id="code" placeholder="Code" name="code" value={this.state.code} onChange={this.handleChange} />
                    <div style = {{color:'red'}}>{this.state.codeError} </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="customer">Customer</label>
                    <select className="form-control" id="customer" name="customer" value={this.state.customer} onChange={this.handleChange } >
                        <option>select</option>
                        {
                            this.props.customers.map(customer => {
                                return <option key={customer._id} value={customer._id}>{ customer.name }</option>
                            })
                        }
                    </select>
                    <div style = {{color:'red'}}>{this.state.customerError} </div>
                </div>
               
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select className="form-control" id="department" name="department" value={this.state.department} onChange={this.handleChange } >
                        <option>select</option>
                        {
                            this.props.departments.map(department => {
                                return <option key={department._id} value={department._id}>{ department.name }</option>
                            })
                        }
                    </select>
                    <div style = {{color:'red'}}>{this.state.departmentError} </div>
                </div>
               
                <div className="form-group">
                    <label htmlFor="employee">Employee</label>
                    <select className="form-control" id="employee" name="employee" value={this.state.employee} onChange={this.handleChange } >
                        <option>select</option>
                        {
                            this.props.employees.map(employee => {
                                return <option key={employee._id} value={employee._id}>{ employee.name }</option>
                            })
                        }
                    </select>
                    <div style = {{color:'red'}}>{this.state.employeeError} </div>
                </div>
               
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange} />
                    <div style = {{color:'red'}}>{this.state.messageError} </div>
                </div>
                
               
                <div><br/>
                    <p>Priority</p>
                    <input type="radio" id="high" name="priority" value="high" checked={this.state.priority === 'high'} onChange={this.handleChange} className="mr-2" />
                    <label htmlFor="high">High</label><br/>
                    <input type="radio" id="medium" name="priority" value="medium" checked={this.state.priority === 'medium'} onChange={this.handleChange} className="mr-2" />
                    <label htmlFor="medium">Medium</label><br/>
                    <input type="radio" id="low" name="priority" value="low" checked={this.state.priority === 'low'} onChange={this.handleChange} className="mr-2" />
                    <label htmlFor="low">Low</label>
                </div>
                <div style = {{color:'red'}}>{this.state.priorityError} </div>

               
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers,
        departments: state.departments,
        employees: state.employees
    }
}

export default connect(mapStateToProps)(TicketForm)