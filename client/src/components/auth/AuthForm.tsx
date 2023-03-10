import React from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../api/baseURL";
import google from "../../images/socials/google.png";
import facebook from "../../images/socials/facebook.png";
import twitter from "../../images/socials/twitter.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function () {
    const [signIn, setSignIn] = useState(true);
    const [hidden, setHidden] = useState(true);
    const [picture, setPicture] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function fileHandler(e: any) {
        const file = e.target.files[0];
        const fileReader: any = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function () {
            setPicture(fileReader.result);
        }
    }

    async function authenticate(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch(`${url}/auth/signIn`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();

        console.log(data);

        switch (data.msg) {
            case "user with the given email doesn't exist":
                toast.error(data.msg , {
                    autoClose: 5000,
                    pauseOnHover: false,
                })
                break;
            case "wrong password":
                toast.error(data.msg , {
                    autoClose: 6000,
                    pauseOnHover: false,
                    pauseOnFocusLoss:false
                })
                break;
            case "logged in successfully":
                break;
            case "error while signing in":
                toast.error(data.msg , {
                    autoClose: 6000,
                    pauseOnHover: false,
                    pauseOnFocusLoss:false
                })
                break;
            default:
                break;
        }
    }

    async function register(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch(`${url}/auth/signUp`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone,
                picture,
                email,
                password
            })
        })
        const data = await response.json();

        console.log(data);

        switch (data.msg) {
            case "password has been reset successfully":
                toast.success(data.msg , {
                    autoClose: 6000,
                    pauseOnHover: false,
                    pauseOnFocusLoss:false
                })
                break;
            case "error while signing up":
                toast.error("error while signing up", {
                    autoClose: 6000,
                    pauseOnHover: false,
                    pauseOnFocusLoss:false
                })
                break;
            default:
                break;
        }
    }

    return (
        <>
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
                <TextField value={password} onChange={e => setPassword(e.target.value)} name="password" type={hidden ? "password" : "text"} label="enter password..." InputProps={{
                    endAdornment: <InputAdornment position="end">
                        {
                            hidden ? <FaEye onClick={() => { setHidden(!hidden) }} className="eye" /> : <FaEyeSlash onClick={() => { setHidden(!hidden) }} className="eye" />
                        }
                    </InputAdornment>
                }} />
                {
                    signIn && <Link to="forgetPassword" >Forget password ?</Link>
                }
                <button>{signIn ? "Sign in" : "Sign up"}</button>
                {
                    signIn ? <>
                        <h3>Don't have an account ? <span onClick={() => { setSignIn(!signIn) }}>Sign up</span></h3>
                        <h3 className="or" >or sign in with</h3>
                        <div className="socials-wrapper">
                            <div className="social">
                                <img src={google} alt="google logo" />
                            </div>
                            <div className="social">
                                <img src={facebook} alt="facebook logo" />
                            </div>
                            <div className="social">
                                <img src={twitter} alt="twitter logo" />
                            </div>
                        </div>
                    </> : <h3>Already have an account ? <span onClick={() => { setSignIn(!signIn) }}>Sign in</span></h3>
                }
            </form>
            <ToastContainer />
        </>
    )
}