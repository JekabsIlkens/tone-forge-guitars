export default function CardBase({children}) {
    return (
        <>
            <div className="p-2 rounded-md bg-base_primary bg-opacity-25 border border-light_gray">
                <div className="rounded-sm bg-white border border-light_gray">
                    {children}
                </div>
            </div>
        </>
    );
}