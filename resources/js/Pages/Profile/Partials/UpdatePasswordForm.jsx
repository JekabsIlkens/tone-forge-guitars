import "react-toastify/dist/ReactToastify.css";
import { useForm, usePage } from "@inertiajs/react";

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

    return (
        <>
            <form onSubmit={updatePassword}>
                <div>
                    <label htmlFor="current_password">Current Password</label>
                    <input
                        id="current_password"
                        type="password"
                        value={data.current_password}
                        onChange={(e) => setData("current_password", e.target.value)}
                        disabled={processing}
                    />
                    <div className="warning">{errors.current_password}</div>
                    <div className="warning">{errors.error}</div>
                </div>

                <div>
                    <label htmlFor="new_password">New Password</label>
                    <input
                        id="new_password"
                        type="password"
                        value={data.new_password}
                        onChange={(e) => setData("new_password", e.target.value)}
                        disabled={processing}
                    />
                    <div className="warning">{errors.new_password}</div>
                </div>

                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Change"}
                </button>
            </form>
        </>
    );
}