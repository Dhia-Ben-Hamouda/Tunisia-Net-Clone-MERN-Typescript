import React from "react";
import { TextField } from "@mui/material";
import Button from "../components/Button";

export default function(){

    async function submitHandler(e: React.FormEvent){
        e.preventDefault();

        
    }

    return(
        <>
            <section id="forget-password">
                <form onSubmit={submitHandler} autoComplete="off" >
                    <TextField 
                        label="enter email"
                    />
                    <Button type="submit" text="Send password reset link" />
                </form>
            </section>
        </>
    )
}