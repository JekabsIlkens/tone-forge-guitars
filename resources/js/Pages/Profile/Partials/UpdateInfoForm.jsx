import { useForm, usePage } from "@inertiajs/react";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateInfoForm() {
    const { auth } = usePage().props;
    const { data, setData, patch, errors, processing } = useForm({
        full_name: auth.user.full_name,
        email: auth.user.email,
    });

    function updateInfo(e) {
        e.preventDefault();
        patch("/profile");
    }

    return (
        <>
            <h1 className="title">Update profile</h1>

            <div className="mx-auto">
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
                        {processing ? "Processing..." : "Save"}
                    </button>
                </form>
            </div>
        </>
    )
}