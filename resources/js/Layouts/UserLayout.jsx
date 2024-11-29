import "react-toastify/dist/ReactToastify.css";
import { Link, usePage, useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function UserLayout({ children }) {
    const { auth, url, routes, flash, cartCount } = usePage().props;
    const { post } = useForm();

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        if (flash?.error) {
            toast.error(flash.error, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [flash.success, flash.error]);

    function logoutUser(e) {
        e.preventDefault();
        post(routes.logout);
    }

    function getLinkClassName(href) {
        return url === href ?
            "rounded-md px-3 py-2 text-sm font-medium bg-base_primary text-white"
            : "rounded-md px-3 py-2 text-sm font-medium text-gray hover:bg-base_primary hover:text-white";
    }

    return (
        <>
            <ToastContainer />
            <div className="min-h-full">
                <nav className="bg-base_light">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="hidden md:flex flex-1">
                                <div className="flex items-baseline space-x-4">
                                    <Link href={routes.home} className={getLinkClassName('/')}>
                                        Home
                                    </Link>

                                    <Link href={routes.shop.category.index} className={getLinkClassName('/shop')}>
                                        Shop
                                    </Link>
                                </div>
                            </div>

                            <div className="shrink-0 flex justify-center flex-1">
                                <img className="h-8" src="/images/logo-small.png" alt="TONE FORGE" />
                            </div>

                            <div className="hidden md:flex flex-1 justify-end">
                                <div className="flex items-baseline space-x-4">
                                    {auth.user ? (
                                        <>
                                            <Link href={routes.cart.index} className={getLinkClassName('/cart')}>
                                                Cart <span>({cartCount})</span>
                                            </Link>

                                            <Link href={routes.profile.edit} className={getLinkClassName('/profile')}>
                                                Profile
                                            </Link>

                                            <form onSubmit={logoutUser}>
                                                <button className={getLinkClassName('/logout')}>
                                                    Logout
                                                </button>
                                            </form>
                                        </>
                                    ) : (
                                        <>
                                            <Link href={routes.login.create} className={getLinkClassName('/login')}>
                                                Login
                                            </Link>

                                            <Link href={routes.register.create} className={getLinkClassName('/register')}>
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <header className="bg-white border border-light_gray shadow-md shadow-light_gray">
                    <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-center">
                        <h1 className="text-xl font-semibold tracking-tight text-gray">Dashboard</h1>
                    </div>
                </header>


                <main>
                    {/* Fixed grid background for all pages. */}
                    <div className="fixed left-0 top-0 -z-10 h-full w-full">
                        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
