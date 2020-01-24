import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRemoveDepartment } from '../../actions/department'
import swal from 'sweetalert'

function DepartmentList(props) {
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
            props.dispatch(startRemoveDepartment(id))
            }
        })
    }

    return (
        <div className="container mt-5" style={{width: '50rem'}}>
            <h2>Departments - {props.departments.length} </h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Show</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.departments.map((department, index) => {
                            return (
                                <tr key={department._id}>
                                    <th scope="row">{ index + 1 }</th>
                                    <td>{ department.name }</td>
                                    <td><Link to={`/departments/show/${department._id}`} className="btn btn-primary">Show</Link></td>
                                    <td><Link to={`/departments/${department._id}`} className="btn btn-secondary">Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={ () => {
                                        handleRemove(department._id)
                                    }} >Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/departments/new">Add Department</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}

export default connect(mapStateToProps)(DepartmentList)