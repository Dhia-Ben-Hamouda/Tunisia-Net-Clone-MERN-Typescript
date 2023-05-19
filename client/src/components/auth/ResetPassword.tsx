import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import url from "../../api/baseURL";
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from "react-router-dom";

export default function () {
    const { id } = useParams();
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [disabled, setDisabled] = useState(false);

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        if(confirm !== password){
            toast.error("password and confirmation don't match" , {position:"bottom-center" , style:{ minWidth:400 }});
            return;
        }

        setDisabled(true);
        toast.loading("reseting password...", { id: "auth", position: "bottom-center" , style:{ minWidth:400 } });

        const response = await fetch(`${url}/auth/resetPassword/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        });
        const data = await response.json();
        setDisabled(false);

        switch (data.msg) {
            case "password has been reset successfully":
                toast.success(data.msg, { position: "bottom-center" , id:"auth" , style:{ minWidth:400 } });
                break;
            case "error while resetting password":
                toast.error(data.msg, { position: "bottom-center" , id:"auth" , style:{ minWidth:400 } });
                break;
            default:
                break;
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} autoComplete="off" >
                <TextField value={password} onChange={e => setPassword(e.target.value)} label="new password..." />
                <TextField value={confirm} onChange={e => setConfirm(e.target.value)} label="confirm password..." />
                <button disabled={disabled} >Reset password</button>
            </form>
            <Toaster />
        </>
    )
}