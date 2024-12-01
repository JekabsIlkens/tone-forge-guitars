import CategoryCard from "./Partials/CategoryCard";

export default function Categories({ categories }) {
    return (
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-4 sm:py-4 lg:max-w-7xl lg:px-4">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
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
