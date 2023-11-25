import error from '../assets/error.png'

const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <img src={error} className='w-[2/3]' alt="" />
        </div>
    );
};

export default ErrorPage;