import { useForm } from '@inertiajs/react';
import InputField from "../../../Components/InputField";

export default function AddToCartForm({id, stock}) {
    const { data, setData, post, errors, processing } = useForm({
        product_id: id,
        quantity: 1,
    });

    function handleAddToCart(e) {
        e.preventDefault();
        post('/cart/add');
    };

    function handleChange(field) {
        return (e) => setData(field, e.target.value);
    }

    return (
        <>
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
                <div className="warning">{errors.error}</div>

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
        </>
    );
}