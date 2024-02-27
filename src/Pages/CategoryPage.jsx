import { useNavigate, useParams } from "react-router-dom"
import { getFilteredCategory } from "../api";
import { useEffect, useState } from "react";
import Preloader from "../Components/Preloader";
import MealList from "../Components/MealList";

export default function CategoryPage() {
    const { name } = useParams();
    const navigate = useNavigate()
    const [meals, setMeals] = useState([])
    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            console.log(data.data.meals);
            setMeals(data.data.meals)
        })
    }, [name])
    return (
        <>
        <button
        className="btn"
        onClick={() => navigate(-1)}
        >
            Back
        </button>
        <h1>
            {name}
        </h1>
        {
            meals.length ? <MealList meals= {meals} />  :  <Preloader />
        }
        </>
    )
}