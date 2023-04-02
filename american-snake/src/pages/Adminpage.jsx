import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/AdminSide/components/Sidebar";
const AdminPage = () => {
  const [showPage, setShowPage] = useState("dashboard");
  return (
    <>
      {/* <TopNavBar /> */}

      <Flex justifyContent={"space-between"} width={"100%"}>
        <Box
          //   border={"1px solid"}
          width={["40%", "40%", "30%", "18%"]}
          h="100vh"
          position={"fixed"}
        >
          <Sidebar setShowPage={setShowPage} />
        </Box>
        <Box
          //   border={"1px solid"}
          width={["55%", "55%", "60%", "75%"]}
          marginLeft={["50%", "45%", "20%"]}
          bg={"rgb(239,238,241)"}
        >
          {/* {showPage == "dashboard" ? <Dashboard /> : null}
            {showPage == "showprods" ? <AllProducts /> : null}
            {showPage == "showusers" ? <AllUsers /> : null}
            {showPage == "addproduct" ? <AddProduct /> : null} */}
        </Box>
      </Flex>
    </>
  );
};
export default AdminPage;
