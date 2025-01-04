import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email,password)=>{
         setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin  = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const updateUser = (updatedUser) =>{
        return updateProfile(auth.currentUser,updatedUser)
    }

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            toast.success("Logout successfully")
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
      };
      
      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser)
            setLoading(false)
        })
        return () =>unSubscribe()
       
    } ,[])


    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        googleLogin,
        updateUser,
        logout
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;