import getTargetProductData from "@/lib/getTargetProductData";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  await getTargetProductData(_req.body.searchQuery)
    .then((result) => {
      //console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
};

export default handler;
