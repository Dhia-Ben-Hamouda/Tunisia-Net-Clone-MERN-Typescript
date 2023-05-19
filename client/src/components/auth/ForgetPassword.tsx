import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import url from "../../api/baseURL";
import toast, { Toaster } from 'react-hot-toast';

export default function () {
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        setDisabled(true);
        toast.loading("sending password reset link", { id: "auth", position: "bottom-center", style: { minWidth: 400 } });

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
        setDisabled(false);

        switch (data.msg) {
            case "user with the given email doesn't exist":
                toast.error(data.msg, { position: "bottom-center", id: "auth" })
                break;
            case "error while sending password reset email":
                toast.error(data.msg, { position: "bottom-center", id: "auth" })
                break;
            case "a password reset link has been sent to your email":
                toast.success(data.msg, { position: "bottom-center", id: "auth" })
                break;
            default:
                break;
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} autoComplete="off" >
                <TextField value={email} onChange={e => setEmail(e.target.value)} label="enter email..." />
                <button disabled={disabled} >Send password reset link</button>
            </form>
            <Toaster />
        </>
    )
}