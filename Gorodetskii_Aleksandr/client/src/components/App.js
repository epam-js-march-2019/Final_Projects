import React, { Component } from "react";
import {
  Container,
  Box,
  Heading,
  Card,
  Image,
  Text,
  SearchField,
  Icon
} from "gestalt";
import { Link } from "react-router-dom";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
import Loader from './Loader';

const apiUrl = process.env.API_URL || "http://localhost:1337";
const StrapiRq = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: [],
		searchValue: "",
		loadingSpinner: true
  };

  async componentDidMount() {
    try {
      const response = await StrapiRq.request("POST", "/graphql", {
        data: {
          query: `query {
						brands {
							_id
							name
							description
							createdAt
							image {
								url
								name
							}
						}
					}`
        }
      });
      this.setState({ brands: response.data.brands, loadingSpinner: false });
    } catch (err) {
			console.error(err);
			this.setState({ loadingSpinner: false})
    }
  }

  changeHandler = ({ value }) => {
    this.setState({ searchValue: value });
  };

  filterItems = ({ searchValue, brands }) => {
    return brands.filter(brand => {
      return (
        brand.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  };

  render() {
    const { searchValue, loadingSpinner } = this.state;

    return (
      <Container>
        {/*Search component*/}
        <Box display="flex" justifyContent="center" marginTop={4}>
          <SearchField
            id="searchField"
            accessibilityLabel="Search"
            onChange={this.changeHandler}
						placeholder="Search"
						value={searchValue}
          />
          <Box margin={3}>
            <Icon
              icon="filter"
              color={searchValue ? "orange" : "gray"}
              size={20}
              accessibilityLabel="Filter"
            />
          </Box>
        </Box>

        {/*Brand Section*/}
        <Box display="flex" justifyContent="center" marginBottom={2}>

          {/*Brands Header*/}
          <Heading color="midnight" size="md">
            Barbershop Brands
          </Heading>
        </Box>

        {/*Brands*/}
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d6c8ec"
            }
          }}
          shape="rounded"
          wrap
          display="flex"
          justifyContent="around"
        >
          {this.filterItems(this.state).map(brand => (
            <Box paddingY={4} width={200} margin={2} key={brand._id}>
              <Card
                image={
                  <Box height={200} width={200}>
                    <Image
                      fit="contain"
                      alt="Brand Logo"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brand.image.url}`}
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
                  <Text size="xl">{brand.name}</Text>
                  <Text>{brand.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${brand._id}`}>Check</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
				<Loader show={loadingSpinner} />
      </Container>
    );
  }
}

export default App;
