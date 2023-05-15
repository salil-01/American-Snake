import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Homepage/Navbar";
import { getWomenProduct } from "../redux/product/productAction";
import { Sortbybar } from "../components/WomenProductPage/Sortbybar";
import { Filter } from "../components/WomenProductPage/Filter";
import Pagination from "../components/WomenProductPage/Pagination";
import Footer from "../components/Homepage/Footer";
import { Products } from "../components/WomenProductPage/Products";

export const WomensProduct = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const productData = useSelector((store) => {
    return store.ProductReducer.womensProduct;
  });
  console.log(productData);
  const obj = {
    params: {
      _limit: searchParam.get("page") && 9,
      _page: searchParam.get("page"),
      type: searchParam.getAll("category"),
      brand: searchParam.getAll("brand"),
      _sort: searchParam.get("order") && "price",
      _order: searchParam.get("order"),
    },
  };
  useEffect(() => {
    dispatch(getWomenProduct(obj));
  }, [location.search]);

  return (
    <div>
      <Navbar />

      <Box width={"100%"} margin={"auto"}>
        {/* <Box>
          <Sortbybar />
        </Box> */}
        <Box
          margin={"10px auto"}
          width={"20%"}
          marginLeft={{ base: "none", md: "none", lg: "120px" }}
        >
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                <Text fontSize={"12px"}>Home</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="#">
                <Text fontSize={"12px"}>Women</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="#">
                <Text fontSize={"12px"}>Products</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Flex
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "25%",
            }}
            p={5}
            position={{
              base: "static",
              lg: "sticky",
            }}
            top={{
              base: "10%",
              lg: "20%",
            }}
          >
            <Filter />
          </Box>
          <Spacer />
          <Box
            marginTop={"20px"}
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
            }}
          >
            <Products prod={productData} />
            <Box width={"40%"} margin={"70px auto 30px"}>
              <Pagination />
            </Box>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </div>
  );
};
