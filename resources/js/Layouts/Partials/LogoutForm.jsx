import { usePage, useForm } from "@inertiajs/react";

export default function LogoutForm() {
    const { routes } = usePage().props;
    const { post } = useForm();

    function logoutUser(e) {
        e.preventDefault();
        post(routes.logout);
    }

    return (
        <form onSubmit={logoutUser}>
            <button className="nav-link-inactive">
                Logout
            </button>
        </form>
    );
}