import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateCurrentUser, updateProfile} from "firebase/auth"

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithGithub = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile = (name, url) =>{
        return updateProfile(user, {displayName: name, photoURL: url})
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })

        return ()=>{
            unSubscriber()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginWithGoogle,
        loginWithGithub,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;