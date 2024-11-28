import CardBase from "../../Components/CardBase";
import LoginForm from './Partials/LoginForm';

export default function Login() {
    return (
        <>
            <CardBase>
                <h1 className="title">LOGIN</h1>

                <div className="mx-8 mb-8 px-8">
                    <LoginForm />
                </div>
            </CardBase>
        </>
    );
}
