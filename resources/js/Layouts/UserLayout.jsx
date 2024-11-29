import UserNav from "./Partials/UserNav";
import UserHeader from "./Partials/UserHeader";
import UserMain from "./Partials/UserMain";
import UserFooter from "./Partials/UserFooter";
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
        return url === href ? "nav-link-active" : "nav-link-inactive";
    }

    return (
        <>
            <ToastContainer />

            <div className="min-h-screen flex flex-col">
                <UserNav>
                    <div className="hidden md:flex flex-1">
                        <div className="flex items-baseline space-x-4">
                            <Link href={routes.home} className={getLinkClassName('/')}>Home</Link>
                            <Link href={routes.shop.category.index} className={getLinkClassName('/shop')}>Shop</Link>
                        </div>
                    </div>

                    <div className="shrink-0 flex justify-center flex-1">
                        <img className="h-8" src="/images/logo-small.png" alt="TONE FORGE" />
                    </div>

                    <div className="hidden md:flex flex-1 justify-end">
                        <div className="flex items-baseline space-x-4">
                            {auth.user ? (
                                <>
                                    <Link href={routes.cart.index} className={getLinkClassName('/cart')}>Cart <span>({cartCount})</span></Link>
                                    <Link href={routes.profile.edit} className={getLinkClassName('/profile')}>Profile</Link>
                                    <form onSubmit={logoutUser}>
                                        <button className={getLinkClassName('/logout')}>Logout</button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <Link href={routes.login.create} className={getLinkClassName('/login')}>Login</Link>
                                    <Link href={routes.register.create} className={getLinkClassName('/register')}>Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                </UserNav>

                <UserHeader header="-custom header text-" />

                <UserMain>
                    {children}
                </UserMain>

                <UserFooter />
            </div>
        </>
    );
}
