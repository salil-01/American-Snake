import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Footer from "../Components/Footer";
import { Filter } from "../components/ProductPage/Filter";
import { Products } from "../components/ProductPage/Products";
import { Sortbybar } from "../components/ProductPage/Sortbybar";
// import Navbar from "../Components/Navbar";
import { getMenProduct } from "../redux/product/productAction";

export const MensProduct = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState([]);
  const categories = [
    "Earrings",
    "Rings",
    "Necklaces",
    "Pendants",
    "Bracelets",
    "Mangalsutra",
  ];
  const prices= [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Over ₹1,00,000'
  ]
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
        // setSort([...sort,e.target._wrapperState.initialValue])
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
  }

  useEffect(() => {
    dispatch(getMenProduct());
    setProdType(mensProduct);
  }, []);

  return (
    <Box>
      <Box>
        {/* <Navbar /> */}
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
            <Products prod={prodType.product || mensProduct} />
          </Box>
        </Flex>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};






























// import React, { useEffect, useState } from "react";
// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Breadcrumb,
//   BreadcrumbItem,
//   Image,
//   Select,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { Link, useSearchParams } from "react-router-dom";
// // import { useParams } from "react-router-dom";
// import {
//   Flex,
//   Icon,
// } from "@chakra-ui/react";
// import { Spinner, Text } from "@chakra-ui/react";
// import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
// // import { FiShoppingCart } from "react-icons/fi";
// import { AiOutlineRight } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import {FaFilter} from 'react-icons/fa'
// import { Checkbox, CheckboxGroup, Stack, Heading } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
// } from '@chakra-ui/react'
// import "./MensProduct.css"
// import { getMenProduct } from "../redux/product/productAction";
// // const data = {
// //   isNew: true,
// //   imageURL:
// //     "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
// //   name: "Wayfarer Classic",
// //   price: 4.5,
// //   rating: 4.2,
// //   numReviews: 34,
// // };

// const MensProduct = () => {
//   const { mensProduct, isLoading } = useSelector((store) => store.ProductReducer);
//   const [searchParams, setSearchParam] = useSearchParams();
//   const [categoryfilter, setCategoryFilter] = useState([]);
//   const[startfilter,setStarFilter]=useState([])
//   const location = useLocation();
//   const [sortValue, setSortValue] = useState("");

//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const [placement, setPlacement] = React.useState('right')
//   // const [grid, setGrid] = useState(true);
//   const dispatch = useDispatch();

//   console.log(mensProduct)
//   useEffect(() => {
//     dispatch(getMenProduct());
//   }, []);
//   useEffect(()=>{
//     let params={}
//     if(categoryfilter.length||sortValue.length||startfilter.length){
//       params.category=categoryfilter
//       params.rating=startfilter
//       params.sort=sortValue
     
//     }
//     setSearchParam(params)
//   },[categoryfilter,startfilter,sortValue])

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     // const searchValue = searchParams.get("q");
//     const category = searchParams.get("category");
  
//     dispatch(getMenProduct());
  
//   }, [location]);

//   const handleChange=(e)=>{
//    setCategoryFilter(e);
//   }
//   const handleChangestar=(e)=>{
//     setStarFilter(e);
//    }

//    useEffect(() => {
//     let params = {};
//     if (categoryfilter.length || sortValue.length||startfilter.length) {
//       params.category = categoryfilter;
//       params.rating=startfilter
//       params.sort = sortValue;
//     }
//     setSearchParam(params);
//   }, [categoryfilter, sortValue,startfilter]);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     // const searchValue = searchParams.get("q");
//     if (mensProduct?.length === 0 || location) {
//       const getProductParam = {
//         params: {
//           category: searchParams.getAll("category"),
//           rating:searchParams.getAll("rating"),
//           _sort: "price",
//           _order: searchParams.getAll("sort")[0],
//         },
//       };
//       dispatch(getMenProduct(getProductParam));
//     }
//   }, []);
//   return (
//     <div style={{ width: "95%", margin: "auto" }}>
//       {/* ------BreadCrumb------ */}
//       <Breadcrumb
//         spacing="5px"
//         separator={<AiOutlineRight color="gray" />}
//         m={"5px"}
//       >
//         <BreadcrumbItem>
//           <Link to={"/"}>American Snake</Link>
//         </BreadcrumbItem>
//         <BreadcrumbItem>
//           <Link to={"/products-men"}>Mens Page</Link>
//         </BreadcrumbItem>
//       </Breadcrumb>
    
// <div style={{display:"flex",justifyContent:"right"}}>
// <Select placeholder='Sort By'width={"150px"} onChange={(e)=>setSortValue(e.target.value)} value={sortValue}>
//   <option value='asc'>Low to high</option>
//   <option value='desc'>High to low</option>
  
// </Select>
// </div>
// <div className="mobileview">     
//       <Icon as={FaFilter} className="filter" size={"20px"} color='red.500' onClick={onOpen}/>    
//       <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
//         <DrawerOverlay/>
//         <DrawerContent>
//           {/* <DrawerHeader borderBottomWidth='1px'>Filter By</DrawerHeader><DrawerCloseButton/> */}
//           <DrawerBody>
//           <Heading
//             size={"sm"}
//             fontWeight={"bold"}
//             marginBottom={"5px"}
//             marginTop={"5px"}
//           >
//             Category
//           </Heading>

