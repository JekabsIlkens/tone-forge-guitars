import { Link, usePage } from "@inertiajs/react";

export default function Index({ user, address }) {
    const { routes } = usePage().props;

    return (
        <div className="p-10 content-card">
            <div className="flex justify-between">
                <h3 className="text-xl/7 font-semibold text-gray">
                    Shipping Details & Order History
                </h3>
                <Link href={routes.profile.edit} className="primary-btn w-auto">
                    Edit profile
                </Link>
            </div>

            <div className="mt-4 border-t border-gray">
                <dl className="divide-y divide-gray">
                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">Full Name</dt>
                        <dd className="mt-1 text-sm/6 text-gray sm:col-span-2 sm:mt-0">
                            {user.full_name}
                        </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">Email Address</dt>
                        <dd className="mt-1 text-sm/6 text-gray sm:col-span-2 sm:mt-0">
                            {user.email}
                        </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">Street Address</dt>
                        <dd className="mt-1 text-sm/6 text-gray sm:col-span-2 sm:mt-0">
                            {address?.address_line_one ? address?.address_line_one : ""}
                            &nbsp;
                            {address?.address_line_two ? address?.address_line_two : ""}
                        </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">City</dt>
                        <dd className="mt-1 text-sm/6 text-gray sm:col-span-2 sm:mt-0">
                            {address?.city ? address?.city : ""}
                        </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">State/Province</dt>
                        <dd className="mt-1 text-sm/6 text-gray sm:col-span-2 sm:mt-0">
                            {address?.state_province ? address?.state_province : ""}
                        </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">Zip/Postal Code</dt>
                        <dd className="mt-1 text-sm/6 text-gray sm:col-span-2 sm:mt-0">
                            {address?.postal_code ? address?.postal_code : ""}
                        </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">Country</dt>
                        <dd className="mt-1 text-sm/6 text-gray sm:col-span-2 sm:mt-0">
                            {address?.country ? address?.country : ""}
                        </dd>
                    </div>

                    <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-base_primary">Order History</dt>
                        <dd className="mt-2 text-sm text-gray sm:col-span-2 sm:mt-0">

                            <ul role="list" className="divide-y bg-white rounded-sm border border-light_gray shadow-md shadow-light_gray">
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <div className="flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">
                                                You haven't purchased anything yet...
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-4 shrink-0">
                                        <Link href="#" className="font-medium text-gray hover:text-gray/80">
                                            View
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}