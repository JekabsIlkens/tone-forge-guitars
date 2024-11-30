import { Link } from "@inertiajs/react";

export default function ProductCard({ category_id, product_id, product_image, product_name, product_price, product_stock }) {
    return (
        <div className="group relative p-4 content-card">
            <img src={product_image} className="w-full p-2 content-card bg-white group-hover:opacity-75" />

            <div className="mt-4">
                <div className="grid grid-cols-1 gap-4 w-full">
                    <h3 className="text-center text-sm font-semibold text-gray">
                        <Link href={`/shop/${category_id}/${product_id}`}>
                            <span className="absolute inset-0"></span>
                            {product_name}
                        </Link>
                    </h3>

                    <div className="flex justify-between w-full">
                        <p className="text-base font-semibold text-gray">{product_price}&#8364;</p>

                        {product_stock > 0 ? (
                            <p className="text-sm font-medium text-base_primary">In stock</p>
                        ) : (
                            <p className="text-sm font-medium text-warning-500">Out of stock</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
