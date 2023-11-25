import axios from "axios";


export const axiosPublic = axios.create({baseURL: 'http://localhost:5000/v1/api'})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;