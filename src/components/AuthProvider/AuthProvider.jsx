import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
const name  = 'potato';


const createUser =(email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);

}

const signInUser = (email, password) =>{
   return signInWithEmailAndPassword( auth, email, password);
}

const signOutUser = () =>{
    return signOut(auth);
}

useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('current user', currentUser);
       setUser(currentUser);    
           
    })

    return () => {
        unSubscribe();
     } // cleanup function to unsubscribe when component unmounts

},[])
    



const authInfo = {
    name,
    user,
    createUser,
    signInUser,
    signOutUser,
    
 };


    return (
        <AuthContext.Provider value ={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;