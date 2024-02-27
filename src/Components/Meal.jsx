import { Link } from "react-router-dom"
export default function Meal(props){

    const { strMeal, idMeal, strMealThumb } = props
    return(
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
                    <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-content">
                <p>{strMeal.slice(0, 20)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn"> Watch meal </Link>
            </div>
        </div>
    )
}