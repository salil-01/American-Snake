import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function createArrayOfSize(n) {
  let arr = new Array(+n).fill(0);
  return arr;
}
const getCurrentPage = (page) => {
  let pageNumber = Number(page);
  return pageNumber;
};
function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(
    getCurrentPage(initialPage) || 1
  );
  const totalPages = 3;
  const handlePageChange = (val) => {
    setCurrentPage(val);
  };
  useEffect(() => {
    let params = {};
    currentPage && (params.page = currentPage);
    setSearchParams(params)
  }, [currentPage]);
  //   console.log(totalPages);
  let pages = createArrayOfSize(totalPages).map((a, i) => (
    <Button
      size={"sm"}
      borderRadius={"6px"}
      border={"1px solid #333333"}
      _hover={{
        backgroundColor: "#333333",
        color: "white",
      }}
      key={i + 1}
      isDisabled={currentPage == i + 1}
      onClick={() => handlePageChange(i + 1)}
    >
      {i + 1}{" "}
    </Button>
  ));
  //   console.log(pages);
  return (
    <Flex
      justifyContent={"space-between"}
      width={["70%", "70%", "70%", "40%", "40%"]}
      margin={"auto"}
      flexDirection={"row"}
    >
      {pages}
    </Flex>
  );
}
export default Pagination;
