import {auth,googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {useState} from 'react';

export const Auth=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn= async()=>{
        try{
        await createUserWithEmailAndPassword(auth,email,password);
        }catch(err){
            console.log(err.message)
        }
    };
    const signInWithGoogle=async ()=>{
        try{
            await signInWithPopup(auth,googleProvider);
            }catch(err){
                console.log(err.message)
            }
    }
    return(
        <div>
            <input placeholder='Email..'
            onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder='Password..'
             onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign in</button>
            <button onClick={signInWithGoogle}>Sign in With Google</button>
        </div>
    )
}