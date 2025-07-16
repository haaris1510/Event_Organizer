import { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import Wrapper from '../../wrapper/Wrapper'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = login(email, password)
        if (success) {
            alert('logged in')
            navigate('/')
        }
        else {
            setError("Invalid email or password")
        }
    }

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
                        <form action="" onSubmit={handleSubmit}>
                            <div className="account-inner">

                                <input type="email" name='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />

                                <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                {error && <p style={{ color: 'red' }}>{error}</p>}
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
