import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Homepage/Footer";
import Navbar from "../components/Homepage/Navbar";
// import Footer from "../Components/Footer";
import { Filter } from "../components/MenProductPage/Filter";
import { Products } from "../components/MenProductPage/Products";
import { Sortbybar } from "../components/MenProductPage/Sortbybar";
// import Navbar from "../Components/Navbar";
import { getMenProduct } from "../redux/product/productAction";

export const MensProduct = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState([]);
  const categories = ["Jeans", "Shirt", "Short", "Shoes", "T-shirt", "Dress"];
  const prices = ["Under ₹1,000", "₹1000 - ₹4000", "Over ₹4000"];
  const { mensProduct } = useSelector((store) => store.ProductReducer);
  const [prodType, setProdType] = useState({
    filters: new Set(),
    product: mensProduct,
  });
  const onFilterChange = (e) => {
    setProdType((previousState) => {
      let filters = new Set(previousState.filters);
      let product = mensProduct;

      if (e.target.checked) {
        filters.add(e.target._wrapperState.initialValue);
        setSort([...sort, e.target._wrapperState.initialValue]);
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
  const onFilterPrice = (e) => {
    setProdType((previousState) => {
      let filters = new Set(previousState.filters);
      let product = mensProduct;
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
  };

  useEffect(() => {
    dispatch(getMenProduct());
    setProdType(mensProduct);
  }, []);

  return (
    <>
      <Navbar />

      <Box>
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
            <Filter
              onFilterChange={onFilterChange}
              categories={categories}
              prices={prices}
              onFilterPrice={onFilterPrice}
            />
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
            <Products prod={prodType.product || mensProduct} />
          </Box>
        </Flex>

        <Footer />
      </Box>
    </>
  );
};

