import "react-toastify/dist/ReactToastify.css";
import { Link, usePage, useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export default function UserLayout({ children }) {
    const { auth, url, routes, flash, cartCount } = usePage().props;
    const { post } = useForm();
    console.log(usePage().props);
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

    function getLinkClass(href) {
        return url === href ? "nav-link-active" : "nav-link";
    }

    return (
        <>
            <ToastContainer />
            
            <div className="min-h-screen flex flex-col">
                <header>
                    <nav>
                        <div className="flex justify-start space-x-4 w-1/3">
                            <Link className={getLinkClass("/")} href={routes.home}>
                                Home
                            </Link>

                            <Link className={getLinkClass("/shop")} href={routes.shop.category.index}>
                                Shop
                            </Link>
                        </div>

                        <div className="flex-grow text-center">
                            <img className="mx-auto px-2 py-1 h-10" src="/images/logo-small.png" alt="TONE FORGE GUITARS" />
                        </div>

                        <div className="flex justify-end space-x-4 w-1/3">
                            {auth.user ? (
                                <>
                                    <Link className={getLinkClass("/profile")} href={routes.profile.edit}>
                                        Profile
                                    </Link>

                                    <Link className={getLinkClass("/cart")} href="/cart">
                                        Cart <span>({cartCount})</span>
                                    </Link>

                                    <form onSubmit={logoutUser}>
                                        <button className="nav-link">
                                            Logout
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <Link className={getLinkClass("/login")} href={routes.login.create}>
                                        Login
                                    </Link>

                                    <Link className={getLinkClass("/register")} href={routes.register.create}>
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="flex-grow max-w-4xl w-full mx-auto p-4">
                    {children}
                </main>

                <footer>
                    <p>&copy; 2024 Tone Forge Guitars. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
