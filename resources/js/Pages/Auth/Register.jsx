import CardBase from "../../Components/CardBase";
import RegisterForm from './Partials/RegisterForm';

export default function Register() {
    return (
        <>
            <CardBase>
                <h1 className="title">REGISTER</h1>

                <div className="mx-8 mb-8 px-8">
                    <RegisterForm />
                </div>
            </CardBase>
        </>
    );
}
