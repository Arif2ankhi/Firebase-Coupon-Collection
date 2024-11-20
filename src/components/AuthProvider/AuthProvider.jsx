import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
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

onAuthStateChanged(auth, currentUser =>{
    if(currentUser){
        console.log('Currently logged in user:', currentUser);
        setUser(currentUser);
    }
    else{
        console.log('No user logged in');
        setUser(null);
    }

})
    



const authInfo = {
    name,
    createUser,
    signInUser,
 };


    return (
        <AuthContext.Provider value ={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;