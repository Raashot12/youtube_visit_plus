import { Container } from '@material-ui/core'
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="visit-plus">
            <Container>
                <div className="visit-plus-child">
                    <h1 className="logo">
                        View Plus
                    </h1>
                    <div className="flex-item">
                        <h5 className="logo">Home</h5>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
