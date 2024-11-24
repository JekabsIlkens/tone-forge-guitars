import CategoryCard from "../../Components/CategoryCard";

export default function Categories({categories}) {
    return (
        <>
            <h1 className="title">Available Categories</h1>

            <div className="flex space-x-8">
                {categories.map((category) => (
                    <CategoryCard 
                        key={category.id}
                        id={category.id} 
                        name={category.name} 
                    />
                ))}
            </div>
        </>
    );
}
