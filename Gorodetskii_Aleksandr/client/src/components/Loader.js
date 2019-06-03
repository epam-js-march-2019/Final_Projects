import React from "react";
import { GridLoader } from "react-spinners";
import { Box } from "gestalt";

const Loader = (state) => {
  return (
    state.show && <Box
      position="fixed"
      dangerouslySetInlineStyle={{
        __style: {
          bottom: 510,
          left: "50%",
          transform: "translate(-50%)"
        }
      }}
    >
      <GridLoader color="darkorange" size={24} margin="3px" />
    </Box>
  );
};

export default Loader;
