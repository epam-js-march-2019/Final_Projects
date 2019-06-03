import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import {
  Box,
  Heading,
  Text,
  Image,
  Card,
  Button,
  Mask,
  IconButton
} from "gestalt";
import { Link } from "react-router-dom";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const StrapiRq = new Strapi(apiUrl);

class Products extends React.Component {
  state = {
    products: [],
    brand: "",
    cartItems: []
  };

  async componentDidMount() {
    // console.log(this.props.match.params.productId)
    try {
      const response = await StrapiRq.request("POST", "/graphql", {
        data: {
          query: `query {
				brand(id: "${this.props.match.params.productId}") {
					_id
					name
					products {
						_id
						name
						price
						description
						image {
							url
						}
					}
				}
			}`
        }
      });
      console.log(response);
      this.setState({
        products: response.data.brand.products,
        brand: response.data.brand.name
      });
    } catch (err) {
      console.error(err);
    }
  }

  addToCart = product => {
    const alreadyIn = this.state.cartItems.findIndex(
      item => item._id === product._id
    );

    if (alreadyIn === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...product,
        quantity: 1
      });
      this.setState({ cartItems: updatedItems });
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyIn].quantity += 1;
      this.setState({ cartItems: updatedItems });
    }
  };

  render() {
    const { brand, products, cartItems } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: "wrap-reverse"
          }
        }}
      >
        {/*Products Section*/}
        <Box display="flex" direction="column" alignItems="center">
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>

          {/*Products*/}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd8"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={3}
          >
            {products.map(product => (
              <Box paddingY={4} width={200} margin={2} key={product._id}>
                <Card
                  image={
                    <Box height={260} width={215}>
                      <Image
                        fit="contain"
                        alt="Brand Logo"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${product.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box margin={2}>
                      <Text size="xl">{product.name}</Text>
                    </Box>
                    <Text>{product.description}</Text>
                    <Text color="orchid">{product.price}$</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button
                          color="blue"
                          text="Add to shoping cart"
                          onClick={() => this.addToCart(product)}
                        />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Cart Area */}
        <Box marginTop={2} alignSelf="end" marginLeft={7}>
          <Mask shape="rounded" wash>
            <Box
              display="flex"
              direction="column"
              alignItems="center"
              padding={3}
            >
              {/* Cart Heading */}
              <Heading align="center" size="md">
                Shoping Cart
              </Heading>
              <Text color="gray" italic>
                {cartItems.length} Items selected
              </Text>

              {/* Cart Items */}
              {cartItems.map(item => (
                <Box key={item._id} display="flex" alignItems="center">
                  <Text>
                    {item.name} x {item.quantity} - $
                    {(item.quantity * item.price).toFixed(2)}
                  </Text>
                  <IconButton
                    accessibilityLabel="Delete"
                    icon="cancel"
                    size="sm"
                    iconColor="red"
                  />
                </Box>
              ))}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Cart is empty</Text>
                  )}
                </Box>
                <Text size="lg">Total:</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Products;
