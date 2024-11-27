import CartItemCard from "../../Components/CartItemCard";
import CheckoutForm from './Partials/CheckoutForm';

export default function Index({ cartItems }) {
    const calculateTotal = () =>
        cartItems.reduce((sum, item) => sum + item.product.price / 100 * item.quantity, 0);

    return (
        <>
            <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                <div className="bg-base_light p-4 rounded-sm">
                    <h1 className='title'>Cart Contents</h1>

                    <div className="mx-auto">

                        {cartItems.length ? (
                            <>
                                {cartItems.map((item) => (
                                    <CartItemCard 
                                        key={item.id}
                                        id={item.id}
                                        name={item.product.name} 
                                        image={item.product.image_url} 
                                        price={item.product.price / 100} 
                                        quantity={item.quantity}
                                    />
                                ))}

                                <h2 className='title text-start text-gray'>
                                    <span className='text-base_primary'>Total:</span> {calculateTotal()}&#8364;
                                </h2>

                                <CheckoutForm />
                            </>
                        ):(
                            <>
                                <div className='bg-white my-4 p-2 text-center rounded-sm shadow-md shadow-base_secondary'>
                                    <p className="text-center my-4 text-xl font-semibold text-warning-500">
                                        Your cart is empty...
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
