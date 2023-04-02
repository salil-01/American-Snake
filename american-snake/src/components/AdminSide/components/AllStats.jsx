import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { getData } from "../api";
const url = "https://american-eagle-mock-server.onrender.com";
const StatsCard = (props) => {
  const { title, stat, icon } = props;

  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      boxShadow={"base"}
      // border={"1px solid"}
      borderColor={useColorModeValue("gray.500", "gray.500")}
      borderRadius={"3px"}
      backgroundColor={"white"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};

export const AllStats = () => {
  const [userCount, setUserCount] = useState(0);
  const [menData, setMenData] = useState(0);
  const [womenData, setWomenData] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  useEffect(() => {
    //mens data
    getData(`${url}/men`).then((res) => {
      // console.log(res.data);
      setMenData(res.length);
    });

    //women data
    getData(`${url}/women`).then((res) => {
      // console.log(res.data);
      setWomenData(res.length);
    });

    //users data
    getData(`${url}/user`).then((res) => {
      // console.log(res.data);
      setUserCount(res.length);
    });
    getData(`${url}/order`).then((res) => {
      setOrderCount(res.length);
    });
  }, []);

  return (
    <>
      <Box
        fontFamily={
          "Assistant, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
        }
        maxW="7xl"
        mx={"auto"}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            title={"All Users"}
            stat={userCount} //MAPED USER NUMBER
            icon={<BsPerson size={"3em"} />}
          />
          <StatsCard
            title={"Total Products"}
            stat={menData + womenData} //MAPED TOTAL INVENTORY PRODUCTS NUMBER
            icon={<TfiShoppingCartFull size={"3em"} />}
          />
          <StatsCard
            title={"Total  Orders"}
            
            stat={orderCount} //MAPED TOTAL Users  NUMBER
            icon={<FiShoppingCart size={"3em"} />}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};
