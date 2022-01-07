import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import {motion} from  "framer-motion"


export default function App() {

  const [ user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    phone:""
})

const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}


const Submit = () => {
  localStorage.setItem("Name",user.name)
  localStorage.setItem("email",user.email)
  localStorage.setItem("password",user.password)
  localStorage.setItem("phone",user.phone)
}

  return (
    <>
    <motion.div className='framer'
        animate={{y:[300,-3]}}
        transition={{ duration: 2 ,yoyo: Infinity, ease:"easeOut"}}
    >
    </motion.div>
    <motion.div className='framer1'
        animate={{y:[-3,300]}}
        transition={{ duration: 1 ,yoyo: Infinity, ease:"easeOut"}}
    ></motion.div>
    <div className='register-div mt-2'>
      <h3 className='text-center logsign_text'>Sign Up</h3>
          <div class="mb-3">
            <label for="exampleFormControlInput" class="form-label"><AccountCircleIcon style={{marginLeft:5}}/></label>
            <input type="text" class="form-control" id="exampleFormControlInput" placeholder="Enter Name " name="name" value={user.name} onChange={ handleChange }/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><EmailIcon style={{marginLeft:5}}/></label>
            <input type="email" class="form-control" id="exampleFormControlInput" placeholder="Enter E-mail" name="email" value={user.email} onChange={ handleChange }/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label"><PhoneIphoneIcon style={{marginLeft:5}}/></label>
            <input type="text" class="form-control" id="exampleFormControlInput" placeholder="Enter Number" name="phone" value={user.phone} onChange={ handleChange }/>
          </div>
          <div class="dropdown col-5">
            <h6 class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Profession
            </h6>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="dropdown-item" value="fe">Front-End Developer</li>
              <li class="dropdown-item" value="be">Back-End Developer</li>
              <li class="dropdown-item" value="fs">Full-Stack Developer</li>
            </ul>
        </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput" placeholder="Enter Password" name="password" value={user.password} onChange={ handleChange }/>
          </div>
          <center><Link to="/login"><button className='btn btn-success btn-login' onClick={ Submit }>Sign Up</button></Link></center>
          <h6 className='mt-2'>Already a user ? <Link to="/login"> click to Login</Link></h6>
    </div>
    </>
  )
}
