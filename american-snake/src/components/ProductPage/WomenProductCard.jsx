
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Loading from "./Loader";
import { getWomenProduct } from "../../redux/product/productAction";

const WomensProduct = () => {
  const {isLoading,womensProduct}= useSelector((store)=>store.ProductReducer)
  const dispatch = useDispatch();
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  let Params={
    params: {
      category: searchParams.getAll('category'),
      brand: searchParams.getAll('type')
    }
  }
  useEffect(() => {
    dispatch(getWomenProduct(Params));  
  }, [location.search])

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Box mt={"3.5rem"}>
    <SimpleGrid  columns={[2,2,3,4]} gap={5} >
      {womensProduct.length>0 &&
        womensProduct.map((el)=>(
          <div key={el.id}>
              <Box onClick={() => navigate(`/products-men/${el.id}`)} cursor={'pointer'} >
                <Image objectFit={'cover'} w={210}  src={el.image}/>
                <Text fontSize={'md'}>{el.title}</Text>
                <Text  fontSize={'md'} fontWeight={600}>RS.{el.price}  
                {/* <span style={{fontSize:'12px', marginLeft:'8px'}}>(60% OFF)</span> */}
                </Text>
            </Box>
          </div>
              
        ))}
        </SimpleGrid>
    </Box>
  )
}
export default WomensProduct