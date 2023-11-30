import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const GoogleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user name and profile
    const updateUserProfile = (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // login method
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // authentication state observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            const loggedUser = {email: currentUser?.email}
            if(currentUser){
                axiosPublic.post('/jwt', loggedUser, {withCredentials: true}) // sent loggedUser to the server
                .then(res => {
                    console.log('token response', res.data) // get token for loggedUser
                    
                })
                
            }
            else{
                axiosPublic('/logout', loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log('logged out', res.data); // get response fro server after clearing cookie
                })
            }
        })
        return () =>{
            return unsubscribe();
        }
    },[axiosPublic])

    // logout method
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // googleLogin method 
    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const authInfo = { user, loading, createUser, updateUserProfile, userLogin, logOut, googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;