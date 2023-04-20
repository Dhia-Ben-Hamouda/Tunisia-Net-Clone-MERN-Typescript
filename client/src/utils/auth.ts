async function authenticate(e: React.FormEvent) {
    try {
        e.preventDefault();

        toast.loading("signing in...", { id: "auth", position: "bottom-center" });
        await new Promise(r => setTimeout(r, 500));

        const response = await fetch(`${url}/auth/signIn`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();

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
                toast.success(`welcome back ${data.name}`, { id: "auth", position: "bottom-center", duration: 4000 });
                navigate("/");
                break;
        }

    } catch (err) {
        console.error(err);
    }
}

async function register(e: React.FormEvent) {
    try {
        e.preventDefault();

        const response = await fetch(`${url}/auth/signUp`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone,
                picture,
                email,
                password
            })
        })
        const data = await response.json();

        switch (data.msg) {
            case "user has been created succcessfully":
                toast.success(data.msg);
                break;
            case "error while signing up":
                toast.error(data.msg);
                break;
            default:
                break;
        }
    } catch (err) {
        console.error(err);
    }
}