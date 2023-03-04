import React from "react";

interface Props{
    text:string,
    type?:any
}

export default function({text,type}: Props){
    return(
        <button type={type} >{ text }</button>
    )
}