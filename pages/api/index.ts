// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '../../utils/axios';
// import redis from '../../utils/redis';
import dbConnect from '../../utils/dbConnect';
import JsonBucket from '../../models/jsonbucket';
import JSON_HOME from '../../utils/json/json-home';

type Data = {
  name: string;
  data: any;
};

dbConnect();
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = req.body;
  switch (req.method) {
    case 'GET':
      var user = new JsonBucket({
        name: 'json',
        body: JSON.stringify(JSON_HOME),
      });
      // Create new user
      var usercreated = await user.save();

      res.status(200).send({ name: 'John Doe', data: usercreated });
      break;
    case 'POST':
      const result = await axiosInstance.get('/wp-json/wc/v3/products');
      // await redis.set('key', 'code');
      var user = new JsonBucket({
        name: 'json',
        body: JSON_HOME,
      });
      // Create new user
      var usercreated = await user.save();

      res.status(200).send({ name: 'John Doe', data: [] });
      break;
  }
}

// function getOrSetCache(key:String, cb:Function) {
//   return new Promise((resolve:any, reject:any) => {
//     redis.get(key,async (error,data)=>{

//       resolve(data)
//     })

//   });
// }
