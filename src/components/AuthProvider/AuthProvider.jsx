import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)
 


const createUser =(email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);

}

const signInUser = (email, password) =>{
    setLoading(true)
   return signInWithEmailAndPassword( auth, email, password);
}

const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider )

}

// Update Profile 

const updateUserProfile = (newProfile) => {
    if (!auth.currentUser) return Promise.reject('No user is signed in');
    return updateProfile(auth.currentUser, newProfile)
        .then(() => setUser({ ...auth.currentUser })); // Refresh user context
};

// Signout user

const signOutUser = () =>{
    setLoading(true)
    return signOut(auth);
}

useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('current user', currentUser);
       setUser(currentUser);   
       setLoading(false);
           
    })

    return () => {
        unSubscribe();
     } // cleanup function to unsubscribe when component unmounts

},[])
    



const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUserProfile
   
    
 };


    return (
        <AuthContext.Provider value ={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;