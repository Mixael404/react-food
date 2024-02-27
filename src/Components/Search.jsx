import { useState } from "react"

export default function Search({cb = Function.prototype}){
    const [value, setValue] = useState('')

    const handlekey = (e) => {
        if(e.key === "Enter"){
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input type="search" 
                id="serachField"
                placeholder="Search"
                onKeyDown={handlekey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                />
                <button 
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0
                }}
                onClick={handleSubmit}
                className="btn">Search</button>
            </div>
        </div>
    )
}