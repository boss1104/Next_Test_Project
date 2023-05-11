import React, { Dispatch, SetStateAction, useState } from "react";

import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

import { IProductItem } from "../ProductsView/ProductItem";

export interface ISearchBox {
  productList: Array<IProductItem>;
  setProductList: Dispatch<SetStateAction<Array<IProductItem>>>;
  setStage: Dispatch<SetStateAction<number>>;
  products: Array<IProductItem>;
  setProducts: Dispatch<SetStateAction<Array<IProductItem>>>;
}

const SearchBox: React.FC<ISearchBox> = ({
  productList,
  setProductList,
  setStage,
  products,
  setProducts,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTarget, setSearchTarget] = useState("https://www.amazon.com");

  const handleSearch = async () => {
    try {
      let data: any = null;
      if (searchTarget === "https://www.amazon.com") {
        const res = await fetch("/api/amazonSearch", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            searchQuery: searchQuery,
          }),
        });
        console.log(res);
        data = await res.json();
        productList.splice(0, data.length);
        for (let i = 0; i < data.length; i++) {
          productList.push({
            imgUrl: data[i].image,
            name: data[i].title,
            link: data[i].link,
          });
        }
      }

      if (searchTarget === "https://www.target.com") {
        const res = await fetch("/api/targetSearch", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            searchQuery: searchQuery,
          }),
        });
        data = await res.json();
        productList.splice(0, data.length);
        for (let i = 0; i < data.length; i++) {
          productList.push({
            imgUrl: data[i].product.main_image,
            name: data[i].product.title,
            link: data[i].product.link,
          });
        }
        console.log(productList);
      }

      setProductList([...productList]);
      setStage(1);
      products.splice(0, products.length);

      let startValue = 0;
      let endValue = productList.length >= 9 ? 9 : productList.length;
      for (let i = startValue; i < endValue; i++) {
        products.push(productList[i]);
      }

      setProducts([...products]);

      localStorage.setItem("products", JSON.stringify(productList));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchQuery = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchTarget = (e: any) => {
    setSearchTarget(e.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement width="15.5rem">
        <Select
          variant="filled"
          onChange={handleSearchTarget}
          value={searchTarget}
        >
          <option value="https://www.amazon.com">https://www.amazon.com</option>
          <option value="https://www.target.com">https://www.target.com</option>
          <option value="https://www.johnlewis.com">
            https://www.johnlewis.com
          </option>
        </Select>
      </InputLeftElement>
      <Input
        pl="16rem"
        pr="7rem"
        onChange={handleSearchQuery}
        value={searchQuery}
      />

      <InputRightElement width="6.5rem">
        <Button
          colorScheme="blue"
          leftIcon={<Search2Icon />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBox;
