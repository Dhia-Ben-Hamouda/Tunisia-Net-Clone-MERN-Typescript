import React from "react";
import logo from "../images/logo.png";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FaEye , FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function(){
    const [signIn , setSignIn] = useState(true);
    const [hidden , setHidden] = useState(true);
    const [picture , setPicture] = useState("");
    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [email ,setEmail] = useState("");
    const [password , setPassword] = useState("");

    function handleChange(e: React.ChangeEvent){

    }

    return(
        <>
            <section id="auth">
                <div className="left-section">
                    <img src={logo} alt="" />
                </div>
                <div className="right-section">
                    <form autoComplete="off" >
                        <TextField label="email" />
                        <TextField type={hidden ? "password" : "text"} label="password" InputProps={{endAdornment:<InputAdornment position="end">
                            {
                                hidden ? <FaEye onClick={()=>{setHidden(!hidden)}} className="eye" /> : <FaEyeSlash onClick={()=>{setHidden(!hidden)}} className="eye" />
                            }
                        </InputAdornment>}} />
                        <button>{signIn ? "Sign in" : "Sign up"}</button>
                    </form>
                </div>
            </section>
        </>
    )
}