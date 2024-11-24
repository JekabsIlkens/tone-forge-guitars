export default function InputField({ id, label, type, value, onChange, error, disabled }) {
    return (
        <>
            <div>
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
                {error && <div className="warning">{error}</div>}
            </div>
        </>
    );
}
