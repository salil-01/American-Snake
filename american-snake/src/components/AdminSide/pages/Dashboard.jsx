import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { AllStats } from "../components/AllStats";
import Chart from "../components/Chart";

export const Dashboard = () => {
  return (
    <div>
      <Heading fontWeight={"thiner"} as="h2" size="xl">
        Dashboard
      </Heading>
      <AllStats />
      <Flex w={"100%"} margin={"auto"} flexDirection={{sm:"column",md:"row",lg:"row"}} justifyContent={"space-around"}>
        <Chart />
      </Flex>
    </div>
  );
};
