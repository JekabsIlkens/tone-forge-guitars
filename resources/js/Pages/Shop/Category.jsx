import ProductCard from "../../Components/ProductCard";

export default function Category({ category, products }) {
    return (
        <>
            <h1 className="title">All Guitars</h1>

            <div className="grid grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        category_id={category.id}
                        product_id={product.id} 
                        product_image={product.image_url} 
                        product_name={product.name}  
                        product_price={product.price / 100}
                    />
                ))}
            </div>
        </>
    );
}