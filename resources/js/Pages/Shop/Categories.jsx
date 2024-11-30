import CategoryCard from "./Partials/CategoryCard";

export default function Categories({ categories }) {
    return (
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        id={category.id}
                        name={category.name}
                    />
                ))}
            </div>
        </div>
    );
}
