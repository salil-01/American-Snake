import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/AdminSide/components/Sidebar";
import { AddProduct } from "../components/AdminSide/pages/Addproduct";
import { Dashboard } from "../components/AdminSide/pages/Dashboard";
import { Homepage } from "../components/Homepage/Homepage";
import { MensProduct } from "./MensProduct";

import Signup from "./Signup";
import { AllProducts } from "../components/AdminSide/pages/Allproducts";
import { EditProduct } from "../components/AdminSide/pages/EditProduct";
import { AllUsers } from "../components/AdminSide/pages/AllUsers";
import { AllOrders } from "../components/AdminSide/pages/AllOrders";
import { Bag } from "./Bag";
import Cartpage from "./Cartpage";
import { Login } from "./Login";
import { WomensProduct } from "./WomensProduct";
import { SingleProductWomen } from "./SingleProductWomen";
import { SingleProductMen } from "./SingleProductMen";
import { PrivateRoute } from "./PrivateRoute";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <Sidebar>
                <Dashboard />
              </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-addproduct"
          element={
            <PrivateRoute>
              <Sidebar>
                <AddProduct />
              </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-products"
          element={
            <PrivateRoute>
              <Sidebar>
                <AllProducts />
              </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-editproduct/:id"
          element={
            <PrivateRoute>
              <Sidebar>
                <EditProduct />
              </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <PrivateRoute>
              <Sidebar>
                <AllUsers />
              </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <PrivateRoute>
              <Sidebar>
                <AllOrders />
              </Sidebar>
            </PrivateRoute>
          }
        />

        {/* user routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products-men" element={<MensProduct />} />
        <Route path="/products-women" element={<WomensProduct />} />
        <Route path="/singleproduct-men/:id" element={<SingleProductMen />} />
        <Route
          path="/singleproduct-women/:id"
          element={<SingleProductWomen />}
        />
        <Route
          path="/bag"
          element={
            <PrivateRoute>
              <Bag />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cartpage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
