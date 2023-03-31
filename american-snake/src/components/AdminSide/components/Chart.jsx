import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getData } from "../api";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);
const url = "https://american-eagle-mock-server.onrender.com";

const Chart = () => {
  const [menData, setMenData] = useState(0);
  const [womenData, setWomenData] = useState(0);
  const [pending, setPending] = useState(0);
  const [delivered, setDelieverd] = useState(0);
  useEffect(() => {
    //mens data
    getData(`${url}/men`).then((res) => {
      // console.log(res)
      setMenData(res.length);
    });
    //women data
    getData(`${url}/women`).then((res) => {
      // console.log(res.data);
      setWomenData(res.length);
    });
    getData(`${url}/order`).then((res) => {
      // console.log(res);
      let pendingCount = 0;
      let deleiverdCount = 0;
      res?.map((item) => {
        if (item.status === "pending") {
          pendingCount++;
        } else {
          deleiverdCount++;
        }
      });
      setPending(pendingCount);
      setDelieverd(deleiverdCount);
    });
  }, []);

  const data = {
    datasets: [
      {
        data: [menData, womenData],
        backgroundColor: ["orange", "teal"],
      },
    ],
    labels: ["Mens", "Women"],
  };
  const orderData = {
    datasets: [
      {
        data: [pending, delivered],
        backgroundColor: ["#AEEA00", "green"],
      },
    ],
    labels: ["Pending", "Delivered"],
  };

  return (
    <>
      <Box
        width={{ sm: "90%", md: "80%", lg: "50%" }}
        margin={"20px auto"}
        p={3}
      >
        <Box>
          <Text fontSize="xl" mb={"10px"}>
            Products Statistics{" "}
          </Text>
        </Box>
        <Box
          p={"15px"}
          width={"50%"}
          margin={"auto"}
          boxShadow={"base"}
          borderRadius={"5px"}
          backgroundColor={"white"}
        >
          <Doughnut data={data} />
        </Box>
      </Box>
      <Box
        width={{ sm: "90%", md: "80%", lg: "50%" }}
        margin={"20px auto"}
        p={3}
      >
        <Box>
          <Text fontSize="xl" mb={"10px"}>
            Orders Statistics
          </Text>
        </Box>
        <Box
          p={"15px"}
          width={"50%"}
          margin={"auto"}
          boxShadow={"base"}
          borderRadius={"5px"}
          backgroundColor={"white"}
        >
          <Doughnut data={orderData} />
        </Box>
      </Box>
    </>
  );
};

export default Chart;
