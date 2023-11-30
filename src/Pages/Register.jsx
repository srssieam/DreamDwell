import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const { createUser, updateUserProfile, googleLogin } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const location = useLocation();
    let toGo = location.state?.from?.pathname || "/"

    const onSubmit = data => {
        console.log(data)

        const userInfo = { name: data.name, email: data.email }

        const imageFile = { image: data.propertyImg[0] }
        const res = axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        const UploadedPhotoUrl = res.data.data.display_url
        console.log(UploadedPhotoUrl)

        createUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL);

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if(res.data.insertedId){
                            console.log('user added to the database');
                            Swal.fire({
                                title: "Account created!",
                                text: "Your account has been successfully created. Welcome aboard!",
                                icon: "success"
                            });
                            reset();
                            navigate('/')
                        }
                    })
                
            })
            .catch(error => {
                console.log(error.message)
            })
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
            <Helmet>
                <title>DreamDwell | Register</title>
            </Helmet>
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
                        <input {...register('photoURL', { required: true })} type="file" className="border file-input max-w-xs mx-4 my-3 w-full mt-4 text-black bg-green-500" />
                        {/* <input {...register("photoURL", { required: true })} type="text" placeholder="photo" className="input input-bordered" /> */}
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
                        <button onClick={handleGoogleLogin} className=' bg-[#ffee00] hover:bg-[#54b647] font-semibold text-black p-3 flex gap-2 items-center'>Continue with<FcGoogle className='text-2xl'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;