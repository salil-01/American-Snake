import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getData } from "../api";
ChartJS.register(ArcElement, Tooltip, Legend);
const url = "https://american-eagle-mock-server.onrender.com";

const Chart = () => {
  const [menData, setMenData] = useState(0);
  const [womenData, setWomenData] = useState(0);

  useEffect(() => {
    //mens data
    getData(`${url}/men`).then((res)=>{
      // console.log(res)
      setMenData(res.length)
    })
    //women data
    getData(`${url}/women`).then((res) => {
      // console.log(res.data);
      setWomenData(res.length);
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

  return (
    <>
      <Box border="1px solid gray" shadow={"xl"} p={3}>
        <Box m={"10px 10px"}>
          <Text fontSize="xl">Products statistics</Text>
        </Box>
        <Box p={"15px"} textAlign={"center"} alignContent={"center"} w={"50%"}>
          <Doughnut data={data} />
        </Box>
      </Box>
    </>
  );
};

export default Chart;
