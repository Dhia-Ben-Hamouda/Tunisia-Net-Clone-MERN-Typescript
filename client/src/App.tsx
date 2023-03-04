import React from "react";
import Home from "./pages/Home";
import { Routes , Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Computers from "./pages/Computers";
import Keyboards from "./pages/Keyboards";
import Screens from "./pages/Screens";
import Mouses from "./pages/Mouses";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

export default function(){
    return(
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/auth" element={ <Auth/> } />
                <Route path="/cart" element={ <Cart/> } />
                <Route path="/computers" element={ <Computers/> } />
                <Route path="/keyboards" element={ <Keyboards/> } />
                <Route path="/screens" element={ <Screens/> } />
                <Route path="/mouses" element={ <Mouses/> } />
                <Route path="/forgetPassword" element={ <ForgetPassword/> } />
                <Route path="/resetPassword/:id" element={ <ResetPassword/> } />
            </Routes>
        </>
    )
}