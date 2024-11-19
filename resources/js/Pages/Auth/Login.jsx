import { useForm } from "@inertiajs/react";

export default function Login() 
{
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    function submit(e){
        e.preventDefault();
        post("/login");
    }

    return (
        <>
            <h1 className="title">Login</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={data.email} 
                        onChange={(e) => setData("email", e.target.value)}>
                    </input>
                    <div className="warning">{errors.email}</div>

                    <label>Password</label>
                    <input 
                        type="password" 
                        value={data.password} 
                        onChange={(e) => setData("password", e.target.value)}>
                    </input>
                    <div className="warning">{errors.password}</div>

                    <button className="primary-btn mt-4" disabled={processing}>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}
