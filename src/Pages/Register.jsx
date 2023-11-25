import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="w-full min-h-[100vh] flex justify-center items-center px-6 md:px-0">
            <div className="border-2 mt-[80px] border-[#ffee00] rounded-2xl p-7 w-full md:w-3/5 lg:w-2/5">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <h1 className="text-4xl font-bold text-center">Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-black">Name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-700">Name is required !</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-black">Photo</span>
                        </label>
                        <input {...register("photoURL", { required: true })} type="text" placeholder="photo" className="input input-bordered" />
                        {errors.photoURL && <span className="text-red-700">Photo is required !</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-black">Email*</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-700">Email is required !</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-black">Password*</span>
                        </label>
                        <input {...register("password", { required: true, minLength: 6, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;<>,.?~\\/-]).{6,}$/ })} type="password" placeholder="password" className="input input-bordered" />
                        {errors.password?.type === "required" && <span className="text-red-700">password is required !</span>}
                        {errors.password?.type === "minLength" && <span className="text-red-700">password must be more then 6 character!</span>}
                        {errors.password?.type === "pattern" && <span className="text-red-700">password must have one uppercase, one lowercase, one number and one spacial characters!</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn bg-[#ffee00] text-lg hover:bg-[#54b647] font-semibold border-none text-black">Register</button>
                    </div>
                </form>
                <div className='space-y-4 mt-4'>
                    <p className='text-xl text-center text-[#2f7c25]'>Already registered? <Link className=' font-bold hover:underline' to='/login'>Go to login</Link></p>
                    <p className='text-center'>Or Sign In with</p>
                    <div className='flex justify-center'>
                        <button className=' bg-[#ffee00] hover:bg-[#54b647] font-semibold text-black p-3 flex gap-2 items-center'>Continue with<FcGoogle className='text-2xl'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;