import "react-toastify/dist/ReactToastify.css";
import UpdateInfoForm from './Partials/UpdateInfoForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';

import { usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function Edit() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [flash.success]);

    return (
        <>
            <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                <div className="bg-base_light p-4 rounded-sm">
                    <h1 className="title">Update profile</h1>

                    <div className="mx-auto">
                        <UpdateInfoForm />
                    </div>
                </div>
            </div>

            <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-800">
                <div className="bg-base_light p-4 rounded-sm">
                    <h1 className="title">Change Password</h1>

                    <div className="mx-auto">
                        <UpdatePasswordForm />
                    </div>
                </div>
            </div>

            <div className="max-w-lg w-full mx-auto mt-8 mb-4 shadow-lg shadow-secondary-800">
                <div className="bg-base_light p-4 rounded-sm">
                    <h1 className="title">Delete account</h1>

                    <p className="text-center text-warning-500"> 
                        Don't worry, all your pending orders will still be delivered!
                    </p>

                    <div className="mx-auto">
                        <DeleteUserForm />
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}
