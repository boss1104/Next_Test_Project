import React from "react";

// import Image from "next/image";
import Link from "next/link";

import { Image, Text } from "@chakra-ui/react";

export interface IProductItem {
  imgUrl: string;
  name: string;
  link: string;
}

const ProductItem: React.FC<IProductItem> = ({ imgUrl, name, link }) => {
  return (
    <div className="border rounded-md flex gap-2 grid grid-cols-2">
      <Link
        href={link}
        target="_blank"
        className="flex items-center justify-center p-2"
      >
        <Image src={imgUrl} className="rounded-l-md" />
      </Link>
      <div className="flex items-center justify-center">
        <Link href={link} target="_blank">
          <Text>{name}</Text>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
