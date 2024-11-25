import { useForm, usePage } from "@inertiajs/react";

export default function CheckoutForm() {
    const { csrf_token: csrfToken } = usePage().props;
    const { post, processing } = useForm();

    function stripeCheckout(e) {
        e.preventDefault();
        post('/stripe');
    }

    return (
        <>
            <form onSubmit={stripeCheckout}>
                <input type="hidden" name="_token" value={csrfToken} />

                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Proceed to Checkout"}
                </button>
            </form>
        </>
    );
}