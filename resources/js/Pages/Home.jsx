import { Link, usePage } from "@inertiajs/react";

export default function Home() {
    const { routes } = usePage().props;

    return (
        <div className="py-4 sm:py-8">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-6">
                <p className="mx-auto max-w-lg text-balance text-center text-5xl font-semibold tracking-tight text-gray sm:text-5xl">
                    Welcome to <span className="text-base_primary">Tone Forge Guitars</span>
                </p>

                <div className="mt-4 grid gap-4 sm:mt-8 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-md bg-base_light lg:rounded-l-[2rem] shadow-lg shadow-light_gray"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-semibold tracking-tight text-gray max-lg:text-center">
                                    Handcrafted
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray max-lg:text-center">
                                    All our guitars are meticulously crafted by hand to ensure unparalleled authenticity and quality.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[4cqw] border-x-[1cqw] border-t-[1cqw] border-base_light bg-base_light">
                                    <img className="size-full object-cover object-top" src="/images/handcrafted.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-md shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>

                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-md bg-base_light max-lg:rounded-t-[2rem] shadow-lg shadow-light_gray"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-semibold tracking-tight text-gray max-lg:text-center">
                                    Your dream guitar
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray max-lg:text-center">
                                    We are confident you'll find your dream guitar among our selection.
                                    Start browsing now and let your perfect guitar inspire your next performance!
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center">
                                <Link href={routes.shop.category.index} className="rounded-sm w-full text-center mx-10 px-4 my-10 py-4 text-lg font-semibold text-white bg-base_primary hover:bg-base_accent">
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>

                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-md bg-base_light shadow-lg shadow-light_gray"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-semibold tracking-tight text-gray max-lg:text-center">
                                    Fast & Secure
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray max-lg:text-center">
                                    We guarantee fast delivery with secure packaging to ensure the guitar arrives safely at your doorstep.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <img className="h-[min(152px,40cqw)] object-cover" src="/images/secure_delivery.png" alt="" />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>

                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-md bg-base_light max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] shadow-lg shadow-light_gray"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-semibold tracking-tight text-gray max-lg:text-center">
                                    Guitar lessons
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray max-lg:text-center">
                                    We are happy to announce that we will be launching our guitar lessons section next year.
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[4cqw] border-x-[1cqw] border-t-[1cqw] border-base_light bg-base_light">
                                    <img className="size-full object-cover object-top" src="/images/courses.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
