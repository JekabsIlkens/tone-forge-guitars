import CardBase from "../Components/CardBase";
import { Link, usePage } from "@inertiajs/react";

export default function Home() {
    const { routes } = usePage().props;

    return (
        <>
            <CardBase>
                <div className="max-w-lg w-full mx-auto px-4 py-4">
                    <div className="h-auto">
                        <h1 className="title bg-white">WELCOME</h1>
                    </div>

                    <p className="text-center text-md font-medium my-4 text-gray">
                        Explore our range of <span className="font-bold text-base_primary">acoustic, electric, and bass guitars</span>,
                        featuring top brands and exceptional craftsmanship.
                        From timeless classics to the latest innovations, we've got you covered.
                    </p>

                    <p className="text-center text-md font-bold mt-4 text-gray">
                        - High-quality instruments for every budget -
                    </p>
                    <p className="text-center text-md font-bold my-2 text-gray">
                        - Expert advice from fellow musicians -
                    </p>
                    <p className="text-center text-md font-bold mb-4 text-gray">
                        - Competitive prices and exclusive deals -
                    </p>

                    <p className="text-center text-md font-medium my-4 text-base_primary">
                        Let's make your musical journey unforgettable!
                    </p>

                    <Link className="primary-btn" href={routes.shop.category.index}>Shop now</Link>
                </div>
            </CardBase>
        </>
    );
}
