import React from "react";

// import Image from "next/image";
import Link from "next/link";

import { Image, Text } from "@chakra-ui/react";

export interface IProductItem {
  imgUrl: string;
  name: string;
}

const ProductItem: React.FC<IProductItem> = ({ imgUrl, name }) => {
  return (
    <div className="border rounded-md flex gap-2">
      <Link href="#" passHref>
        <Image src={imgUrl} className="rounded-l-md" />
      </Link>
      <div className="flex items-center justify-center">
        <Link href="#" passHref>
          <Text>{name}</Text>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
