import InputField from "../../../Components/InputField";

import { useForm, usePage } from '@inertiajs/react';
import { useFormHandler } from "../../../Hooks/useFormHandler";

export default function AddToCartForm({ id, stock }) {
    const { routes } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        product_id: id,
        quantity: 1,
    });

    const handleChange = useFormHandler(setData);

    function handleAddToCart(e) {
        e.preventDefault();
        post(routes.cart.store);
    };

    return (
        <form onSubmit={handleAddToCart}>
            <InputField
                id="quantity"
                label="Quantity"
                type="number"
                value={data.quantity}
                onChange={handleChange("quantity")}
                error={errors.quantity}
                disabled={processing}
            />
            <div className="warning-text">{errors.error}</div>

            {stock ? (
                <button className="primary-btn mt-4" disabled={processing}>
                    {processing ? "Processing..." : "Add to cart"}
                </button>
            ) : (
                <button className="disabled-btn mt-4" disabled={processing}>
                    Out of stock
                </button>
            )}
        </form>
    );
}