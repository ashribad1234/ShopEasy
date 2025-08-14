import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email.current.value === storedEmail && password.current.value === storedPassword) {
      alert('Login successful!');
      navigate('/home'); // Redirect to Home page after login
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Sign In</h2>
                    <form>
                      <div className="user-input-wrp form-outline mb-4">
                        <input type="email" className="form-control form-control-lg" ref={email} required />
                        <span className="floating-label">Your Email</span>
                      </div>

                      <div className="user-input-wrp form-outline mb-4">
                        <input type="password" className="form-control form-control-lg" ref={password} required />
                        <span className="floating-label">Enter the Password</span>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin} style={{ marginTop: '20px' }}>
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Don't have an account? <a href="/signup" className="fw-bold text-body"><u>Sign up here</u></a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
