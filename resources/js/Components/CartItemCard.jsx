import { useForm } from "@inertiajs/react";

export default function CartItemCard({ id, name, image, price, quantity }) {
    const { delete: destroy } = useForm();

    function deleteCartItem(e) {
        e.preventDefault();
        destroy(`/cart/remove/${id}`);
    }

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

                    <form onSubmit={deleteCartItem}>
                        <button className="danger-btn mt-1 w-auto px-2 py-0 font-medium">
                            Remove
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}