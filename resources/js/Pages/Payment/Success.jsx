import { Link, usePage } from "@inertiajs/react";

export default function Success() {
    const { routes } = usePage().props;

    return (
        <div className="max-w-lg w-full mx-auto mt-10 p-10 content-card">
            <h1 className="my-4 text-center text-5xl font-bold leading-9 text-base_primary">
                THANK YOU!
            </h1>

            <div className="mx-auto">
                <p className="text-center mt-8 text-1xl font-semibold text-gray">
                    Your order is being processed and will be shipped to you shortly.
                    You'll receive a tracking number once your items are on their way.
                </p>

                <p className="text-center mt-4 text-1xl font-semibold text-gray">
                    If you have any questions about your order or need assistance, please don't hesitate to contact us at
                    <span className="text-base_primary"> support@toneforge.com</span>
                </p>

                <Link className="primary-btn mt-8" href={routes.profile.edit}>
                    View order status
                </Link>

                <p className="text-center mt-8 text-base font-semibold text-base_primary">
                    <span className="text-gray">Warm regards,</span> The Tone Forge Team
                </p>
            </div>

            <img className="mx-auto px-2 py-1 h-12" src="/images/logo-small.png" alt="TONE FORGE GUITARS" />
        </div>
    );
}