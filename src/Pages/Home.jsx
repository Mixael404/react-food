import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import Preloader from '../Components/Preloader'
import CategoryList from "../Components/CategoryList";
import Search from "../Components/Search";


export default function Home() {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(category => category.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.data.categories)
            setFilteredCatalog(data.data.categories)
        })
    }, [])

    return (
        <>
            <Search cb={handleSearch} />
            {catalog.length === 0 ? <Preloader /> :
                <CategoryList catalog={filteredCatalog} />
            }
        </>
    )
}