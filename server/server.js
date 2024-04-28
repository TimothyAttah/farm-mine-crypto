import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import { authRouters } from './routes/authRoutes.js';
import paymentRoutes from './routes/payemtRoutes.js';
import https from 'https';
import http from 'http';
import WebSocket from 'ws';

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// const corsOptions = {
//   // origin: 'http://localhost:3000',
//   origin: 'https://enoch-louis-bootcamp.vercel.app',
//   credentials: true,
//   'access-control-allow-credentials': true,
//   optionSuccessStatus: 200,
// };

const corsOptions = {
  origin: 'https://enoch-louis-bootcamp.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Welcome To Enoch Louis Coding Bootcamp School version 3');
});

// app.get('/', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Max-Age', '1800');
//   res.setHeader('Access-Control-Allow-Headers', 'content-type');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'PUT, POST, GET, DELETE, PATCH, OPTIONS',
//   );
// });

app.use('/api/auth', authRouters);
// app.use('/api/projectCleanEarth/pay', paymentRoutes);
app.use('/api/pay', paymentRoutes);
// app.use('api.paystack.co');

// app.get('/api/paystack', function (req, res) {
//   // const https = require('https');

//   const params = JSON.stringify({
//     amount: req.body.amount,
//     email: req.body.email,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   });

//   // const params = JSON.stringify({
//   //   amount: '60000',
//   //   email: 'jane@gmail.com',
//   //   firstname: 'Jane88',
//   //   lastname: 'Dimer',
//   // });

//   console.log(params);

//   const options = {
//     hostname: 'api.paystack.co',
//     port: 443,
//     path: '/transaction/initialize',
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
//       'Content-Type': 'application/json',
//     },
//   };

//   const requestPaystack = https
//     .request(options, (resPaystack) => {
//       let data = '';

//       resPaystack.on('data', (chunk) => {
//         data += chunk;
//       });

//       resPaystack.on('end', () => {
//         // console.log(JSON.parse(data));
//         res.json({ data: data });
//         // res.send(data);
//       });
//     })
//     .on('error', (error) => {
//       console.error(error);
//     });

//   requestPaystack.write(params);
//   requestPaystack.end();
// });

app.get('/api/paystack/verify', function (req, res) {
  // const options = {
  //   hostname: 'api.paystack.co',
  //   port: 443,
  //   path: '/transaction/verify/:reference',
  //   method: 'GET',
  //   headers: {
  //     Authorization: 'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
  //   },
  // };
  // https
  //   .request(options, (resPaystack) => {
  //     let data = '';

  //     resPaystack.on('data', (chunk) => {
  //       data += chunk;
  //     });

  //     const params = JSON.stringify(data);

  //     resPaystack.on('end', () => {
  //       // console.log(JSON.parse(data));

  //       res.json({ data: params });
  //     });
  //   })
  //   .on('error', (error) => {
  //     console.error(error.message);
  //   });

  // const https = require('https');

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/verify/' + encodeURIComponent(req),
    method: 'GET',
    headers: {
      Authorization: 'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
    },
  };

  let reqAPI = https
    .request(options, (resPaystack) => {
      let data = '';

      resPaystack.on('data', (chunk) => {
        data += chunk;
      });

      resPaystack.on('end', () => {
        res.send(data);
        // console.log(JSON.parse(data));
      });
    })
    .on('error', (error) => {
      console.error(error);
    });

  reqAPI.end();
});

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// server.listen(8080, function listening() {
//   console.log('Listening on %d', server.address().port);
// });
