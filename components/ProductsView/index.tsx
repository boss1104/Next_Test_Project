import React, { Dispatch, SetStateAction } from "react";

import ProductItem from "./ProductItem";

import Pagination from "../Pagination";

import { IProductItem } from "./ProductItem";

export interface IProductsView {
  productList: Array<IProductItem>;
  products: Array<IProductItem>;
  setProducts: Dispatch<SetStateAction<Array<IProductItem>>>;
  stage: number;
  setStage: Dispatch<SetStateAction<number>>;
}

const ProductsView: React.FC<IProductsView> = ({
  productList,
  products,
  setProducts,
  stage,
  setStage,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Pagination
        totalCount={productList.length}
        stage={stage}
        setStage={setStage}
        products={products}
        setProducts={setProducts}
        productList={productList}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {products.map((product, index) => {
          return (
            <ProductItem
              imgUrl={product.imgUrl}
              name={product.name}
              link={product.link}
              key={index}
            />
          );
        })}
      </div>
      <Pagination
        totalCount={productList.length}
        stage={stage}
        setStage={setStage}
        products={products}
        setProducts={setProducts}
        productList={productList}
      />
    </div>
  );
};

export default ProductsView;
