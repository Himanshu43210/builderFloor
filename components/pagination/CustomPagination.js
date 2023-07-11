import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";



const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {

    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (event, page) => {
        onPageChange(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex justify-end pr-[60px] ">
            <Stack spacing={2}>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    defaultPage={1}
                />
            </Stack>
        </div>
    );
};

export default CustomPagination;

// import React, { useEffect } from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
//   const pageCount = Math.ceil(totalItems / itemsPerPage);

//   useEffect(() => {
//     // Ensure current page is within valid range
//     if (currentPage < 1) {
//       onPageChange(1);
//     } else if (currentPage > pageCount) {
//       onPageChange(pageCount);
//     }
//   }, [currentPage, pageCount, onPageChange]);

//   const handlePageChange = (event, page) => {
//     onPageChange(page);
//   };

//   return (
//     <div className="flex justify-end pr-[60px]">
//       <Stack spacing={2}>
//         <Pagination
//           count={pageCount}
//           page={currentPage}
//           onChange={handlePageChange}
//           color="primary"
//           variant="outlined"
//           shape="rounded"
//           boundaryCount={2}
//         />
//       </Stack>
//     </div>
//   );
// };

// export default CustomPagination;

