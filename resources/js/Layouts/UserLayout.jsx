import { Link, usePage, useForm } from "@inertiajs/react";

export default function UserLayout({ children }) {
    const { auth } = usePage().props;
    const { post } = useForm();

    function submit(e) {
        e.preventDefault();
        post("/logout");
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <nav>
                    <div className="flex space-x-4">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/">Guitars</Link>
                    </div>

                    <div className="flex-grow text-center">
                        <img className="mx-auto px-2 py-1 h-10" src="https://i.postimg.cc/RVbd613g/TF-sm.png" alt="TFG Logo" />
                    </div>

                    <div className="flex space-x-4">
                        {auth.user ? (
                            <>
                                <Link className="nav-link" href="/profile">Profile</Link>
                                <form onSubmit={submit}>
                                    <button className="nav-link">
                                        Logout
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" href="/login">Login</Link>
                                <Link className="nav-link" href="/register">Register</Link>
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
