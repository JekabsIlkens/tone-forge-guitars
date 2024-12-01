import { Link } from "@inertiajs/react";

export default function CategoryCard({ id, name }) {
    return (
        <div className="group relative p-4 content-card">
            <img src={`/images/${name}.jpg`} className="w-full content-card saturate-0 group-hover:saturate-100" />

            <div className="mt-4">
                <div className="grid grid-cols-1 gap-4 w-full">
                    <h3 className="text-center text-xl font-bold text-gray">
                        <Link href={`/categories/${id}`}>
                            <span className="absolute inset-0"></span>
                            {name}
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}
