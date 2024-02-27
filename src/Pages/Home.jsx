import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import Preloader from '../Components/Preloader'
import CategoryList from "../Components/CategoryList";

export default function Home(){
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        getAllCategories().then(data => {
            console.log(data.data);
            setCatalog(data.data.categories)
        })
    }, [])

    return(
        <>
            {catalog.length === 0 ? <Preloader /> :
                <CategoryList catalog={catalog}/>
            }
        </>
    )
}