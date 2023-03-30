import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/AdminSide/pages/Dashboard"
import { Homepage } from "../components/Homepage/Homepage"
import Login from "./Login"
import Productpage from "./ProductPage"
import Signup from "./Signup"

export const MainRoutes = ()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path="/products-men" element={<Productpage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </>
    )
}