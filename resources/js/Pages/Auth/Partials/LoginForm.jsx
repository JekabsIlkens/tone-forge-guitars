import { useForm, usePage } from "@inertiajs/react";

export default function LoginForm() {
    const { routes } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post(routes.login.store);
    }

    return (
        <>
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
        </>
    );
}
