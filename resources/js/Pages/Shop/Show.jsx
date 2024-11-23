export default function Show() {
    return (
        <>
            <h1 className="title">Specific Guitar</h1>

            <div className="flex space-x-8">
                <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                    <div className="flex justify-center bg-white rounded-sm h-96">
                        <img className="p-4" src="https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/Valencia/VC201TBU_Valencia-1000x1000.jpg"></img>
                    </div>
                </div>

                <div className="max-w-lg w-full mx-auto mt-8 shadow-lg shadow-secondary-700">
                    <div className="bg-base_light p-8 rounded-sm h-96">
                        <p className="text-start text-2xl font-bold text-gray">
                            Classical guitar Valencia VC201TBU
                        </p>
                        <p className="text-start text-md font-medium my-4 text-gray">
                            The Alhambra 3C is simply an amazing guitar. It is elegantly crafted with a thin body, 
                            has a magnificent tone, is very loud, and its playability is beyond belief.
                        </p>
                        <div className="flex justify-between my-4">
                            <p className="text-2xl font-semibold text-base_primary">
                                69.00&#8364;
                            </p>
                            <p className="text-1xl font-semibold text-gray">
                               <span className="font-semibold text-base_primary">Stock:</span> 2
                            </p>
                        </div>
                        <button className="primary-btn mb-4">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}