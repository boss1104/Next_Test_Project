import getAmazonProductData from "@/lib/getAmazonProductData";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  await getAmazonProductData(_req.body.searchQuery)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
};

export default handler;
