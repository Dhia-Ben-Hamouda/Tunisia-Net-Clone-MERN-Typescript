import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { useEffect } from "react";

export default function(){

    useEffect(()=>{
        function handleAnimation(){
            if(window.scrollY > 0){
                document.querySelector(".top")?.classList.remove("hidden");
            }else{
                document.querySelector(".top")?.classList.add("hidden");
            }
        }

        document.addEventListener("scroll" , handleAnimation);

        return ()=>{ document.removeEventListener("scroll" , handleAnimation)}
    } , []);

    function clickHandler(){
        window.scrollTo({
            top:0
        })
    }

    return(
        <>
            <button onClick={clickHandler} className="top hidden">
                <FaAngleUp className="arrow" />
            </button>
        </>
    )
}