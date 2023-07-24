import "./app.css"
import {useState, useEffect} from "react"
import axios from "axios"

import CustomTable from "./table"

const App = () => {

    return (
        <div>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contracts</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <CustomTable />
        </div>
    )
}

export default App