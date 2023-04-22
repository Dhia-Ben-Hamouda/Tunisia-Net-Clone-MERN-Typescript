import { AuthForm } from "../@types/types";

export default function validateForm(authForm: AuthForm, action: string) {
    let errors = { name: "", phone: "", email: "", password: "", picture: "" };

    if (action === "signUp") {
        if (!authForm.name) {
            errors.name = "name field is required"
        } else if (authForm.name.length < 3) {
            errors.name = "name should be at least 3 characters long"
        }

        if (!authForm.phone) {
            errors.phone = "phone field is required"
        } else if (!/[\d]{8}/.test(authForm.phone)) {
            errors.phone = "phone should be 8 numbers long"
        }
    }

    if (!authForm.email) {
        errors.email = "email field is required"
    } else if (!/^[a-zA-Z0-9.]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}$/.test(authForm.email)) {
        errors.email = "please enter a valid email adress"
    }

    if (!authForm.password) {
        errors.password = "password field is required"
    } else if (authForm.password.length < 6) {
        errors.password = "password should be at least 6 characters long"
    }

    return errors;
}