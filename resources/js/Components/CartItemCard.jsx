import { Link } from "@inertiajs/react";

export default function CartItemCard({ id, name, image, price, quantity }) {
    return (
        <>
            <div className='flex bg-white my-4 p-2 rounded-sm shadow-md shadow-base_secondary'>
                <img className='w-24 h-24 mr-4' src={image}></img>

                <div>
                    <p className='text-start text-1xl font-bold text-gray'>
                        {name}
                    </p>

                    <p className='text-start text-base font-medium text-gray'>
                        <span className='font-medium text-base_primary'>Price:</span> {price}&#8364;
                    </p>

                    <p className='text-start text-base font-medium text-gray'>
                        <span className='font-medium text-base_primary'>Quantity:</span> {quantity}
                    </p>

                    <Link className="font-semibold text-warning-400" href={`/cart/remove/${id}`} method="delete">
                        Remove
                    </Link>
                </div>
            </div>
        </>
    );
}