import InputField from "../../../Components/InputField";

import { useForm, usePage } from "@inertiajs/react";
import { useFormHandler } from "../../../Hooks/useFormHandler";

export default function LoginForm() {
    const { routes } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    const handleChange = useFormHandler(setData);

    function loginUser(e) {
        e.preventDefault();
        post(routes.login.store);
    }

    return (
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

            <div className="warning-text">{errors.error}</div>

            <button disabled={processing} className="primary-btn">
                {processing ? "Processing..." : "Login"}
            </button>
        </form>
    );
}
