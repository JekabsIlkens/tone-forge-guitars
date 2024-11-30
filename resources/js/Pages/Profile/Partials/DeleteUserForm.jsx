import { useForm, usePage } from "@inertiajs/react";

export default function DeleteUserForm() {
    const { routes } = usePage().props;
    const { delete: destroy } = useForm();

    function deleteUser(e) {
        e.preventDefault();
        destroy(routes.profile.destroy);
    }

    return (
        <form onSubmit={deleteUser}>
            <button className="danger-btn mt-4">
                Delete
            </button>
        </form>
    )
}