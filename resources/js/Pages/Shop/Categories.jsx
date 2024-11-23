import { Link, usePage } from "@inertiajs/react";

export default function Categories() {
    const { routes } = usePage().props;

    return (
        <>
            <h1 className="title">Available Categories</h1>

            <div className="flex space-x-8">
                <Link className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700" href={routes.shop.index}>
                    <div className="bg-acoustic bg-cover bg-center p-4 content-start rounded-sm h-96 hover:bg-acoustic_active">
                        <p className="text-center rounded-sm text-3xl font-bold leading-9 text-base_light bg-base_primary">ACOUSTIC</p>
                    </div>
                </Link>

                <Link className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700" href={routes.shop.index}>
                    <div className="bg-electric bg-cover bg-center p-4 rounded-sm h-96 hover:bg-electric_active">
                        <p className="text-center rounded-sm text-3xl font-bold leading-9 text-base_light bg-base_primary">ELECTRIC</p>
                    </div>
                </Link>

                <Link className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700" href={routes.shop.index}>
                    <div className="bg-bass bg-cover bg-center p-4 rounded-sm h-96 hover:bg-bass_active">
                        <p className="text-center rounded-sm text-3xl font-bold leading-9 text-base_light bg-base_primary">BASS</p>
                    </div>
                </Link>
            </div>
        </>
    );
}