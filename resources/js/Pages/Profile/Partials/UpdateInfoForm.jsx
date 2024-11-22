import "react-toastify/dist/ReactToastify.css";
import { useForm, usePage } from "@inertiajs/react";

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

    return (
        <>
            <form onSubmit={updateInfo}>
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

                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Update"}
                </button>
            </form>
        </>
    );
}