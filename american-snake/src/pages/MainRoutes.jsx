import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/AdminSide/components/Sidebar";
import { AddProduct } from "../components/AdminSide/pages/Addproduct";
import { Dashboard } from "../components/AdminSide/pages/Dashboard";
import { Homepage } from "../components/Homepage/Homepage";
import  SingleProduct from "./SingleProduct";
import AdminPage from "./Adminpage";

import { MensProduct } from "./MensProduct";

import Login from "./Login";

import Signup from "./Signup";

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />

                <Route
                    path="/admin-dashboard"
                    element={
                        <Sidebar>
                            <Dashboard />
                        </Sidebar>
                    }
                />
                <Route
                    path="/admin-addproduct"
                    element={
                        <Sidebar>
                            <AddProduct />
                        </Sidebar>
                    }
                />

                <Route path="/admin" element={<Dashboard />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/products-men" element={<MensProduct />} />

                <Route path="/singleproduct/:id" element={<SingleProduct />} />

                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};
