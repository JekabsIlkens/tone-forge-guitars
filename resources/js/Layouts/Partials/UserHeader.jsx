export default function UserHeader({ header }) {
    return (
        <>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-center">
                    <h1 className="text-xl font-semibold tracking-tight text-gray">
                        { header }
                    </h1>
                </div>
            </header>
        </>
    );
}