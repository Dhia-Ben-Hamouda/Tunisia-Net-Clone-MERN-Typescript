import toast from "react-hot-toast";
import url from "../api/baseURL";
import { AuthForm } from "../@types/types";
import { NavigateFunction } from "react-router-dom";
import { login } from "../app/actionCreators/authActionCreators";

export async function signIn(authForm: AuthForm, navigate: NavigateFunction, dispatch: any , button: HTMLButtonElement) {
    try {
        toast.loading("signing in...", { id: "auth", position: "bottom-center" });
        button.disabled = true;

        const response = await fetch(`${url}/auth/signIn`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: authForm.email,
                password: authForm.password
            })
        });
        const data = await response.json();
        button.disabled = false;

        switch (data.msg) {
            case "wrong password":
                toast.error(data.msg, { id: "auth", position: "bottom-center" });
                break;
            case "user with the given email doesn't exist":
                toast.error("user doesn't exist", { id: "auth", position: "bottom-center" });
                break;
            case "error while signing in":
                toast.error(data.msg, { id: "auth", position: "bottom-center" });
                break;
            case "logged in successfully":
                dispatch(login(data));
                toast.success(`welcome back ${data.name}`, { id: "auth", position: "bottom-center"});
                navigate("/");
                break;
        }

    } catch (err) {
        console.error(err);
    }
}

export async function signUp(authForm: AuthForm , button: HTMLButtonElement) {
    try {
        toast.loading("creating account..." , {position:"bottom-center" , id:"auth"});
        const formData = new FormData();
        button.disabled = true;

        formData.append("name", authForm.name);
        formData.append("phone", authForm.phone);
        formData.append("email", authForm.email);
        formData.append("password", authForm.password);
        formData.append("picture", authForm.picture);

        const response = await fetch(`${url}/auth/signUp`, {
            method: "POST",
            body: formData
        })
        const data = await response.json();
        button.disabled = false;

        switch (data.msg) {
            case "user has been created succcessfully":
                toast.success(data.msg , { position:"bottom-center" , id:"auth" });
                break;
            case "error while signing up":
                toast.error(data.msg , { position:"bottom-center" , id:"auth" });
                break;
            case "user with the given email already exists":
                toast.error(data.msg , { position:"bottom-center" , id:"auth" });
                break;
            default:
                break;
        }
    } catch (err) {
        console.error(err);
    }
}