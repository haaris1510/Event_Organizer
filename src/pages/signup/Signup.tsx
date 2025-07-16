
import { useAuth } from '../../Context/AuthContext'
import '../../styles/signup.scss'
import Wrapper from '../../wrapper/Wrapper'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log("Form is" , form)
        const email = (form.email as HTMLInputElement).value
        console.log(email)
        const password = (form.password as HTMLInputElement).value
        console.log(password)
        const passwordConfirm = (form.passwordConfirm as HTMLInputElement).value
        console.log(passwordConfirm)
        // console.log(form)
        if (password !== passwordConfirm) {
            alert("Password do not match")
            return

        }
        register(email, password)
        navigate('/login')
    }

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
                        <form action="" onSubmit={handleSubmit}>
                            <div className="account-inner">
                                <input type="text" name='firstname' placeholder='First Name' />
                                <input type="text" name='lastname' placeholder='Last Name' />
                                <input type="email" name='email' placeholder='Email Address' required />
                                <input type="number" name='mobile-number' placeholder='Mobile Number' />
                                <input type="password" name='password' placeholder='Password' required />
                                <input type="password" name='passwordConfirm' placeholder='Confirm Password' required />
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

