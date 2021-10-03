import React from 'react'
import './Navbar.css'
const Footer = () => {
    const getYear = new Date().getFullYear();
    return (
        <div className="footer">
            <h3>All Rights Reserved &copy; { getYear }</h3>
        </div>
    )
}

export default Footer
