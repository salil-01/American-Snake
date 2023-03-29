import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/AdminSide/pages/Dashboard"

export const MainRoutes = ()=>{
    return (
        <>
        <Routes>
            <Route path="/admin" element={<Dashboard/>}/>
        </Routes>
        </>
    )
}