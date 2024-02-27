import CategoryItem from "./CategoryItem"

export default function CategoryList({catalog = []}){
    return(
        <div className="list">
            {
                catalog.map((category) => {
                    return <CategoryItem key={category.idCategory} {...category}/>
                })
            }
        </div>
    )
}