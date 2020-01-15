import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

function CustomerShow(props) {
    return (
        <div className="container mt-5">
            <h2>{ props.customer.name } - { props.customer.email } </h2>
            <hr/>
            {
                _.isEmpty(props.tickets) ? <h3 className="text-center text-secondary">No tickets found</h3> : (
                    <div style={{display: 'flex'}}>
                        {
                            props.tickets.map(ticket => {
                                return (
                                    <div className="card mr-5 bg-secondary text-white" style={{width: '18rem'}}>
                                        <div className="card-body">
                                            <h5 className="card-title mb-4">Ticket Code - {ticket.code} </h5>
                                            <p className="card-text"> Priority - { ticket.priority }</p>
                                            <p className="card-text"> Message - { ticket.message }</p>
                                            <p className="card-text"> Employee - { ticket.employee.name }</p>
                                            <p className="card-text"> Department - { ticket.department.name }</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        customer: state.customers.find(customer => customer._id === props.match.params.id) || {},
        tickets: state.tickets.filter(ticket => ticket.customer._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(CustomerShow)