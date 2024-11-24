import { Link, usePage, useForm } from "@inertiajs/react";

export default function UserLayout({ children }) {
    const { auth, url, routes } = usePage().props;
    const { post } = useForm();

    function logoutUser(e) {
        e.preventDefault();
        post(routes.logout);
    }

    function getLinkClass(href) {
        return url === href ? "nav-link-active" : "nav-link";
    }

    return (
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
    );
}
