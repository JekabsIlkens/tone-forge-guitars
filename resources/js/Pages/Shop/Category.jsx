import ProductCard from "./Partials/ProductCard";

export default function Category({ category, products }) {
    return (
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        category_id={category.id}
                        product_id={product.id}
                        product_image={product.image_url}
                        product_name={product.name}
                        product_price={product.price / 100}
                        product_stock={product.stock}
                    />
                ))}
            </div>
        </div>
    );
}