import UpdateInfoForm from './Partials/UpdateInfoForm';
import DeleteUserForm from './Partials/DeleteUserForm';

export default function Edit() 
{
    return (
        <>
            <div className="w-3/4 mx-auto mt-8">
                <div className="bg-secondary-900 p-4 rounded-md">
                    <UpdateInfoForm />
                </div>
            </div>

            <div className="w-3/4 mx-auto mt-8">
                <div className="bg-secondary-900 p-4 rounded-md">
                    <DeleteUserForm />
                </div>
            </div>
        </>
    )
}
