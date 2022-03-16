import React from 'react'
import {useParams} from "react-router"
import '../App.css';

const Entry = () => {
    const{entry,textColor,backgroundColor} =useParams()


    return (
        <div>
            {isNaN(entry) ?
                <h1 className="App" style={{color:textColor, backgroundColor: backgroundColor}}>The word is: {entry}</h1>:
                <h1 className="App" style={{color:textColor, backgroundColor: backgroundColor}}>The number is: {entry}</h1>
            }
        </div>
    )
}

export default Entry;