//           <CheckboxGroup
//             colorScheme={"green"}
//             onChange={handleChange}
//             value={categoryfilter}
//           >
//             <Stack direction={"column"}>
//             <Checkbox value={"tv"} colorScheme="green">
//                 Tv
//               </Checkbox>
//               <Checkbox value={"camera"} colorScheme="green">
//                 Camera
//               </Checkbox>
//               <Checkbox value={"laptop"} colorScheme="green">
//                 Laptop
//               </Checkbox>
              
             
//               <Checkbox value={"apple"} colorScheme="green">
//                 Iphone
//               </Checkbox>
//             </Stack>
//           </CheckboxGroup>
           
         
//           <Heading
//             size={"sm"}
//             fontWeight={"bold"}
//             marginBottom={"5px"}
//             marginTop={"5px"}
//           >
//             Rating
//           </Heading>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>  
// </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "25% 73%",
//           gap: "5px",
//           marginTop: "10px",
//         }}
//       >
//         {/* ------Left Side------ */}
//         <div className="leftside">
//           <Heading
//             size={"sm"}
//             fontWeight={"bold"}
//             marginBottom={"5px"}
//             marginTop={"5px"}
//           >
//             Category
//           </Heading>

//           <Accordion defaultIndex={[0]} allowMultiple>
//                 <AccordionItem>
//                   <h2>
//                     <AccordionButton>
//                       <Box as="span" flex='1' textAlign='left'>
//                         Category
//                       </Box>
//                       <AccordionIcon />
//                     </AccordionButton>
//                   </h2>
//                   <AccordionPanel pb={4}>
//                     Jeans
//                   </AccordionPanel>
//                   <AccordionPanel pb={4}>
//                     laggy Jeans
//                   </AccordionPanel>
//                 </AccordionItem>

//                 <AccordionItem>
//                   <h2>
//                     <AccordionButton>
//                       <Box as="span" flex='1' textAlign='left'>
//                         Section 2 title
//                       </Box>
//                       <AccordionIcon />
//                     </AccordionButton>
//                   </h2>
//                   <AccordionPanel pb={4}>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//                     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//                     commodo consequat.
//                   </AccordionPanel>
//                 </AccordionItem>
//           </Accordion>
         
//           <Heading
//             size={"sm"}
//             fontWeight={"bold"}
//             marginBottom={"5px"}
//             marginTop={"5px"}
//           >
//             Rating
//           </Heading>
          
//         </div>
//         {/* ------Rigth Side------ */}

//         <div>
//           {isLoading ? (
//             <Box  style={{width:"100%",marginTop:"30px",display:"flex",justifyContent:"center"}}>
//             <Spinner
//               thickness="4px"
//               speed="0.65s"
//               emptyColor="gray.200"
//               color="blue.500"
//               size="xl"
//               style={{display:"flex",justifyContent:"center"}} /></Box>
//           ) : (
//             <Box
//             //  className="productgrid"           
//              display={"grid"}
//              gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}}
//              gap="10px"
            
//             >
//               {mensProduct?.map((item) => (
//                 <div key={item.id}>
//                 <Flex
//                   w={"fit-content"}
//                   margin="auto"
//                   alignItems="center"
//                   justifyContent="center"
//                 >
//                   <Link to={`/products-men/${item.id}`}>
//                     {" "}
//                     <Box
//                       maxW="sm"
//                       borderWidth="1px"
//                       rounded="lg"
//                       shadow="lg"
//                       position="relative"
//                     >
//                       {/* {data.isNew && (
//                         <Circle
//                           size="10px"
//                           position="absolute"
//                           top={2}
//                           right={2}
//                           bg="red.200"
//                         />
//                       )} */}

//                       <Image
//                         m="auto"
//                         width={{base:"150px",md:"150px",lg:"250px"}}
//                         height={{base:"150px",md:"150px",lg:"220px"}}
//                         src={item.src}
//                         alt={`Picture of ${item.title}`}
//                         roundedTop="lg"
//                       />

//                       <Box p="6">
//                         <Box
//                           display="flex"
//                           alignItems="center"
//                           justifyContent={"space-between"}
//                         >
//                           {/* {data.isNew && (
//                             <Badge
//                               rounded="full"
//                               px="2"
//                               fontSize="0.8em"
//                               colorScheme="red"
//                             >
//                               New
//                             </Badge>
//                           )} */}
                      
//                         </Box>
//                         <Flex
//                           mt="1"
//                           justifyContent="space-between"
//                           alignContent="center"
//                         >
//                           <Text fontSize="sm" fontWeight="semibold">
//                             {item.productname}
//                           </Text>
//                         </Flex>

//                         <Flex
//                           justifyContent="space-between"
//                           alignContent="center"
//                         >
//                           {/* <Rating
//                             rating={item.rating}
//                             numReviews={item.reviews}
//                           /> */}
//                           {"  "}
//                         </Flex>
//                         <Box fontSize="2xl">
//                           <Box as="span" color={"gray.600"} fontSize="2xl">
//                             ₹
//                           </Box>
//                           {(item.regularprice * 80).toFixed(2)}
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Link>
//                 </Flex>
//                 </div>
//               ))}
//             </Box>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MensProduct;
