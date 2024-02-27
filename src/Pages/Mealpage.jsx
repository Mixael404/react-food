import { useParams } from "react-router-dom"
import { getMealById } from "../api"
import { useEffect, useState } from "react"
export default function MealPage() {
    const { id } = useParams()
    const [mealInfo, setMealInfo] = useState({})

    useEffect(() => {
        getMealById(id).then((data) => {
            setMealInfo(data.data.meals[0])
            console.log(data.data.meals[0])
        })
    }, [id])
    const {strMeal} = mealInfo
    return (
        <>
            <h1>
                Meal: {strMeal}
            </h1>
        </>
    )
}