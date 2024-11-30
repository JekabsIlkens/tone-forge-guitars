import Nav from "./Partials/Nav";
import Header from "./Partials/Header";
import Main from "./Partials/Main";
import Footer from "./Partials/Footer";
import LogoutForm from "./Partials/LogoutForm";

import "react-toastify/dist/ReactToastify.css";
import { useToast } from "../Hooks/useToast";
import { ToastContainer } from "react-toastify";
import { useLinkClassName } from "../Hooks/useLinkClassName";
import { Link, usePage } from "@inertiajs/react";

export default function UserLayout({ children }) {
    const { auth, routes, flash, cartCount } = usePage().props;
    const getLinkClassName = useLinkClassName();

    useToast(flash);

    return (
        <>
            <ToastContainer />

            <div className="min-h-screen flex flex-col">
                <Nav>
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

                                    <LogoutForm />
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
                </Nav>

                <Header 
                    titleText="Black Friday &nbsp;&nbsp;|&nbsp;&nbsp; Best deal of the year &nbsp;&nbsp;|&nbsp;&nbsp; Get up to 25% off" 
                />

                <Main>
                    {children}
                </Main>

                <Footer />
            </div>
        </>
    );
}
