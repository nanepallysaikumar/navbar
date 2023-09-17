import { Route, Routes } from "react-router-dom";
import { Connect } from "../Pages/Connect/Connect"
import { Analyze } from "../Pages/Analyze/Analyze"
import "./content.scss"

const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Connect />} />
            <Route path="/analyze" element={<Analyze />} />
        </Routes>
    )
}

export { Content }