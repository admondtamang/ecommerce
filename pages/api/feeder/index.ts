import type { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../../utils/axios';

type Data = {
  name: string;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);
  const data = req.body;
  switch (req.method) {
    // case 'GET':
    //   res.status(200).json({ name: 'John Doe', result: [] });

    //   break;
    case 'POST':
      const result: any = await Promise.all(
        data.product_ids.map(async (product_id: Number) => await axiosInstance.get('wp-json/wc/v3/products/' + product_id))
      );
      const finalResult = result.map((last: any) => last.data);

      res.status(200).json({ name: 'POST', data: { name: data.title, products: finalResult } });

      break;

    default:
      break;
  }
}
