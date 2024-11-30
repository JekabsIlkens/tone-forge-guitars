import AddToCartForm from './Partials/AddToCartForm';

export default function Product({ product }) {
    return (
        <div className="flex flex-row justify-center min-h-full px-6 py-12 lg:px-8">
            <div className="max-w-lg w-full mx-auto mt-8 content-card">
                <div className="flex justify-center h-96 rounded-sm bg-white">
                    <img src={product.image_url} className="p-4" />
                </div>
            </div>

            <div className="max-w-lg w-full mx-auto mt-8 content-card">
                <div className="h-96 p-8">
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

                    <AddToCartForm
                        id={product.id}
                        stock={product.stock}
                    />
                </div>
            </div>
        </div>
    );
}