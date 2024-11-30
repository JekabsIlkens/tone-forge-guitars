import UpdateShippingDetailsForm from './Partials/UpdateShippingDetailsForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';

export default function Edit({ address }) {
    return (
        <div className='flex justify-center space-x-4'>
            <div className="min-h-full sm:w-full sm:max-w-sm px-10 py-10 lg:px-8 content-card">
                <h1 className="mb-4 text-center text-2xl/9 font-bold tracking-tight text-gray">
                    Update Shipping Details
                </h1>

                <UpdateShippingDetailsForm address={address} />
            </div>

            <div className='grid grid-cols-1 gap-4 content-between'>
                <div className="h-auto sm:w-full sm:max-w-sm px-10 py-10 lg:px-8 content-card">
                    <h1 className="mb-4 text-center text-2xl/9 font-bold tracking-tight text-gray">
                        Change Password
                    </h1>

                    <UpdatePasswordForm />
                </div>

                <div className="h-auto sm:w-full sm:max-w-sm px-10 py-10 lg:px-8 content-card">
                    <h1 className="mb-4 text-center text-2xl/9 font-bold tracking-tight text-gray">
                        Delete Account
                    </h1>

                    <p className="text-center text-md font-medium text-warning-500">
                        All data and resources linked to your account will be permanently erased.
                        Don't worry, all your pending orders will still be delivered!
                    </p>

                    <DeleteUserForm />
                </div>
            </div>
        </div>
    );
}
