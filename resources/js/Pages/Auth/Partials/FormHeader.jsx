export default function FormHeader({header}) {
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="h-16 w-auto mx-auto" src="/images/TF_icon.png" alt="Tone Forge" />

                <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray">
                    {header}
                </h2>
            </div>
        </>
    );
}