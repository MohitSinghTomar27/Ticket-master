import React from 'react'
import image from './ticketmaster.jpg'

function Home(props) {
    return (
        <div className="text-center mt-5">
            <h2 className="mb-5 font-weight-bold">Welcome to the Ticket Master App</h2>
            <img src={image} />
        </div>
    )
}

export default Home 