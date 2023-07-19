import "./app.css"
import {useState, useEffect} from "react"
import axios from "axios"

import CustomTable from "./table"

const App = () => {

    return (
        <div>
            <CustomTable />
        </div>
    )
}

export default App