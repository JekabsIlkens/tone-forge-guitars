import { Link } from "@inertiajs/react";

export default function ProductCard({ category_id, product_id, product_image, product_name, product_price }) {
    return (
        <>
            <div className="bg-white p-4 rounded-sm h-96 content-between">
                <img className="rounded-sm my-4" src={product_image}></img>

                <p className="text-center my-4 text-sm font-semibold text-gray">
                    {product_name}
                </p>

                <p className="text-center my-4 text-md font-semibold text-gray">
                    {product_price}&#8364;
                </p>

                <Link className="primary-btn mt-4" href={`/shop/${category_id}/${product_id}`}>
                    View
                </Link>
            </div>
        </>
    );
}
