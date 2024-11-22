import { useForm } from "@inertiajs/react";

export default function DeleteUserForm() {
    const { delete: destroy } = useForm();

    function deleteUser(e) {
        e.preventDefault();
        destroy("/profile");
    }

    return (
        <>
            <form onSubmit={deleteUser}>
                <button className="danger-btn mt-4">
                    Delete
                </button>
            </form>
        </>
    )
}