import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const history = useHistory()

    const [login, setLogin] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value
        })
      }

    const checkLogin = () => {
        let userEmail = localStorage.getItem("email")
        let pass = localStorage.getItem("password")
        if(login.email == userEmail && login.password==pass ){
            history.push("/homepage")
        }else{
            toast.error("Invalid Credentials!");
        }
    }
    return (
        <div className='login-div mt-5'>
            <h3 className='text-center logsign_text'>Login</h3>
            <ToastContainer 
                position="top-center"
            />
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput" placeholder="name@example.com" name="email" value={login.email} onChange={ handleChange }/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput" placeholder="Your password" name="password" value={login.password} onChange={ handleChange }/>
            </div>
            <center><Link><button className='btn btn-info btn-login mt-3' onClick={checkLogin}>Login</button></Link></center>
        </div>
    )
}
