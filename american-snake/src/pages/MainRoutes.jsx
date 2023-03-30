import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/AdminSide/components/Sidebar"
import { AddProduct } from "../components/AdminSide/pages/Addproduct"
import { Dashboard } from "../components/AdminSide/pages/Dashboard"
import { Homepage } from "../components/Homepage/Homepage"
import AdminPage from "./Adminpage"
import Productpage from "./ProductPage"

export const MainRoutes = ()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            
            <Route path="/products-men" element={<Productpage/>}/>
            <Route path="/admin-dashboard" element={
                <Sidebar>
                    <Dashboard/>
                </Sidebar>
            }/>
            <Route path="/admin-addproduct" element={
                <Sidebar>
                    <AddProduct/>
                </Sidebar>
            }/>
            {/* <Route path="/logi */}
        </Routes>
        </>
    )
}