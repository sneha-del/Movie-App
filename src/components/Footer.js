import React from 'react'
// import './footer.css'
export const Footer = () => {
    let footerStyle={
        top: "70vh",
        position: "relative",
        width: "100%",
        border:"5px solid red"

        
    }
    return (
        <div>
            <footer className="bg-dark text-light py-3" style=
            {footerStyle}>
                <p className="text-center">
                Copyright &copy; MoviesDB.com
                </p>
            </footer>
        </div>
    )
}