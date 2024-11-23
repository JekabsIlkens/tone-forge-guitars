import { useForm, usePage } from "@inertiajs/react";
import InputField from "../../../Components/InputField";

export default function LoginForm() {
    const { routes } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    function loginUser(e) {
        e.preventDefault();
        post(routes.login.store);
    }

    function handleChange(field) {
        return (e) => setData(field, e.target.value);
    }

    return (
        <>
            <form onSubmit={loginUser}>
                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={handleChange("email")}
                    error={errors.email}
                    disabled={processing}
                />
                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    value={data.password}
                    onChange={handleChange("password")}
                    error={errors.password}
                    disabled={processing}
                />
                <div className="warning">{errors.error}</div>
                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Login"}
                </button>
            </form>
        </>
    );
}
