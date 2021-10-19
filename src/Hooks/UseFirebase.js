import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/LoginAuth/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true); 
    const auth = getAuth();
   

    
    const handleEmail = (e)=>{
        setEmail(e.target.value)
     }
     const handlePassword = e => {
        setPassword(e.target.value); 
     }
      
     const handleRegistration = e => {
        e.preventDefault();
         if(password.length <6) {
             setError('password must be atleast 6 characters')
            return;
         }if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Ensure password has two uppercase letters.')
            return;
         }
        createUserWithEmailAndPassword( auth,email, password)
        .then(result => { 
        
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
       
    }

    const handleLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(result => { 
            const user = result.user;
            
        })
    }
    const signInUsingGoogle = () => { 
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
       
    }
   
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[auth])
    const logOut = () => { 
        setIsLoading(true)
        signOut(auth)
        .then(()=> { })
        .finally(()=> setIsLoading(false))
    }
    
       
 

   

    return{
        setUser,
        handleLogin,
        error,
        handlePassword,
        handleEmail,
        handleRegistration,
        setIsLoading,
        isLoading,
        user,
        signInUsingGoogle, 
        logOut,
    }
}

export default useFirebase;