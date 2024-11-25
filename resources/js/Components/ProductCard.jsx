import { Link } from "@inertiajs/react";

export default function ProductCard({ category_id, product_id, product_image, product_name, product_price, product_stock }) {
    return (
        <>
            <div className="bg-white p-2 rounded-sm h-auto content-between shadow-lg shadow-secondary-700">
                <img className="rounded-sm my-4" src={product_image}></img>

                <p className="text-center my-4 text-sm font-semibold text-gray">
                    {product_name}
                </p>

                <div className="flex justify-between">
                    <p className="mt-4 mb-2 ml-2 text-md font-semibold text-gray">
                        {product_price}&#8364;
                    </p>

                    {product_stock > 0 ? (
                        <p className="mt-4 mb-2 mr-2 text-sm font-semibold text-base_primary">
                            In stock
                        </p>
                    ):(
                        <p className="mt-4 mb-2 mr-2 text-sm font-semibold text-warning-500">
                            Out of stock
                        </p>
                    )}
                </div>

                <Link className="primary-btn" href={`/shop/${category_id}/${product_id}`}>
                    View
                </Link>
            </div>
        </>
    );
}
