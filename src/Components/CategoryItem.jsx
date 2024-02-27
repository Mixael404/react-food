import { Link, useNavigate } from "react-router-dom"

export default function CategoryItem(props) {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = props
    
    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
                    <span className="card-title">{strCategory}</span>
            </div>
            <div className="card-content">
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn"> Watch category </Link>
            </div>
        </div>
    )
}