import UpdateShippingDetailsForm from './Partials/UpdateShippingDetailsForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';

export default function Edit({address}) {
    return (
        <>
            <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                <div className="bg-base_light p-4 rounded-sm">
                    <h1 className="title">Update Shipping Details</h1>

                    <div className="mx-auto">
                        <UpdateShippingDetailsForm address={address} />
                    </div>
                </div>
            </div>

            <div className='flex space-x-4'>
                <div className="max-w-lg w-full h-auto mx-auto mt-8 mb-4 p-4 rounded-sm bg-base_light shadow-lg shadow-secondary-800">
                    <h1 className="title">Change Password</h1>

                    <div className="mx-auto">
                        <UpdatePasswordForm />
                    </div>
                </div>

                <div className="max-w-lg w-full h-auto mx-auto mt-8 mb-4 p-4 rounded-sm bg-base_light shadow-lg shadow-secondary-800">
                    <h1 className="title">Delete Account</h1>

                    <p className="text-center text-warning-500"> 
                        All data and resources linked to your account will be permanently erased.
                        Don't worry, all your pending orders will still be delivered!
                    </p>

                    <div className="mx-auto">
                        <DeleteUserForm />
                    </div>
                </div>
            </div>
        </>
    );
}
