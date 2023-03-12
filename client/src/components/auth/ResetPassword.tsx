import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import { url } from "../../api/baseURL";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function () {
    const { id } = useParams();
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch(`${url}/auth/resetPassword/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        });
        const data = await response.json();

        switch (data.msg) {
            case "user with the given email doesn't exist":
                toast.error(data.msg, {
                    autoClose: 6000,
                    pauseOnFocusLoss: false,
                    pauseOnHover: false
                })
                break;
            case "error while resetting password":
                toast.error(data.msg, {
                    autoClose: 6000,
                    pauseOnFocusLoss: false,
                    pauseOnHover: false
                })
                break;
            default:
                break;
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} autoComplete="off" >
                <TextField value={password} onChange={e => setPassword(e.target.value)} label="enter new password..." />
                <TextField value={confirm} onChange={e => setConfirm(e.target.value)} label="confirm passwor..." />
                <button>Reset password</button>
            </form>
            <ToastContainer />
        </>
    )
}