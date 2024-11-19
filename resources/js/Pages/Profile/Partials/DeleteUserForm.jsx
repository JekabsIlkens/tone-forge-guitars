import { useForm, usePage } from "@inertiajs/react";

export default function DeleteUserForm() 
{
    const { auth } = usePage().props;
    const { delete: destroy } = useForm({
        id: auth.user.id,
    });

    function deleteUser(e){
        e.preventDefault();
        destroy("/profile");
    }

    return (
        <>
            <h1 className="title">Delete your account</h1>

            <p className="text-center text-warning-500">
                Once your account is deleted, all of its resources and data
                will be permanently deleted.
            </p>

            <div className="mx-auto">
                <form onSubmit={deleteUser}>
                    <button className="danger-btn mt-4">
                        Delete
                    </button>
                </form>
            </div>
        </>
    )
}