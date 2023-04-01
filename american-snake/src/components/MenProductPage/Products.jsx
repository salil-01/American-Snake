import { SingleProdCard } from "./SingleProdCard";
import { useSelector } from "react-redux";
import { Grid } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const Products = ({prod}) => {
  // console.log(props)
  const { isLoading } = useSelector((store) => store.ProductReducer);

  return (
    <>
      {!isLoading && (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        >
          {prod?.map((el) => {
            return <SingleProdCard key={el.id} {...el} />;
          })}
        </Grid>
      )}
    </>
  );
};