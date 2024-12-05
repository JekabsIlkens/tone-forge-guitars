import { useForm } from "@inertiajs/react";

export default function CartItemCard({ id, name, image, price, quantity }) {
    const { delete: destroy } = useForm();

    function deleteCartItem(e) {
        e.preventDefault();
        destroy(`/cart/${id}`);
    }

    return (
        <div className='flex justify-between my-4 p-2 bg-white rounded-sm border border-light_gray shadow-md shadow-light_gray'>
            <img className='w-24 h-24 mr-2' src={image}></img>

            <div className="grow mr-2">
                <p className='text-start text-lg font-bold text-gray'>
                    {name}
                </p>

                <p className='text-start text-lg font-semibold text-gray'>
                    Price: {price / 100}&#8364;
                </p>
                
                <p className='text-start text-base font-medium text-gray'>
                    Qty: {quantity}
                </p>
            </div>

            <form onSubmit={deleteCartItem}>
                <button className="p-1 rounded-sm bg-warning-500 hover:bg-warning-600">
                    <img className='w-4 h-4' src="/images/trash.png"></img>
                </button>
            </form>
        </div>
    );
}