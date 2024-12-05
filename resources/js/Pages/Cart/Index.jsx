import FormHeader from "../../Components/FormHeader";
import CartItemCard from "./Partials/CartItemCard";
import CheckoutForm from './Partials/CheckoutForm';

export default function Index({ cartItems }) {
    const calculateTotal = () =>
        cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <>
            <div className="max-w-lg w-full mx-auto p-4 content-card">
                <FormHeader titleText="Your shopping cart" />

                <div className="mx-auto">
                    {cartItems.length ? (
                        <>
                            <div className="h-96 overflow-auto mb-4">
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
                            </div>

                            <h2 className='text-start text-2xl font-bold text-base_primary'>
                                Subtotal: <span className="font-semibold text-gray">{calculateTotal() / 100}&#8364;</span>
                            </h2>

                            <CheckoutForm />
                        </>
                    ) : (
                        <>
                            <div className='flex justify-between my-4 p-2 bg-white rounded-sm border border-light_gray shadow-md shadow-light_gray'>
                                <p className="text-start text-2xl font-bold text-gray">
                                    Your cart is empty...
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
