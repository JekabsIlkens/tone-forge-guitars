import FormHeader from './Partials/FormHeader';
import LoginForm from './Partials/LoginForm';
import { Link, usePage } from "@inertiajs/react";

export default function Login() {
    const { routes } = usePage().props;

    return (
        <>
            <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8 content-card">
                <FormHeader header="Log in to your account" />

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />

                    <p className="mt-4 text-center text-sm/6">
                        <Link href={routes.register.create} className="text-link">
                            Create a new account!
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
