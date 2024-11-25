import { useForm, usePage } from "@inertiajs/react";
import InputField from "../../../Components/InputField";

export default function RegisterForm() {
    const { routes } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        full_name: "",
        email: "",
        password: "",
    });

    function registerUser(e) {
        e.preventDefault();
        post(routes.register.store);
    }

    function handleChange(field) {
        return (e) => setData(field, e.target.value);
    }

    return (
        <>
            <form onSubmit={registerUser}>
                <InputField
                    id="full_name"
                    label="Full Name"
                    type="text"
                    value={data.full_name}
                    onChange={handleChange("full_name")}
                    error={errors.full_name}
                    disabled={processing}
                />

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
                    
                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Register"}
                </button>
            </form>
        </>
    );
}
