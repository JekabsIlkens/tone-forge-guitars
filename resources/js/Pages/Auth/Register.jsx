import { useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, errors, processing } = useForm({
        full_name: "",
        email: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/register");
    }

    return (
        <>
            <h1 className="title">Register</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <label>Full name</label>
                    <input
                        type="text"
                        value={data.full_name}
                        onChange={(e) => setData("full_name", e.target.value)}>
                    </input>
                    <div className="warning">{errors.full_name}</div>

                    <label>Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}>
                    </input>
                    <div className="warning">{errors.email}</div>

                    <label>Password</label>
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}>
                    </input>
                    <div className="warning">{errors.password}</div>

                    <button className="primary-btn mt-4" disabled={processing}>
                        Register
                    </button>
                </form>
            </div>
        </>
    );
}
