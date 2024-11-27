import { Link, usePage } from '@inertiajs/react';
import ProductCard from "../../Components/ProductCard";

export default function Category({ category, products }) {
    const { routes } = usePage().props;

    return (
        <>
            <h1 className="title shadow-lg shadow-secondary-700">All Guitars</h1>

            <div className='px-4 text-start text-base font-semibold leading-9 text-gray rounded-sm bg-base_light shadow-lg shadow-secondary-700'>
                <Link href={routes.shop.category.index}>
                    <span className='text-2xl'>&larr;</span> Back
                </Link>
            </div>

            <div className="grid grid-cols-4 gap-8 mt-12">
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
        </>
    );
}