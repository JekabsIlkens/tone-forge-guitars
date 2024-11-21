import UpdateInfoForm from './Partials/UpdateInfoForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';

export default function Edit() {
    return (
        <>
            <div className='flex'>
                <div className="w-1/2 mt-8 mr-4">
                    <div className="bg-secondary-900 p-4 rounded-md">
                        <UpdateInfoForm />
                    </div>
                </div>

                <div className="w-1/2 mt-8 ml-4">
                    <div className="bg-secondary-900 p-4 rounded-md">
                        <UpdatePasswordForm />
                    </div>
                </div>
            </div>

            <div className="w-auto mx-auto mt-8">
                <div className="bg-secondary-900 p-4 rounded-md">
                    <DeleteUserForm />
                </div>
            </div>
        </>
    )
}
