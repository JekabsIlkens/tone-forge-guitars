import FormHeader from './Partials/FormHeader';
import RegisterForm from './Partials/RegisterForm';

import { Link, usePage } from "@inertiajs/react";

export default function Register() {
    const { routes } = usePage().props;

    return (
        <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8 content-card">
            <FormHeader titleText="Create a new account" />

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <RegisterForm />

                <p className="mt-4 text-center text-sm/6">
                    <Link href={routes.login.create} className="text-link">
                        Already have an account?
                    </Link>
                </p>
            </div>
        </div>
    );
}
