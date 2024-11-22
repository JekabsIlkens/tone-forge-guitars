import { useForm, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function Login() {
    const { flash } = usePage().props;
    console.log(usePage().props);
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [flash.success]);

    function submit(e) {
        e.preventDefault();
        post("/login");
    }

    return (
        <>
            <h1 className="title">Login</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            disabled={processing}
                        />
                        <div className="warning">{errors.email}</div>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            disabled={processing}
                        />
                        <div className="warning">{errors.password}</div>
                        <div className="warning">{errors.error}</div>
                    </div>
                    <button className="primary-btn mt-4" disabled={processing}>
                        {processing ? "Processing..." : "Login"}
                    </button>
                </form>
                <ToastContainer />
            </div>
        </>
    );
}
