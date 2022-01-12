// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../utils/axios';

type Data = {
  name: string;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await axiosInstance.get('/wp-json/wc/v3/products');
  // console.log(data);

  res.status(200).send({ name: 'John Doe', data: JSON.stringify(data) });
}
