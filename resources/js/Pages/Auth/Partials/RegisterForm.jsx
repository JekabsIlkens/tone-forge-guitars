import { useForm, usePage } from "@inertiajs/react";

export default function RegisterForm() {
    const { routes } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        full_name: "",
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post(routes.register.store);
    }

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="full_name">Full name</label>
                    <input
                        id="full_name"
                        type="text"
                        value={data.full_name}
                        onChange={(e) => setData("full_name", e.target.value)}
                        disabled={processing}
                    />
                    <div className="warning">{errors.full_name}</div>
                </div>

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
                </div>
                
                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Register"}
                </button>
            </form>
        </>
    );
}
