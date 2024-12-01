import InputField from "../../../Components/InputField";
import { useForm, usePage } from "@inertiajs/react";
import { useFormHandler } from "../../../Hooks/useFormHandler";

export default function UpdateShippingDetailsForm({ address }) {
    const { routes } = usePage().props;
    const { data, setData, patch, errors, processing } = useForm({
        address_line_one: address?.address_line_one ?? "",
        address_line_two: address?.address_line_two ?? "",
        city: address?.city ?? "",
        state_province: address?.state_province ?? "",
        postal_code: address?.postal_code ?? "",
        country: address?.country ?? "",
    });

    const handleChange = useFormHandler(setData);

    function updateShippingDetails(e) {
        e.preventDefault();
        patch(routes.profile.address.update, {
            preserveScroll: true,
        });
    }

    return (
        <form onSubmit={updateShippingDetails}>
            <InputField
                id="address_line_one"
                label="Address Line 1 *"
                type="text"
                placeholder="48 Hertford Drive"
                value={data.address_line_one}
                onChange={handleChange("address_line_one")}
                error={errors.address_line_one}
                disabled={processing}
            />

            <InputField
                id="address_line_two"
                label="Address Line 2"
                type="text"
                placeholder="Flat 2"
                value={data.address_line_two}
                onChange={handleChange("address_line_two")}
                error={errors.address_line_two}
                disabled={processing}
            />

            <InputField
                id="city"
                label="City *"
                type="text"
                placeholder="Liverpool"
                value={data.city}
                onChange={handleChange("city")}
                error={errors.city}
                disabled={processing}
            />

            <InputField
                id="state_province"
                label="State/Province *"
                type="text"
                placeholder="Merseyside"
                value={data.state_province}
                onChange={handleChange("state_province")}
                error={errors.state_province}
                disabled={processing}
            />

            <InputField
                id="postal_code"
                label="Zip/Postal Code *"
                type="text"
                placeholder="CH45 7PX"
                value={data.postal_code}
                onChange={handleChange("postal_code")}
                error={errors.postal_code}
                disabled={processing}
            />

            <InputField
                id="country"
                label="Country *"
                type="text"
                placeholder="United Kingdom"
                value={data.country}
                onChange={handleChange("country")}
                error={errors.country}
                disabled={processing}
            />

            <button className="primary-btn mt-4" disabled={processing}>
                {processing ? "Processing..." : "Update"}
            </button>
        </form>
    );
}