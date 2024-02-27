import { useParams, useLocation } from "react-router-dom"


export default function Film(){
    const val = useLocation()
    console.log(val);
    const {name} = useParams();
    return(
        <h1>
            {name}
        </h1>
    )
}