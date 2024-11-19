import { Link, usePage, useForm } from "@inertiajs/react";

export default function UserLayout({children}) 
{
    const { auth } = usePage().props;
    const { post } = useForm();

    function submit(e){
        e.preventDefault();
        post("/logout");
    }

    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>

                    {auth.user ? (
                        <>
                            <Link className="nav-link" href="/profile">{auth.user.full_name}</Link>

                            <form onSubmit={submit}>
                                <button className="primary-btn">
                                    Logout
                                </button>
                            </form>
                        </>
                    ):(
                        <>
                            <Link className="nav-link" href="/login">Login</Link>
                            <Link className="nav-link" href="/register">Register</Link>
                        </>
                    )}
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}
