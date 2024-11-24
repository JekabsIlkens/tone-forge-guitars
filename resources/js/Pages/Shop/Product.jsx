import { useForm } from '@inertiajs/react';
import InputField from "../../Components/InputField";

export default function Product({product}) {
    const { data, setData, post, errors, processing } = useForm({
        product_id: product.id,
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
            <h1 className="title">Specific Guitar</h1>

            <div className="flex space-x-8">
                <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                    <div className="flex justify-center bg-white rounded-sm h-96">
                        <img className="p-4" src={product.image_url}></img>
                    </div>
                </div>

                <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                    <div className="bg-base_light p-8 rounded-sm h-96">
                        <p className="text-start text-2xl font-bold text-gray">
                            {product.name}
                        </p>
                        <p className="text-start text-md font-medium my-4 text-gray">
                            {product.description}
                        </p>
                        <div className="flex justify-between my-4">
                            <p className="text-2xl font-semibold text-base_primary">
                                {product.price / 100}&#8364;
                            </p>
                            <p className="text-1xl font-semibold text-gray">
                               <span className="font-semibold text-base_primary">Stock:</span> {product.stock}
                            </p>
                        </div>

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

                            {product.stock ? (
                                <button className="primary-btn mt-4" disabled={processing}>
                                    {processing ? "Processing..." : "Add to cart"}
                                </button>
                            ):(
                                <button className="disabled-btn mt-4" disabled={processing}>
                                    Out of stock
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}