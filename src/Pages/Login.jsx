import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
    const [error, setError]=useState('')
    const { userLogin, googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    
    const navigate = useNavigate();
    const location = useLocation();
    let toGo = location.state?.from?.pathname || "/"

    useEffect(() => {
        // Snippet --> loadCaptchaEnginge(Number_Of_Captcha_Charcters, Background_Color, Font_Color, Special_Characters);
        loadCaptchaEnginge(6,'yellow','green')
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha)

        if (validateCaptcha(captcha) == true) {
            userLogin(email, password)
                .then(res => {
                    const loggedUser = res.user;
                    console.log(loggedUser);
                    Swal.fire({
                        title: "Login Successful!",
                        text: `Welcome back`,
                        icon: "success"
                      });
                      form.reset()
                      navigate(toGo, {replace:true});
                })
                .catch(error => {
                    console.log(error.message)
                    setError("password and email does'nt match !!")
                })
        }
        else {
            setError('Invalid captcha');
        }
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            const userInfo = {
                email: loggedUser?.email,
                name: loggedUser?.displayName
            }

            axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                    Swal.fire({
                        title: "Login Successful!",
                        text: `Welcome back`,
                        icon: "success"
                    });
                    navigate(toGo, {replace:true});
                })
            
        })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="w-full min-h-[100vh] flex justify-center items-center px-6 md:px-0">
            <div className="border-2 border-[#ffee00] rounded-2xl p-7 w-full md:w-3/5 lg:w-2/5 mt-24">
                <form onSubmit={handleLogin} className="">
                    <h1 className="text-4xl font-bold text-center">Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-black">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-black">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate  reloadColor="green" />
                        </label>
                        <input type="text" name="captcha" placeholder="write captcha" className="input input-bordered" required />
                        <p className='text-red-700 font-semibold'>{error}</p>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-[#ffee00] text-lg hover:bg-[#54b647] font-semibold border-none text-black">Login</button>
                    </div>
                </form>
                <div className='space-y-4 mt-4'>
                    <p className='text-xl text-center text-[#2f7c25]'>New Here? <Link className=' font-bold hover:underline' to='/register'>Create a new account</Link></p>
                    <p className='text-center'>Or Sign In with</p>
                    <div className='flex justify-center'>
                        <button onClick={handleGoogleLogin} className=' bg-[#ffee00] hover:bg-[#54b647] font-semibold text-black p-3 flex gap-2 items-center'>Continue with<FcGoogle className='text-2xl'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;