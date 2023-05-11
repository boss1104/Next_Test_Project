import { useEffect, useState } from "react";

import ProductsView from "../components/ProductsView";
import SearchBox from "../components/SearchBox";

import { IProductItem } from "../components/ProductsView/ProductItem";

const Home = () => {
  const [productList, setProductList] = useState<Array<IProductItem>>([]);
  const [products, setProducts] = useState<Array<IProductItem>>([]);

  const [stage, setStage] = useState(1);

  useEffect(() => {
    let data: Array<IProductItem> = JSON.parse(
      localStorage.getItem("products")
    );

    setProductList(data);

    products.splice(0, products.length);
    for (let i = 0; i < (data.length >= 9 ? 9 : data.length); i++) {
      products.push(data[i]);
    }

    setProducts([...products]);
  }, []);

  return (
    <div className="p-4 flex flex-col gap-2">
      <SearchBox
        productList={productList}
        setProductList={setProductList}
        setStage={setStage}
        products={products}
        setProducts={setProducts}
      />
      <ProductsView
        productList={productList}
        products={products}
        setProducts={setProducts}
        stage={stage}
        setStage={setStage}
      />
    </div>
  );
};

export default Home;
