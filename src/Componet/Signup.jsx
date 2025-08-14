import React, { useRef, useState } from 'react'
import '../CSS/Signup.css'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

const Name = useRef()
const email = useRef()
const password = useRef()



const navigate = useNavigate();

const Registered = ()=>{

  if(Name.current.value && email.current.value && password.current.value){
     localStorage.setItem('Name',Name.current.value)
     localStorage.setItem('email',email.current.value)
     localStorage.setItem('password',password.current.value)
     alert('account logged in successfully')
     navigate('/login')
  }
  else{
    alert("enter the user detials to sign up ")
  }
}

const loggedin= ()=>{
  navigate('/login')
}


  return (
    <div>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">

          
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <form>

                      <div className="user-input-wrp form-outline mb-4">
                        <input type="email" className="form-control form-control-lg" ref={Name} required />
                        <span className="floating-label">Your Name</span>
                      </div>

                      <div className="user-input-wrp form-outline mb-4">
                        <input type="email" className="form-control form-control-lg" ref={email} required />
                        <span className="floating-label">Your email address</span>
                      </div>

                      <div className="user-input-wrp form-outline mb-4">
                        <input type="email" className="form-control form-control-lg" ref={password} required />
                        <span className="floating-label">Enter the password</span>
                      </div>
                      
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                        <label className="form-check-label" htmlFor="form2Example3g">
                          I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button" data-mdb-button-init
                          data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={Registered} style={{ marginTop: '20px' }}>Register</button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                      <a href="" className="fw-bold text-body" onClick={loggedin}><u>Login here</u></a></p>
                    </form>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
