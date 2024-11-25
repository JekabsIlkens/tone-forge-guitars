import { useForm, usePage } from "@inertiajs/react";
import InputField from "../../../Components/InputField";

export default function UpdateInfoForm() {
    const { auth, routes } = usePage().props;
    const { data, setData, patch, errors, processing } = useForm({
        full_name: auth.user.full_name,
        email: auth.user.email,
    });

    function updateInfo(e) {
        e.preventDefault();
        patch(routes.profile.update, {
            preserveScroll: true,
        });
    }

    function handleChange(field) {
        return (e) => setData(field, e.target.value);
    }

    return (
        <>
            <form onSubmit={updateInfo}>
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
                
                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Update"}
                </button>
            </form>
        </>
    );
}