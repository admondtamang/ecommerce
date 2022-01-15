import redis from 'redis';
import url from 'url';
const REDIS_PORT = 6379;
const REDIS_HOST = '52.66.251.147'; // This is the IP address of your DigitalOcean droplet
const REDIS_PASSWORD = '1vWHK8OXixGiUU1kimf+Bo4WM+vu8t7Bpdk7VZHvtBc7caNeCDBK1Etazy/1Hho+/Uou4Mr1/gXk0hdNM'; // This is the password we created above for our Redis database.

const REDIS_URL = `redis://${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`;

const { hostname, auth } = url.parse(REDIS_URL ?? '');

const client = redis.createClient({
  url: REDIS_URL,
});

client.on('connect', () => {
  console.log('Redis is connected!');
});

client.on('error', (err: Error) => {
  console.error('There was an error: ', err);
});

process.on('exit', () => {
  client.quit();
});

export default client;
// import { createClient } from 'redis';
// import url from 'url';
// const REDIS_PORT = 6379;
// const REDIS_HOST = '52.66.251.147'; // This is the IP address of your DigitalOcean droplet
// const REDIS_PASSWORD = '1vWHK8OXixGiUU1kimf+Bo4WM+vu8t7Bpdk7VZHvtBc7caNeCDBK1Etazy/1Hho+/Uou4Mr1/gXk0hdNM'; // This is the password we created above for our Redis database.

// // const redisClient = createClient({
// //   host: REDIS_HOST,
// //   port: REDIS_PORT,
// //   password: REDIS_PASSWORD,
// // });

// const client = createClient({
//   host: url.parse(REDIS_HOST ?? ''),
//   port: Number(REDIS_PORT),
//   password: REDIS_PASSWORD,
// });

// // Log errors in case of Redis connection failure
// client.on('error', (error) => {
//   console.log('Redis Error', error);
// });

// // await client.disconnect();

// export default client;
