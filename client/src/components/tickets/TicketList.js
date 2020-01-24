import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveTicket } from '../../actions/ticket'
import swal from 'sweetalert'

function TicketList(props) {
    const handleRemove = (id) => {
        swal({
            title: "Are you sure you want to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully Deleted", {
                icon: "success",
              });
                props.dispatch(startRemoveTicket(id))
            }
        })
    }

    return (
        <div className="container mt-5">
            <h2>Tickets - {props.tickets.length} </h2>

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Code No</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Department</th>
                    <th scope="col">Employees</th>
                    <th scope="col">Message</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Show</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tickets.map((ticket) => {
                            return (
                                <tr key={ticket._id}>
                                    <th scope="row">{ ticket.code }</th>
                                    <td>{ ticket.customer ? ticket.customer.name : 'NA' }</td>
                                    <td>{ ticket.department ? ticket.department.name : 'NA' }</td>
                                    <td>{ ticket.employee ? ticket.employee.name : 'NA' }</td>
                                    <td>{ ticket.message }</td>
                                    <td>{ ticket.priority }</td>
                                    <td><Link to={`/tickets/show/${ticket._id}`} className="btn btn-primary">Show</Link></td>
                                    <td><Link to={`/tickets/${ticket._id}`} className="btn btn-secondary">Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={ () => {
                              swal("Are you sure you want to do this?", {
                                buttons: ["Oh noez!", true],
                              });
                              
                                        handleRemove(ticket._id)
                                    }} >Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/tickets/new">Add Ticket</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(TicketList)