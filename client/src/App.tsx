import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ComputersPage from "./pages/ComputersPage";
import KeyboardsPage from "./pages/KeyboardsPage";
import ScreensPage from "./pages/ScreensPage";
import MousesPage from "./pages/MousesPage";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import AuthForm from "./components/auth/AuthForm";
import DashboardPage from "./pages/DashboardPage";
import ProductDetails from "./pages/ProductDetails";
import OrdersPage from "./pages/OrdersPage";
import SettingsPage from "./pages/SettingsPage";

export default function () {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} >
                    <Route path="" element={<AuthForm />} />
                    <Route path="forgetPassword" element={<ForgetPassword />} />
                    <Route path="resetPassword/:id" element={<ResetPassword />} />
                </Route>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/computers" element={<ComputersPage />} />
                <Route path="/keyboards" element={<KeyboardsPage />} />
                <Route path="/screens" element={<ScreensPage />} />
                <Route path="/mouses" element={<MousesPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/product/:id" element={<ProductDetails/>} />
                <Route path="/orders" element={ <OrdersPage/> } />
                <Route path="/settings" element={ <SettingsPage/> } />
            </Routes>
        </>
    )
}