import React from "react";
import logo from "../images/logo.png";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FaEye , FaEyeSlash , FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../api/baseURL";

export default function(){
    const [signIn , setSignIn] = useState(false);
    const [hidden , setHidden] = useState(true);
    const [picture , setPicture] = useState("");
    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [email ,setEmail] = useState("");
    const [password , setPassword] = useState("");

    function fileHandler(e: any){
        const file = e.target.files[0];
        const fileReader: any = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function(){
            setPicture(fileReader.result);
        }
    }

    async function authenticate(e: React.FormEvent){
        e.preventDefault();

        const response = await fetch(`${url}/auth/signIn` , {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();

        console.log(data);

        switch(data.msg){

        }
    }

    async function register(e: React.FormEvent){
        e.preventDefault();

        const response = await fetch(`${url}/auth/signUp` , {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name,
                phone,
                picture,
                email,
                password
            })
        })
        const data = await response.json();

        console.log(data);

        switch(data.msg){
            
        }
    }

    return(
        <>
            <section id="auth">
                <div className="left-section">
                    <img src={logo} alt="" />
                </div>
                <div className="right-section">
                    <form onSubmit={signIn ? authenticate : register} autoComplete="off" >
                        {
                            !signIn && <>
                                <div className="picture-wrapper">
                                    <label htmlFor="picture">
                                        {
                                            picture ? <img src={picture} alt="profile picture" /> : <FaUserCircle className="avatar" />
                                        }
                                    </label>
                                    <input type="file" id="picture" hidden onChange={fileHandler} />
                                </div>
                                <TextField value={name} onChange={e => setName(e.target.value)} name="name" label="enter name..." />
                                <TextField value={phone} onChange={e => setPhone(e.target.value)} name="phone" label="enter phone..." />
                            </>
                        }
                        <TextField value={email} onChange={e => setEmail(e.target.value)} name="email" label="enter email..." />
                        <TextField value={password} onChange={e => setPassword(e.target.value)} name="password" type={hidden ? "password" : "text"} label="enter password..." InputProps={{endAdornment:<InputAdornment position="end">
                            {
                                hidden ? <FaEye onClick={()=>{setHidden(!hidden)}} className="eye" /> : <FaEyeSlash onClick={()=>{setHidden(!hidden)}} className="eye" />
                            }
                        </InputAdornment>}} />
                        {
                            signIn && <Link to="/forgetPassword" >Forget password ?</Link>
                        }
                        <button>{signIn ? "Sign in" : "Sign up"}</button>
                        {
                            signIn ? <h3>Don't have an account ? <span onClick={()=>{setSignIn(!signIn)}}>Sign up</span></h3> : <h3>Already have an account ? <span onClick={()=>{setSignIn(!signIn)}}>Sign in</span></h3>
                        }
                    </form>
                </div>
            </section>
        </>
    )
}