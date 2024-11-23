import { Link, usePage } from "@inertiajs/react";

export default function Index() {
    const { routes } = usePage().props;

    return (
        <>
            <h1 className="title">All Guitars</h1>

            <div className="grid grid-cols-4 gap-8">
                <div className="bg-white p-4 rounded-sm h-96 content-between">
                    <img className="rounded-sm my-4" src="https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/Valencia/VC201TBU_Valencia-1000x1000.jpg"></img>

                    <p className="text-center my-4 text-sm font-semibold text-gray">
                        1/4 Classical guitar Valencia VC201TBU
                    </p>

                    <p className="text-center my-4 text-md font-semibold text-gray">69.00&#8364;</p>

                    <Link className="primary-btn mt-4" href={routes.shop.show}>View</Link>
                </div>

                <div className="bg-white p-4 rounded-sm h-96 content-between">
                    <img className="rounded-sm my-4" src="https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/Valencia/VC201TBU_Valencia-1000x1000.jpg"></img>
                    
                    <p className="text-center my-4 text-sm font-semibold text-gray">
                        1/4 Classical guitar Valencia VC201TBU
                    </p>

                    <p className="text-center my-4 text-md font-semibold text-gray">69.00&#8364;</p>

                    <button className="primary-btn mt-4">View</button>
                </div>

                <div className="bg-white p-4 rounded-sm h-96 content-between">
                    <img className="rounded-sm my-4" src="https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/Valencia/VC201TBU_Valencia-1000x1000.jpg"></img>
                    
                    <p className="text-center my-4 text-sm font-semibold text-gray">
                        1/4 Classical guitar Valencia VC201TBU
                    </p>

                    <p className="text-center my-4 text-md font-semibold text-gray">69.00&#8364;</p>

                    <button className="primary-btn mt-4">View</button>
                </div>

                <div className="bg-white p-4 rounded-sm h-96 content-between">
                    <img className="rounded-sm my-4" src="https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/Valencia/VC201TBU_Valencia-1000x1000.jpg"></img>
                    
                    <p className="text-center my-4 text-sm font-semibold text-gray">
                        1/4 Classical guitar Valencia VC201TBU
                    </p>

                    <p className="text-center my-4 text-md font-semibold text-gray">69.00&#8364;</p>

                    <button className="primary-btn mt-4">View</button>
                </div>

                <div className="bg-white p-4 rounded-sm h-96 content-between">
                    <img className="rounded-sm my-4" src="https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/Valencia/VC201TBU_Valencia-1000x1000.jpg"></img>
                    
                    <p className="text-center my-4 text-sm font-semibold text-gray">
                        1/4 Classical guitar Valencia VC201TBU
                    </p>

                    <p className="text-center my-4 text-md font-semibold text-gray">69.00&#8364;</p>

                    <button className="primary-btn mt-4">View</button>
                </div>

                <div className="bg-white p-4 rounded-sm h-96 content-between">
                    <img className="rounded-sm my-4" src="https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/Valencia/VC201TBU_Valencia-1000x1000.jpg"></img>
                    
                    <p className="text-center my-4 text-sm font-semibold text-gray">
                        1/4 Classical guitar Valencia VC201TBU
                    </p>

                    <p className="text-center my-4 text-md font-semibold text-gray">69.00&#8364;</p>

                    <button className="primary-btn mt-4">View</button>
                </div>
            </div>
        </>
    );
}