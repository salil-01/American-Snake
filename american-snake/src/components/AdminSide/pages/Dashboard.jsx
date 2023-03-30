import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { AllStats } from "../components/AllStats";
import BarGraph from "../components/BarGraph";
import Chart from "../components/Chart";
// import BarChart from "../Components/BarChart";
// import BasicStatistics from "../Components/BasicStatistics";
// import Chart from "../Components/Chart";

export const Dashboard = () => {
  return (
    <div style={{border:"1px solid red"}}>
      <Heading fontWeight={"thiner"} as="h2" size="xl">
        Dashboard
      </Heading>
      <AllStats />
      <Box
        w={"100%"}
        m={"30px 0px 0px 0px"}
        display={"flex"}
        justifyContent={"space-around"}
        gap={"15px"}
        
      >
        <Box w={"50%"}>
          {/* <BarGraph /> */}
        </Box>
        <Box w={"50%"}>
          <Chart />
        </Box>
      </Box>
    </div>
  );
};
