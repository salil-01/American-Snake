import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/AdminSide/pages/Dashboard"
import { Homepage } from "../components/Homepage/Homepage"

import {MensProduct} from "./MensProduct"

import Login from "./Login"


export const MainRoutes = ()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/admin" element={<Dashboard/>}/>

            <Route path="/products-men" element={<MensProduct />}/>
            {/* <Route path="/logi */}
            
            <Route path="/login" element={<Login/>}/>

        </Routes>
        </>
    )
}