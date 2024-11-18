import { Link } from "@inertiajs/react";

export default function UserLayout({children}) 
{
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/login">Login</Link>
                    <Link className="nav-link" href="/register">Register</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}
