import "react-toastify/dist/ReactToastify.css";
import { useForm, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import CartItemCard from "../../Components/CartItemCard";

export default function Index({ cartItems }) {
    const { csrf_token: csrfToken, routes, flash } = usePage().props;
    const { post, processing } = useForm();

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        if (flash?.error) {
            toast.error(flash.error, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [flash.success], [flash.error]);

    function stripeCheckout(e) {
        e.preventDefault();
        post('/stripe');
    }

    const calculateTotal = () =>
        cartItems.reduce((sum, item) => sum + item.product.price / 100 * item.quantity, 0);

    return (
        <>
            <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                <div className="bg-base_light p-4 rounded-sm">
                    <h1 className='title'>Cart Contents</h1>

                    <div className="mx-auto">

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

                        <form onSubmit={stripeCheckout}>
                            <input type="hidden" name="_token" value={csrfToken} />

                            <button className="primary-btn mt-4" disabled={processing}>
                                {processing ? "Processing..." : "Proceed to Checkout"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}
