import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const resposne = await fetch("http://localhost:5000/api/loginuser", {
    const resposne = await fetch("https://favfood.onrender.com/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    })

    const json = await resposne.json()
    console.log(json)
    
    if (!json.success) {
      alert("Enter valid credentials")
    }
    if (json.success) {
      localStorage.setItem('userEmail', credentials.email)
      localStorage.setItem('authToken', json.authToken)
      console.log(localStorage.getItem('authToken'))
      navigate('/')
    }

  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className='container my-4'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" onChange={onChange} name='email' value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" onChange={onChange} name='password' value={credentials.password} className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to='/createuser' className='m-3 btn btn-primary'>I'm a new user</Link>
        </form>
      </div>
    </>
  )
}
