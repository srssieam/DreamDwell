import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center px-6 md:px-0">
            <div className="border-2 border-[#ffee00] rounded-2xl p-7 w-full md:w-3/5 lg:w-2/5">
                    <form  className="">
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