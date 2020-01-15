import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

function TicketShow(props) {
    return (
        <div className="container mt-5">
            <h2>Ticket Code - { props.ticket.code }</h2>
            <hr/>
            {
                <div className="card mr-5 bg-secondary text-white" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title mb-4">Ticket Code - {props.ticket.code} </h5>
                        <p className="card-text"> Priority - { props.ticket.priority }</p>
                        <p className="card-text"> Message - { props.ticket.message }</p>
                        <p className="card-text"> Customer - { props.ticket.customer && props.ticket.customer.name }</p>
                        <p className="card-text"> Department - { props.ticket.department && props.ticket.department.name }</p>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        ticket: state.tickets.find(ticket => ticket._id === props.match.params.id) || {}
    }
}

export default connect(mapStateToProps)(TicketShow)