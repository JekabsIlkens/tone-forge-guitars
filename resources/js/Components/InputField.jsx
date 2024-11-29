export default function InputField({ id, label, type, placeholder, value, onChange, error, disabled }) {
    return (
        <>
            <div>
                <label htmlFor={id}>{label}</label>
                <div>
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                    <div className="warning-text">{error}</div>
                </div>
            </div>
        </>
    );
}
