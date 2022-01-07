import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Navbar() {

    const handleLogout = () => {
            localStorage.removeItem("Name")
            localStorage.removeItem("email")
            localStorage.removeItem("password")
            localStorage.removeItem("phone")
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
                <div class="container-fluid">
                    <Link to="/homepage" class="navbar-brand" style={{color:"#173383"}}>GeekSynergy Technologies</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <Link to="/about" className='links'>Company Info</Link>
                        {
                            localStorage.getItem("password") ? <Link to="/" className='links' onClick={handleLogout}>Logout</Link> : <Link to="/login" className='links'>Login</Link>
                        }
                    </form>
                    </div>
                </div>
            </nav>  
        </>
    )
}