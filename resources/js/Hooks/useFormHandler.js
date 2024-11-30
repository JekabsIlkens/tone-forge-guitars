export function useFormHandler(setData) {
    return function handleChange(field) {
        return (e) => setData(field, e.target.value);
    };
}
