import React, { Dispatch, SetStateAction } from "react";

import { Box, IconButton, useRadio, useRadioGroup } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { IProductItem } from "../ProductsView/ProductItem";

export interface IPagination {
  stage: number;
  setStage: Dispatch<SetStateAction<number>>;
  products: Array<IProductItem>;
  setProducts: Dispatch<SetStateAction<Array<IProductItem>>>;
  productList: Array<IProductItem>;
  totalCount: number;
}

const Pagination: React.FC<IPagination> = ({
  stage,
  setStage,
  products,
  setProducts,
  productList,
  totalCount,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.trunc(totalCount / 9 + 1); i++) {
    let temp = i;

    paginationNumbers.push(temp.toString());
  }

  function RadioCard(props: any) {
    const { getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          _checked={{
            bg: "teal.600",
            color: "white",
            borderColor: "teal.600",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          boxSize="38px"
          className="rounded-md flex items-center justify-center"
        >
          {props.children}
        </Box>
      </Box>
    );
  }

  const { getRootProps, getRadioProps, setValue, value } = useRadioGroup({
    name: "pagination",
    defaultValue: stage.toString(),
    value: stage.toString(),
    onChange: (value) => setProductView(parseInt(value)),
  });

  const handleLeft = () => {
    let currentValue: number = Number(value);

    const leftValue = currentValue >= 2 ? currentValue - 1 : currentValue;

    setProductView(leftValue);
  };

  const handleRight = () => {
    let currentValue: number = Number(value);

    const rightValue =
      currentValue < Math.trunc(totalCount / 9 + 1)
        ? currentValue + 1
        : currentValue;

    setProductView(rightValue);
  };

  const setProductView = (stage: number) => {
    setStage(stage);

    products.splice(0, products.length);

    let startValue = (stage - 1) * 9;
    let endValue =
      startValue + 9 <= productList.length
        ? startValue + 9
        : productList.length;
    for (let i = startValue; i < endValue; i++) {
      products.push(productList[i]);
    }

    setProducts([...products]);
  };

  return products.length ? (
    <div className="flex items-center justify-center gap-2">
      <IconButton
        aria-label="Left"
        variant="outline"
        icon={<ChevronLeftIcon />}
        onClick={handleLeft}
      />
      {paginationNumbers.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
      <IconButton
        aria-label="Right"
        variant="outline"
        icon={<ChevronRightIcon />}
        onClick={handleRight}
      />
    </div>
  ) : (
    <div />
  );
};

export default Pagination;
