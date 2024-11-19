import { useForm, usePage } from "@inertiajs/react";

export default function UpdateInfoForm() 
{
    const { auth } = usePage().props;
    const { data, setData, patch, errors, processing } = useForm({
        id: auth.user.id,
        full_name: auth.user.full_name,
        email: auth.user.email,
        password: "",
    });

    function submit(e){
        e.preventDefault();
        patch("/profile");
    }

    return (
        <>
            <h1 className="title">Update profile data</h1>

            <div className="mx-auto">
                <form onSubmit={submit}>
                    <label htmlFor="full_name">Full name</label>
                    <input 
                        id="full_name"
                        type="text" 
                        value={data.full_name} 
                        onChange={(e) => setData("full_name", e.target.value)}>
                    </input>
                    <div className="warning">{errors.full_name}</div>

                    <label htmlFor="email">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        value={data.email} 
                        onChange={(e) => setData("email", e.target.value)}>
                    </input>
                    <div className="warning">{errors.email}</div>

                    <label htmlFor="password">New password</label>
                    <input 
                        id="password"
                        type="password" 
                        value={data.password} 
                        onChange={(e) => setData("password", e.target.value)}>
                    </input>
                    <div className="warning">{errors.password}</div>

                    <button className="primary-btn mt-4" disabled={processing}>
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}