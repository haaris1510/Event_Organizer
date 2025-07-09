
import '../../css/signup.scss'
import Wrapper from '../../wrapper/Wrapper'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <Wrapper>
                <div className="banner">
                    <div className="h-signup">
                        <h1>User Registration</h1>
                    </div>
                </div>
                <div className="container signup-cont">
                    <div className="account-signup">
                        <div className="account-signup-header">
                            <h2>Create New Account</h2>
                            <p><Link to='/login' className='login-hover'>Login</Link> if you are a returning customer.</p>
                        </div>
                        <form action="">
                            <div className="account-inner">
                                <input type="text" name='firstname' placeholder='First Name' />
                                <input type="text" name='lastname' placeholder='Last Name' />
                                <input type="email" name='email' placeholder='Email Address' />
                                <input type="number" name='mobile-number' placeholder='Mobile Number' />
                                <input type="password" name='password' placeholder='Password' />
                                <input type="password" name='passwordConfirm' placeholder='Confirm Password' />
                                <input type="checkbox" className='chck-box-input' name='termsConditions' />
                                <i></i> I have read and agreed with the <a href="" className='login-hover'>terms and conditions.</a>
                                <br />
                                <button className='account-login-btn'>Registration</button>
                                <div className="divider">

                                </div>
                                <p className='para-login'>Login if you are a returning customer. <Link to='/login' className='login-hover'>Login Now</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </Wrapper>
        </>
    )
}

export default Signup

