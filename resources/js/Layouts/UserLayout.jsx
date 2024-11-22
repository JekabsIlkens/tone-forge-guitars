import { Link, usePage, useForm } from "@inertiajs/react";

export default function UserLayout({ children }) {
    const { auth, url, routes } = usePage().props;
    const { post } = useForm();

    function submit(e) {
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
                    <div className="flex space-x-4">
                        <Link className={getLinkClass("/")} href={routes.home}>
                            Home
                        </Link>

                        <Link className={getLinkClass("/shop")} href={routes.home}>
                            Shop
                        </Link>
                    </div>

                    <div className="flex-grow text-center">
                        <img className="mx-auto px-2 py-1 h-10" src="https://i.postimg.cc/RVbd613g/TF-sm.png" alt="TONE FORGE GUITARS" />
                    </div>

                    <div className="flex space-x-4">
                        {auth.user ? (
                            <>
                                <Link className={getLinkClass("/profile")} href={routes.profile.edit}>
                                    Profile
                                </Link>

                                <form onSubmit={submit}>
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
