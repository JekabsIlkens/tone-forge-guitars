import { useForm, usePage } from "@inertiajs/react";

export default function UpdatePasswordForm() {
    const { auth } = usePage().props;
    const { data, setData, patch, errors, processing } = useForm({
        email: auth.user.email,
        current_password: "",
        new_password: "",
    });

    function updatePassword(e) {
        e.preventDefault();
        patch("/password");
    }

    return (
        <>
            <h1 className="title">Change password</h1>

            <div className="mx-auto">
                <form onSubmit={updatePassword}>
                    <label htmlFor="current_password">Current password</label>
                    <input
                        id="current_password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("current_password", e.target.value)}>
                    </input>
                    <div className="warning">{errors.current_password}</div>
                    <div className="warning">{errors.error}</div>

                    <label htmlFor="new_password">New password</label>
                    <input
                        id="new_password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("new_password", e.target.value)}>
                    </input>
                    <div className="warning">{errors.new_password}</div>

                    <button className="primary-btn mt-4" disabled={processing}>
                        Change
                    </button>
                </form>
            </div>
        </>
    )
}