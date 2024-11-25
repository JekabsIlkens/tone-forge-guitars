import LoginForm from './Partials/LoginForm';

export default function Login() {
    return (
        <>
            <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                <div className="bg-base_light p-4 rounded-sm">
                    <h1 className="title">Login</h1>

                    <div className="mx-auto">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}
