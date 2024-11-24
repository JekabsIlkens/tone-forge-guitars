import CategoryCard from "../../Components/CategoryCard";

export default function Categories({categories}) {
    return (
        <>
            <h1 className="title">Available Categories</h1>

            <div className="w-0 h-0 bg-Acoustic hover:bg-Acoustic_active"></div>
            <div className="w-0 h-0 bg-Electric hover:bg-Electric_active"></div>
            <div className="w-0 h-0 bg-Bass hover:bg-Bass_active"></div>

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
