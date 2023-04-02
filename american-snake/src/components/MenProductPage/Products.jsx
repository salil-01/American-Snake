import { SingleProdCard } from "./SingleProdCard";
import { useSelector } from "react-redux";
import { Flex, Grid, Skeleton, Stack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const Products = ({ prod }) => {
  // console.log(props)
  const { isLoading } = useSelector((store) => store.ProductReducer);
  // console.log(isLoading);
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {isLoading
          ? [...Array(9).keys()].map((item) => {
              return (
                <Stack  key={item} width={"80%"} margin={"auto"}>
                  <Skeleton
                    height={{ base: "210", md: "300" }}
                    width={{ base: "200px", md: "250px" }}
                    borderRadius={"sm"}
                  />
                  <Skeleton height="16px" 
                  width={{ base: "200px", md: "250px" }}
                  
                  borderRadius={"sm"} />
                  <Skeleton height="16px" width={{ base: "200px", md: "250px" }} borderRadius={"sm"} />
                  <Skeleton height="16px" width={{ base: "200px", md: "250px" }} borderRadius={"sm"} />
                </Stack>
              );
            })
          : prod?.map((el) => {
              return <SingleProdCard key={el.id} {...el} />;
            })}
      </Grid>
    </>
  );
};
