import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Homepage/Footer";
import Navbar from "../components/Homepage/Navbar";
// import Footer from "../Components/Footer";
import { Filter } from "../components/ProductPage/Filter";
import { Products } from "../components/ProductPage/Products";
import { Sortbybar } from "../components/ProductPage/Sortbybar";
// import Navbar from "../Components/Navbar";
import {  getWomenProduct } from "../redux/product/productAction";

export const WoMensProduct = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState([]);
  const categories = [
    "Jeans",
    "Shirt",
    "Belt",
    "Shoes",
    "Dress",
  ];
  const prices= [
    'Under ₹1,000',
    '₹1000 - ₹4000',
    'Over ₹4000'
  ]
  const { WomensProduct } = useSelector((store) => store.ProductReducer);
  const [prodType, setProdType] = useState({
    filters: new Set(),
    product: WomensProduct,
  });
  const onFilterChange = (e) => {
    setProdType((previousState) => {
      let filters = new Set(previousState.filters);
      let product = WomensProduct;

      if (e.target.checked) {
        filters.add(e.target._wrapperState.initialValue);
        setSort([...sort,e.target._wrapperState.initialValue])
      } else {
        filters.delete(e.target._wrapperState.initialValue);
      }

      if (filters.size) {
        product = product.filter((product) => {
          return filters.has(product.type);
        });
      }

      return {
        filters,
        product,
      };
    });
  };
  const onFilterPrice= (e)=>{
    setProdType((previousState) => {
      let filters = new Set(previousState.filters);
      let product = WomensProduct;
      if (e.target.checked) {
        filters.add(e.target._wrapperState.initialValue);
      } else {
        filters.delete(e.target._wrapperState.initialValue);
      }

      if (filters.size) {
        product = product.filter((product) => {
          return filters.has(product.pv);
        });
      }

      return {
        filters,
        product,
      };
    });
  }

  useEffect(() => {
    dispatch(getWomenProduct());
    setProdType(WomensProduct);
  }, []);

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box pt={"110px"}>
        <Box>
          <Sortbybar sortby={sort} />
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
              base: "sticky",
              lg: "sticky",
            }}
            top={{
              base: "10%",
              lg: "20%",
            }}
          >
            <Filter onFilterChange={onFilterChange} categories={categories} prices={prices} onFilterPrice={onFilterPrice} />
          </Box>
          <Spacer />
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "100%",
              lg: "70%",
            }}
          >
            <Products prod={prodType.product || WomensProduct} />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

