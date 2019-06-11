import React from "react";
import { Container, Box, Button, Text, Heading, TextField } from "gestalt";
import Warning from "./Warning";
import { getCart, calculatePrice } from "../utility";

class Checkout extends React.Component {
  state = {
    cartItems: [],
    address: "",
    postalCode: "",
    city: "",
    confirmEmail: "",
    warning: false,
    warningMessage: ""
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() });
  }

  changeHandler = ({ event, value }) => {
    this.setState({
      [event.target.name]: value
    });
  };

  orderHandler = async event => {
    const { address, postalCode, city, confirmEmail } = this.state;
    event.preventDefault();

    if (address && postalCode && city && confirmEmail) {
      // console.log('submitted')
      try {
        alert("Order complete");
      } catch (err) {
        this.showWarningMessage(err.message);
        this.setState({ disableSubmit: false });
      }
    } else {
      this.showWarningMessage("You have to fill all fields");
      // console.log('form is empty');
    }
  };

  showWarningMessage = message => {
    this.setState({ warning: true, warningMessage: message });
    setTimeout(
      () => this.setState({ warning: false, warningMessage: "" }),
      2000
    );
  };

  render() {
    const { warning, warningMessage, cartItems } = this.state;
    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={5}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout Header */}
          <Heading color="midnight">Checkout</Heading>

          {/* Cart */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
            marginTop={3}
            marginBottom={5}
          >
            <Text color="darkGray">{cartItems.length} Items in cart</Text>
            <Box padding={2}>
              {cartItems.map(item => (
                <Box key={item._id} padding={2}>
                  <Text color="midnight">
                    {item.name} x {item.quantity} = {item.quantity * item.price}
                    $
                  </Text>
                </Box>
              ))}
            </Box>
            <Text bold>Total: {calculatePrice(cartItems)}</Text>
          </Box>

          {/* Checkout Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit={this.orderHandler}
          >
            {/* Address */}
            <TextField
              id="address"
              type="text"
              name="address"
              placeholder="Delivery address"
              onChange={this.changeHandler}
            />

            {/* Postal code */}
            <TextField
              id="postalCode"
              type="number"
              name="postalCode"
              placeholder="Postal code"
              onChange={this.changeHandler}
            />

            {/* City */}
            <TextField
              id="city"
              type="text"
              name="city"
              placeholder="City"
              onChange={this.changeHandler}
            />

            {/* Confirm email */}
            <TextField
              id="confirmEmail"
              type="email"
              name="confirmEmail"
              placeholder="Confirmation email"
              onChange={this.changeHandler}
            />

            <Button color="blue" text="submit" type="submit" inline />
          </form>
        </Box>
        <Warning show={warning} message={warningMessage} />
      </Container>
    );
  }
}

export default Checkout;
