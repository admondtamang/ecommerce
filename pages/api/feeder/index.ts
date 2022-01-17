import type { NextApiRequest, NextApiResponse } from 'next';
import JsonBucket from '../../../models/jsonbucket';
import axiosInstance from '../../../utils/axios';
import JSON_HOME from '../../../utils/json/json-home';

type Data = {
  name: string;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = req.body;
  switch (req.method) {
    case 'GET':
      const bucket: any = await JsonBucket.find({});

      res.status(200).json({ name: '', data: bucket });

      break;
    case 'POST':
      const result: any = await Promise.all(
        data.product_ids.map(async (product_id: Number) => await axiosInstance.get('wp-json/wc/v3/products/' + product_id))
      );
      //filter data.data
      const finalResult = result.map((last: any) => last.data);

      res.status(200).json({
        name: 'POST',
        data: { name: data?.title, icon: data?.icon, category_id: data?.category_id, products: finalResult },
      });

      break;

    default:
      break;
  }
}
