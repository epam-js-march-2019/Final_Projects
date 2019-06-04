import React from "react";
import { Box, Toast } from "gestalt";

const Warning = ({ show, message }) => {
  if (show) {
    return (
      <Box
        dangerouslySetInlineStyle={{
          __style: {
            bottom: 270,
            left: "50%",
            transform: "translate(-50%)"
          }
        }}
        position="fixed"
      >
        <Toast color="orange" text={message} />
      </Box>
    );
  } else {
    return null;
  }
};

export default Warning;
