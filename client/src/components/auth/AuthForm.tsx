import React, { useState, useRef } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/images/socials/google.png";
import facebook from "../../assets/images/socials/facebook.png";
import twitter from "../../assets/images/socials/twitter.png";
import { useDispatch } from "react-redux";
import { login } from "../../app/actionCreators/authActionCreators";
import { Toaster } from 'react-hot-toast';
import { AuthForm } from "../../@types/types";
import { signIn, signUp } from "../../utils/auth";
import emptyObject from "../../utils/emptyObject";
import validateForm from "../../utils/validateForm";

export default function () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [status, setStatus] = useState("signIn");
    const [hidden, setHidden] = useState(true);
    const [form, setForm] = useState<AuthForm>({ name: "", phone: "", email: "", password: "", picture: null });
    const [errors, setErrors] = useState({ name: "", phone: "", email: "", password: "", picture: "" });
    const button = useRef<HTMLButtonElement>(null);

    function fileHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setForm({ ...form, picture: e.target.files[0] });
        }
    }

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        if (status === "signIn") {
            if (button.current) {
                if (!emptyObject(validateForm(form, "signIn"))) {
                    setErrors(validateForm(form, "signIn"));
                    return;
                }

                signIn(form, navigate, dispatch, button.current);
            }
        } else {
            if (button.current) {
                if (!emptyObject(validateForm(form, "signUp"))) {
                    setErrors(validateForm(form, "signUp"));
                }

                signUp(form, button.current);
            }
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <form onSubmit={submitHandler} autoComplete="off" >
                {
                    status !== "signIn" && <>
                        <div className="picture-wrapper">
                            <label htmlFor="picture">
                                {
                                    form.picture ? <img src={form.picture} alt="profile picture" /> : <FaUserCircle className="avatar" />
                                }
                            </label>
                            <input type="file" id="picture" hidden onChange={fileHandler} />
                        </div>
                        <TextField value={form.name} onChange={handleChange} name="name" label="enter name..." />
                        <TextField value={form.phone} onChange={handleChange} name="phone" label="enter phone..." />
                    </>
                }
                <TextField value={form.email} onChange={handleChange} name="email" label="enter email..." />
                <TextField value={form.password} onChange={handleChange} name="password" type={hidden ? "password" : "text"} label="enter password..." InputProps={{
                    endAdornment: <InputAdornment position="end">
                        {
                            hidden ? <FaEye onClick={() => { setHidden(!hidden) }} className="eye" /> : <FaEyeSlash onClick={() => { setHidden(!hidden) }} className="eye" />
                        }
                    </InputAdornment>
                }} />
                {
                    status === "signIn" && <Link to="forgetPassword" >Forget password ?</Link>
                }
                <button ref={button} type="submit" >{status === "signIn" ? "Sign in" : "Sign up"}</button>
                {
                    status === "signIn" ? <>
                        <h3>Don't have an account ? <span onClick={() => { setStatus("signUp") }}>Sign up</span></h3>
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
                    </> : <h3>Already have an account ? <span onClick={() => { setStatus("sihnIn") }}>Sign in</span></h3>
                }
            </form>
            <Toaster />
        </>
    )
}