import React from 'react'
import App from './App'
import Login from './login'
import Homepage from './Homepage'
import Navbar from './Navbar'
import About from './About'
import { BrowserRouter , Route} from 'react-router-dom'
export default function Routing() {
    return (
        <BrowserRouter>
        <Navbar />
            <Route exact path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/about" component={About}/>
        </BrowserRouter>
    )
}
