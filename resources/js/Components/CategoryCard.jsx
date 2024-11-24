import { Link } from "@inertiajs/react";

export default function CategoryCard({ id, name }) {

    function buildCardClass(name) {
        let base = "p-4 content-start rounded-sm h-96 bg-cover bg-center";
        return base.concat(" bg-", name, " hover:bg-", name, "_active");
    }

    return (
        <Link className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700" href={`/shop/${id}`}>
            <div className={buildCardClass(name)}>
                <p className="text-center rounded-sm text-3xl capitalize font-bold leading-9 text-base_light bg-base_primary">
                    {name}
                </p>
            </div>
        </Link>
    );
}
