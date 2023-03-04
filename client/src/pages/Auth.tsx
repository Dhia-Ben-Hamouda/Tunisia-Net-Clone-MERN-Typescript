import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FaEye , FaEyeSlash } from "react-icons/fa";
import Button from "../components/Button";

export default function () {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signIn, setSignIn] = useState(true);
    const [hidden , setHidden] = useState(true);

    return (
        <>
            <section id="auth">
                <form autoComplete="off" >
                    {
                        !signIn ? <>
                            <TextField
                                label="enter name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <TextField
                                label="enter phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </> : null
                    }
                    <TextField
                        label="enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        label="enter password"
                        value={password}
                        type={hidden ? "password" : "text"}
                        onChange={e => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment:<InputAdornment position="end">
                                {
                                    hidden ? <FaEye style={{cursor:"pointer"}} size="1.5rem" onClick={()=>{setHidden(!hidden)}} /> : <FaEyeSlash style={{cursor:"pointer"}} size="1.5rem" onClick={()=>{setHidden(!hidden)}} />
                                }
                            </InputAdornment>
                        }}
                    />
                    {
                        signIn ? <Link to="/forgetPassword">
                            forgot password ?
                        </Link> : null
                    }
                    <Button text={ signIn ? "Sign in" : "Sign up" } />
                    {
                        signIn ? <h3>
                            Don't have an account ? <span onClick={()=>{setSignIn(!signIn)}}>Sign up !</span>
                        </h3> : <h3>
                            Already have an account ? <span onClick={()=>{setSignIn(!signIn)}}>Sign in !</span>
                        </h3>
                    }
                </form>
            </section>
        </>
    )
}