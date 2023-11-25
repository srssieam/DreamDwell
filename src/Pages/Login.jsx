import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";

const Login = () => {
    const [error, setError]=useState('')

    useEffect(() => {
        // Snippet --> loadCaptchaEnginge(Number_Of_Captcha_Charcters, Background_Color, Font_Color, Special_Characters);
        loadCaptchaEnginge(6,'yellow','green')
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        const captcha = form.captcha.value;
        console.log(email, password, captcha)

        if (validateCaptcha(captcha) == true) {
            alert('Captcha Matched');
        }

        else {
            setError('Invalid captcha');
        }
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
                        <button className=' bg-[#ffee00] hover:bg-[#54b647] font-semibold text-black p-3 flex gap-2 items-center'>Continue with<FcGoogle className='text-2xl'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;