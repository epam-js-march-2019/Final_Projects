import React from "react";
import { Box, Text, Heading, Image, Button } from "gestalt";
import { NavLink, withRouter } from "react-router-dom";
import { getToken, clearToken, clearCart } from "../utility";

class Navbar extends React.Component {
  logoutHandler = () => {
    //Clear token > cart > to homepage
    clearToken();
    clearCart();
    this.props.history.push("/");
  };

  render() {
    return getToken() !== null ? (
      <AuthenticatedNavBar logoutHandler={this.logoutHandler} />
    ) : (
      <UnauthenticatedNavBar />
    );
  }
}

const AuthenticatedNavBar = ({ logoutHandler }) => {
  return (
    <Box
      dangerouslySetInlineStyle={{
        __style: {
          backgroundColor: "#41b3a3"
        }
      }}
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
      // color="midnight"
      padding={1}
      shape="roundedBottom"
    >
      {/* Checkout lnk*/}
      <NavLink activeClassName="active" to="/checkout">
        <Text size="xl" color="white">
          Checkout
        </Text>
      </NavLink>

      {/*Title and Logo*/}
      <NavLink activeClassName="active" exact to="/">
        <Box display="flex" alignItems="center">
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
          </Heading>
        </Box>
      </NavLink>

      {/* Logout button*/}
      <Button
        onClick={logoutHandler}
        color="transparent"
        text="LogOut"
        inline
        size="md"
      />
    </Box>
  );
};

const UnauthenticatedNavBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
			dangerouslySetInlineStyle={{
        __style: {
          backgroundColor: "#41b3a3"
        }
      }}
      padding={1}
      shape="roundedBottom"
    >
      {/* SignIn lnk*/}
      <NavLink activeClassName="active" to="/signin">
        <Text size="xl" color="white">
          Sign In
        </Text>
      </NavLink>

      {/*Title and Logo*/}
      <NavLink activeClassName="active" exact to="/">
        <Box display="flex" alignItems="center">
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
      <NavLink activeClassName="active" to="/signup">
        <Text size="xl" color="white">
          Sign Up
        </Text>
      </NavLink>
    </Box>
  );
};

export default withRouter(Navbar);
