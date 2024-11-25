import { useForm, usePage } from "@inertiajs/react";
import InputField from "../../../Components/InputField";

export default function UpdatePasswordForm() {
    const { auth, routes } = usePage().props;
    const { data, setData, patch, errors, processing, reset } = useForm({
        email: auth.user.email,
        current_password: "",
        new_password: "",
    });
    
    function updatePassword(e) {
        e.preventDefault();
        patch(routes.password.update, {
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    }

    function handleChange(field) {
        return (e) => setData(field, e.target.value);
    }

    return (
        <>
            <form onSubmit={updatePassword}>
                <InputField
                    id="current_password"
                    label="Current Password"
                    type="password"
                    value={data.current_password}
                    onChange={handleChange("current_password")}
                    error={errors.current_password}
                    disabled={processing}
                />
                <div className="warning">{errors.error}</div>
                <InputField
                    id="new_password"
                    label="New Password"
                    type="password"
                    value={data.new_password}
                    onChange={handleChange("new_password")}
                    error={errors.new_password}
                    disabled={processing}
                />
                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Change"}
                </button>
            </form>
        </>
    );
}