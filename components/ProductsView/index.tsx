import React from "react";

import ProductItem from "./ProductItem";

import { IProductItem } from "./ProductItem";

export interface IProductsView {
  productList: Array<IProductItem>;
}

const ProductsView: React.FC<IProductsView> = ({ productList }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
      {productList.map((productItem, index) => {
        return (
          <ProductItem
            imgUrl={productItem.imgUrl}
            name={productItem.name}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ProductsView;
