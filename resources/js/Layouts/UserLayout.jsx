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
                    <div className="fixed left-0 top-0 -z-10 h-full w-full">
                    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                    </div>
                    {children}
                </main>

                <footer>
                    <p className="mx-4">&copy; 2024 Tone Forge Guitars. All rights reserved.</p>
                    <p className="mx-4 text-base_primary">support@toneforge.com</p>
                    <img className="ml-4 mr-1 h-6 w-6" src="/images/fb_social.png" alt="FB" />
                    <img className="ml-1 mr-1 h-6 w-6" src="/images/ig_social.png" alt="IG" />
                    <img className="ml-1 mr-1 h-6 w-6" src="/images/yt_social.png" alt="YT" />
                    <img className="ml-1 mr-4 h-6 w-6" src="/images/tw_social.png" alt="TW" />
                </footer>
            </div>
        </>
    );
}
