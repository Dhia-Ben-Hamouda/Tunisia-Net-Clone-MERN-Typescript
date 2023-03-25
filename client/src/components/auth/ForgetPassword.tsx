import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import { url } from "../../api/baseURL";
import toast, { Toaster } from 'react-hot-toast';

export default function () {
    const [email, setEmail] = useState("");

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch(`${url}/auth/forgetPassword`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        });
        const data = await response.json();

        switch (data.msg) {
            case "user with the given email doesn't exist":
                toast.error(data.msg)
                break;
            case "error while sending password reset email":
                toast.error(data.msg)
                break;
            case "a password reset link has been sent to your email":
                toast.success(data.msg)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} autoComplete="off" >
                <TextField value={email} onChange={e => setEmail(e.target.value)} label="enter email..." />
                <button>Send password reset link</button>
            </form>
            <Toaster />
        </>
    )
}