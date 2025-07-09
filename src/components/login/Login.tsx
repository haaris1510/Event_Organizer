import React from 'react'
import Wrapper from '../../wrapper/Wrapper'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Wrapper>
                <div className="banner">
                    <div className="h-signup">
                        <h1>User Login</h1>
                    </div>
                </div>
                <div className="container signup-cont">
                    <div className="account-signup">
                        <div className="account-signup-header">
                            <h2>Login</h2>
                            <p>Login if you are a returning customer.</p>
                        </div>
                        <form action="">
                            <div className="account-inner">

                                <input type="email" name='email' placeholder='Email Address' />

                                <input type="password" name='password' placeholder='Password' />
                                <div className='flex wrapper-pass-forgot'>
                                    <p className='pass-forgot flex'>Forgot Your Password?</p></div>

                                <br />
                                <button className='account-login-btn'>Login</button>
                                <div className="divider">

                                </div>
                                <p className='para-login'>Don't have an account? <Link to='/sign-up' className='login-hover'>Sign up now</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </Wrapper>
        </>
    )
}

export default Login
