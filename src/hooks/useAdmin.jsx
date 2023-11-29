import useAuth from "./useAuth";


const useAdmin = () => {
    const {user : currentUser} = useAuth();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    if(currentUser?.email === )
};

export default useAdmin;