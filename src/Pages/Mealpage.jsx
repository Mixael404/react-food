import { useNavigate, useParams } from "react-router-dom"
import { getMealById } from "../api"
import { useEffect, useState } from "react"
import Preloader from "../Components/Preloader"
export default function MealPage() {
    const { id } = useParams()
    const [mealInfo, setMealInfo] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getMealById(id).then((data) => {
            setMealInfo(data.data.meals[0])
            console.log(data.data.meals[0])
        })
    }, [id])
    const { strMeal, strMealThumb, strCategory, strArea, strInstructions, strYoutube } = mealInfo
    return (
        <>
            <button
                onClick={() => navigate(-1)}
                className="btn">
                Go back
            </button>
            {!mealInfo.idMeal && <Preloader />}

            {
                mealInfo.idMeal &&
                <div className="reciepe">
                    <img style={{margin: "1rem 0"}} src={strMealThumb} alt={strMeal} />
                    <h1>
                        Meal: {strMeal}
                    </h1>
                    <h6 className="category"> Category: {strCategory} </h6>
                    {strArea && <h6 className="region"> Area: {strArea} </h6>}
                    <p>
                        {strInstructions}
                    </p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(mealInfo).map(key => {
                                    if (key.includes("Ingredient") && mealInfo[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{mealInfo[key]}</td>
                                                <td> {
                                                    mealInfo[`strMeasure${key.slice(13)}`]
                                                } </td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>

                    </table>


                    {strYoutube &&
                        (
                            <div className="row">
                                <h5>Video Reciepe</h5>
                                <iframe title={id} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowFullScreen />
                            </div>
                        )
                    }
                </div>
            }
        </>
    )
}