import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
      color="midnight"
      padding={1}
      shape="roundedBottom"
    >
      {/* SignIn lnk*/}
      <NavLink activeClassName='active' to="/signin">
        <Text size="xl" color="white">
          Sign In
        </Text>
      </NavLink>

      {/*Title and Logo*/}
      <NavLink activeClassName='active'  exact to="/">
        <Box display='flex' alignItems='center'>
          <Box margin={2} height={50} width={50}>
            <Image
              src="./icons/logo.svg"
              alt="Barbershop"
              naturalHeight={1}
              naturalWidth={1}
            />
          </Box>
          <Heading size="xs" color="lightGray">
            Barbershop
						{/* "blue","darkGray","eggplant","gray","green","lightGray","maroon","midnight","navy","olive","orange","orchid","pine","purple","red","watermelon","white" */}
          </Heading>
        </Box>
      </NavLink>

      {/* SignIn lnk*/}
      <NavLink activeClassName='active' to="/signup">
        <Text size="xl" color="white">
          Sign Up
        </Text>
      </NavLink>
    </Box>
  );
};

export default Navbar;
