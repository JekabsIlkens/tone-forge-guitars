import { Link, usePage } from '@inertiajs/react';
import AddToCartForm from './Partials/AddToCartForm';

export default function Product({product}) {
    const { routes } = usePage().props;
    
    return (
        <>
            <h1 className="title shadow-lg shadow-secondary-700">Specific Guitar</h1>

            <div className='px-4 text-start text-base font-semibold leading-9 text-gray rounded-sm bg-base_light shadow-lg shadow-secondary-700'>
                <Link href={routes.back}>
                    <span className='text-2xl'>&larr;</span> Back
                </Link>
            </div>

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

                        <AddToCartForm 
                            id={product.id}
                            stock={product.stock}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}