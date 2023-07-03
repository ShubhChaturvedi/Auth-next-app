"use client";
import React, {useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./style.css"


export default function signupPage(){
    const router = useRouter();

    const [user, setUser] = React.useState({
        email : "",
        username : "",
        password : "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    }, [user])


    const onSignup = async () => {
        try {
            setLoading(true);
            const send = await axios.post("/api/users/signup", user);
            router.push("/login")
        } catch (error: any) {
            console.log("error: ", error.message);
        } finally{
            setLoading(false)
        }
    }

    return (
        <body> 

        <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
      
         <div className="signin"> 
      
          <div className="content"> 
      
           <h2>{loading? "Processing.." : "Signup"}</h2> 
      
           <div className="form"> 
      
            <div className="inputBox"> 
      
             <input type="text" required
                value={user.username}
                onChange={(e)=>setUser({...user, username: e.target.value})}
             /> <i>Username</i> 
      
            </div> 
            <div className="inputBox"> 
      
             <input type="email"
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
             required/> <i>Email</i> 
      
            </div> 
      
            <div className="inputBox"> 
      
             <input type="password"
                value={user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
             required/> <i>Password</i> 
      
            </div> 
      
            <div className="links"> <a href="#"></a><a href="/login">Sign in</a> 
      
            </div> 
      
            <div className="inputBox"> 
      
             <input type="submit" 
             onClick={onSignup}
             value={buttonDisabled? "Enter data" : "Sign up"}/> 
      
            </div> 
      
           </div> 
      
          </div> 
      
         </div> 
      
        </section>
      
       </body>
    );
}